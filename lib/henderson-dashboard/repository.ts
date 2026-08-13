import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireDashboardAdmin, requireDashboardSession } from "./auth";
import { getHendersonSupabaseAdmin } from "./supabaseAdmin";
import { duplicateContentDraft, deriveWorkflowStatus } from "./status";
import { fromDashboardDateTimeLocal } from "./time";
import type {
  HendersonAuditEventType,
  HendersonContentItem,
  HendersonContentStatus,
  HendersonContentTone,
  HendersonContentType,
  HendersonRole,
} from "./types";

const contentStatuses: HendersonContentStatus[] = ["draft", "scheduled", "published", "expired", "archived"];
const contentTypes: HendersonContentType[] = ["announcement", "event"];
const tones: HendersonContentTone[] = ["standard", "urgent", "support"];

function normalize(value: FormDataEntryValue | string | null | undefined) {
  return String(value ?? "").trim();
}

function nullableText(value: FormDataEntryValue | string | null | undefined) {
  const text = normalize(value);
  return text || null;
}

function requireOneOf<T extends string>(value: string, allowed: readonly T[], fallback: T) {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

function parseDate(value: FormDataEntryValue | null) {
  return fromDashboardDateTimeLocal(normalize(value));
}

function payloadFromForm(formData: FormData, fallbackStatus: HendersonContentStatus = "draft") {
  const contentType = requireOneOf(normalize(formData.get("content_type")), contentTypes, "announcement");
  const publishAt = parseDate(formData.get("publish_at"));
  const expiresAt = parseDate(formData.get("expires_at"));
  const statusInput = requireOneOf(normalize(formData.get("status")), contentStatuses, fallbackStatus);
  const status = statusInput === "archived" ? "archived" : deriveWorkflowStatus({ status: statusInput, publish_at: publishAt, expires_at: expiresAt });

  return {
    content_type: contentType,
    title: normalize(formData.get("title")),
    body: nullableText(formData.get("body")),
    tone: requireOneOf(normalize(formData.get("tone")), tones, "standard"),
    status,
    publish_at: publishAt,
    expires_at: expiresAt,
    event_starts_at: contentType === "event" ? parseDate(formData.get("event_starts_at")) : null,
    event_ends_at: contentType === "event" ? parseDate(formData.get("event_ends_at")) : null,
    event_location: contentType === "event" ? nullableText(formData.get("event_location")) : null,
    action_label: nullableText(formData.get("action_label")),
    action_href: nullableText(formData.get("action_href")),
  };
}

async function recordAudit(input: {
  contentItemId: string | null;
  eventType: HendersonAuditEventType;
  metadata?: Record<string, unknown>;
}) {
  const session = await requireDashboardSession();
  const supabase = getHendersonSupabaseAdmin();

  await supabase.from("henderson_audit_events").insert({
    content_item_id: input.contentItemId,
    actor_id: session.userId,
    actor_email: session.email,
    event_type: input.eventType,
    metadata: input.metadata ?? {},
  });
}

function revalidateDashboard() {
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function listDashboardItems() {
  const session = await requireDashboardSession();
  const supabase = getHendersonSupabaseAdmin();
  const { data, error } = await supabase
    .from("henderson_content_items")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw new Error(error.message || "Unable to load dashboard items.");
  return { session, items: (data ?? []) as HendersonContentItem[] };
}

export async function getDashboardItem(id: string) {
  const session = await requireDashboardSession();
  const supabase = getHendersonSupabaseAdmin();
  const { data, error } = await supabase
    .from("henderson_content_items")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message || "Unable to load dashboard item.");
  return { session, item: data as HendersonContentItem | null };
}

export async function createContentItem(formData: FormData) {
  "use server";

  const session = await requireDashboardSession();
  const payload = payloadFromForm(formData);
  const supabase = getHendersonSupabaseAdmin();
  const { data, error } = await supabase
    .from("henderson_content_items")
    .insert({
      ...payload,
      created_by: session.userId,
      updated_by: session.userId,
    })
    .select("id")
    .maybeSingle();

  if (error || !data?.id) throw new Error(error?.message || "Unable to create content item.");
  await recordAudit({ contentItemId: String(data.id), eventType: "create", metadata: { status: payload.status } });
  revalidateDashboard();
  redirect(`/dashboard/items/${data.id}`);
}

export async function updateContentItem(id: string, formData: FormData) {
  "use server";

  const session = await requireDashboardSession();
  const payload = payloadFromForm(formData);
  const supabase = getHendersonSupabaseAdmin();
  const { error } = await supabase
    .from("henderson_content_items")
    .update({
      ...payload,
      updated_by: session.userId,
    })
    .eq("id", id);

  if (error) throw new Error(error.message || "Unable to update content item.");
  await recordAudit({ contentItemId: id, eventType: "update", metadata: { status: payload.status } });
  revalidateDashboard();
}

export async function transitionContentItem(id: string, eventType: HendersonAuditEventType, status: HendersonContentStatus) {
  "use server";

  const session = await requireDashboardSession();
  const supabase = getHendersonSupabaseAdmin();
  const { data: item, error: loadError } = await supabase
    .from("henderson_content_items")
    .select("publish_at,expires_at")
    .eq("id", id)
    .maybeSingle();
  if (loadError) throw new Error(loadError.message || "Unable to load content item.");

  const nextStatus =
    eventType === "reschedule"
      ? deriveWorkflowStatus({
          status: "published",
          publish_at: item?.publish_at ?? null,
          expires_at: item?.expires_at ?? null,
        })
      : status;

  const { error } = await supabase
    .from("henderson_content_items")
    .update({ status: nextStatus, updated_by: session.userId })
    .eq("id", id);

  if (error) throw new Error(error.message || "Unable to update content status.");
  await recordAudit({ contentItemId: id, eventType, metadata: { status: nextStatus } });
  revalidateDashboard();
}

export async function duplicateContentItem(id: string) {
  "use server";

  const session = await requireDashboardSession();
  const supabase = getHendersonSupabaseAdmin();
  const { data: item, error: loadError } = await supabase
    .from("henderson_content_items")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (loadError || !item) throw new Error(loadError?.message || "Unable to load content item.");

  const draft = duplicateContentDraft(item as HendersonContentItem);
  const { data, error } = await supabase
    .from("henderson_content_items")
    .insert({
      ...draft,
      created_by: session.userId,
      updated_by: session.userId,
    })
    .select("id")
    .maybeSingle();

  if (error || !data?.id) throw new Error(error?.message || "Unable to duplicate content item.");
  await recordAudit({
    contentItemId: String(data.id),
    eventType: "duplicate",
    metadata: { source_item_id: id },
  });
  revalidateDashboard();
  redirect(`/dashboard/items/${data.id}`);
}

export async function listAuthorizedUsers() {
  const session = await requireDashboardAdmin();
  const supabase = getHendersonSupabaseAdmin();
  const { data, error } = await supabase
    .from("henderson_user_roles")
    .select("*")
    .order("email", { ascending: true });
  if (error) throw new Error(error.message || "Unable to load dashboard users.");
  return { session, users: data ?? [] };
}

export async function updateUserRole(formData: FormData) {
  "use server";

  await requireDashboardAdmin();
  const userId = normalize(formData.get("user_id"));
  const role = requireOneOf(normalize(formData.get("role")), ["admin", "editor"] as const, "editor") as HendersonRole;
  const isActive = normalize(formData.get("is_active")) === "on";
  if (!userId) throw new Error("Missing user id.");

  const supabase = getHendersonSupabaseAdmin();
  const { error } = await supabase
    .from("henderson_user_roles")
    .update({ role, is_active: isActive })
    .eq("user_id", userId);
  if (error) throw new Error(error.message || "Unable to update user role.");
  revalidatePath("/dashboard/users");
}
