import { NextResponse, type NextRequest } from "next/server";
import { getDashboardSessionCookieName } from "@/lib/henderson-dashboard/auth";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.nextUrl.origin));
  response.cookies.delete(getDashboardSessionCookieName());
  return response;
}
