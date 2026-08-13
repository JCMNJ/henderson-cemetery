import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { LoginClient } from "./LoginClient";

export const metadata: Metadata = {
  title: "Dashboard Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLoginPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />
      <section className="mx-auto w-full max-w-xl px-5 py-14 sm:px-6 lg:py-20">
        <Link href="/" className="text-sm font-semibold underline decoration-[#B08A3E] underline-offset-4">
          Back to Henderson Cemetery
        </Link>
        <h1 className="mt-8 font-serif text-5xl font-semibold leading-none sm:text-6xl">
          Dashboard Login
        </h1>
        <p className="mt-5 text-base leading-7 text-[#514B42]">
          Authorized Henderson Cemetery editors can request a secure email login link.
        </p>
        <LoginClient />
      </section>
      <SiteFooter />
    </main>
  );
}
