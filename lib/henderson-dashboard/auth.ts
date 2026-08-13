import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { HENDERSON_AUTHORIZED_USERS, type HendersonDashboardSession, type HendersonRole } from "./types";
import { getHendersonSupabaseAdmin } from "./supabaseAdmin";

const dashboardSessionCookie = "henderson_dashboard_session";

export function getDashboardSessionCookieName() {
  return dashboardSessionCookie;
}

export function normalizeEmail(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

export function getConfiguredRoleForEmail(email: string): HendersonRole | null {
  const normalized = normalizeEmail(email);
  const match = HENDERSON_AUTHORIZED_USERS.find((user) => normalizeEmail(user.email) === normalized);
  return match?.role ?? null;
}

export function getDashboardSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  };
}

async function getUserFromAccessToken(accessToken: string) {
  const token = accessToken.trim();
  if (!token) return null;

  try {
    const supabase = getHendersonSupabaseAdmin();
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user?.id || !data.user.email) return null;
    return {
      id: data.user.id,
      email: normalizeEmail(data.user.email),
    };
  } catch {
    return null;
  }
}

export async function getDashboardSession(): Promise<HendersonDashboardSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(dashboardSessionCookie)?.value ?? "";
  const user = await getUserFromAccessToken(token);
  if (!user) return null;

  const configuredRole = getConfiguredRoleForEmail(user.email);
  if (!configuredRole) return null;

  try {
    const supabase = getHendersonSupabaseAdmin();
    const { data } = await supabase
      .from("henderson_user_roles")
      .select("role,is_active")
      .eq("user_id", user.id)
      .eq("is_active", true)
      .maybeSingle();

    const role = data?.role === "admin" || data?.role === "editor" ? data.role : configuredRole;
    if (role !== configuredRole && configuredRole !== "admin") return null;

    return {
      userId: user.id,
      email: user.email,
      role,
    };
  } catch {
    return {
      userId: user.id,
      email: user.email,
      role: configuredRole,
    };
  }
}

export async function requireDashboardSession() {
  const session = await getDashboardSession();
  if (!session) redirect("/dashboard/login");
  return session;
}

export async function requireDashboardAdmin() {
  const session = await requireDashboardSession();
  if (session.role !== "admin") redirect("/dashboard");
  return session;
}
