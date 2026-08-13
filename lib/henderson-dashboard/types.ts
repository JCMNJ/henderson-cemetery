export const HENDERSON_TIME_ZONE = "America/New_York";

export const HENDERSON_AUTHORIZED_USERS = [
  {
    email: "jccarver03@gmail.com",
    name: "Jay Carver",
    role: "admin",
  },
  {
    email: "TamsenErcole@gmail.com",
    name: "Tamsen Ercole",
    role: "editor",
  },
] as const;

export type HendersonRole = "admin" | "editor";
export type HendersonContentType = "announcement" | "event";
export type HendersonContentStatus = "draft" | "scheduled" | "published" | "expired" | "archived";
export type HendersonContentTone = "standard" | "urgent" | "support";
export type HendersonAuditEventType =
  | "create"
  | "update"
  | "publish"
  | "unpublish"
  | "archive"
  | "duplicate"
  | "reschedule";

export type HendersonUserRole = {
  user_id: string;
  email: string;
  role: HendersonRole;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type HendersonContentItem = {
  id: string;
  content_type: HendersonContentType;
  title: string;
  body: string | null;
  tone: HendersonContentTone;
  status: HendersonContentStatus;
  publish_at: string | null;
  expires_at: string | null;
  event_starts_at: string | null;
  event_ends_at: string | null;
  event_location: string | null;
  action_label: string | null;
  action_href: string | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
};

export type HendersonPublicContentItem = Pick<
  HendersonContentItem,
  | "id"
  | "content_type"
  | "title"
  | "body"
  | "tone"
  | "publish_at"
  | "expires_at"
  | "event_starts_at"
  | "event_ends_at"
  | "event_location"
  | "action_label"
  | "action_href"
>;

export type HendersonDashboardSession = {
  userId: string;
  email: string;
  role: HendersonRole;
};
