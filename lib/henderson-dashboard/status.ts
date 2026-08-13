import type { HendersonContentItem, HendersonContentStatus } from "./types";

export function isActivePublicContent(
  item: Pick<HendersonContentItem, "status" | "publish_at" | "expires_at">,
  now = new Date(),
) {
  if (item.status !== "published") return false;

  const nowMs = now.getTime();
  const publishMs = item.publish_at ? Date.parse(item.publish_at) : Number.NaN;
  const expiresMs = item.expires_at ? Date.parse(item.expires_at) : Number.NaN;

  if (Number.isFinite(publishMs) && publishMs > nowMs) return false;
  if (Number.isFinite(expiresMs) && expiresMs <= nowMs) return false;

  return true;
}

export function deriveWorkflowStatus(
  input: Pick<HendersonContentItem, "status" | "publish_at" | "expires_at">,
  now = new Date(),
): HendersonContentStatus {
  if (input.status === "archived" || input.status === "draft") return input.status;

  const nowMs = now.getTime();
  const publishMs = input.publish_at ? Date.parse(input.publish_at) : Number.NaN;
  const expiresMs = input.expires_at ? Date.parse(input.expires_at) : Number.NaN;

  if (Number.isFinite(expiresMs) && expiresMs <= nowMs) return "expired";
  if (Number.isFinite(publishMs) && publishMs > nowMs) return "scheduled";

  return "published";
}

export function duplicateContentDraft(item: HendersonContentItem) {
  return {
    content_type: item.content_type,
    title: `Copy of ${item.title}`,
    body: item.body,
    tone: item.tone,
    status: "draft" as const,
    publish_at: null,
    expires_at: null,
    event_starts_at: item.event_starts_at,
    event_ends_at: item.event_ends_at,
    event_location: item.event_location,
    action_label: item.action_label,
    action_href: item.action_href,
  };
}
