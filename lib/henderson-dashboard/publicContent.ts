import { tryGetHendersonSupabaseAdmin } from "./supabaseAdmin";
import type { HendersonPublicContentItem } from "./types";

export async function getActivePublicContent(now = new Date()): Promise<HendersonPublicContentItem[]> {
  const supabase = tryGetHendersonSupabaseAdmin();
  if (!supabase) return [];

  const nowIso = now.toISOString();
  const { data, error } = await supabase
    .from("henderson_content_items")
    .select("id,content_type,title,body,tone,publish_at,expires_at,event_starts_at,event_ends_at,event_location,action_label,action_href")
    .eq("status", "published")
    .or(`publish_at.is.null,publish_at.lte.${nowIso}`)
    .or(`expires_at.is.null,expires_at.gt.${nowIso}`)
    .order("event_starts_at", { ascending: true, nullsFirst: false })
    .order("updated_at", { ascending: false })
    .limit(12);

  if (error || !Array.isArray(data)) return [];
  return data as HendersonPublicContentItem[];
}
