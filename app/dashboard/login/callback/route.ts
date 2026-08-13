import { NextResponse, type NextRequest } from "next/server";
import { getDashboardSessionCookieName, getDashboardSessionCookieOptions, getConfiguredRoleForEmail, normalizeEmail } from "@/lib/henderson-dashboard/auth";
import { getHendersonSupabaseAdmin } from "@/lib/henderson-dashboard/supabaseAdmin";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code")?.trim() ?? "";
  const origin = request.nextUrl.origin;

  if (!code) {
    return NextResponse.redirect(new URL("/dashboard/login?error=missing-code", origin));
  }

  try {
    const supabase = getHendersonSupabaseAdmin();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    const user = data.user;
    const accessToken = data.session?.access_token;
    const email = normalizeEmail(user?.email);
    const role = getConfiguredRoleForEmail(email);

    if (error || !user?.id || !email || !accessToken || !role) {
      return NextResponse.redirect(new URL("/dashboard/login?error=unauthorized", origin));
    }

    await supabase.from("henderson_user_roles").upsert({
      user_id: user.id,
      email,
      role,
      is_active: true,
    });

    const response = NextResponse.redirect(new URL("/dashboard", origin));
    response.cookies.set(getDashboardSessionCookieName(), accessToken, getDashboardSessionCookieOptions());
    return response;
  } catch {
    return NextResponse.redirect(new URL("/dashboard/login?error=configuration", origin));
  }
}
