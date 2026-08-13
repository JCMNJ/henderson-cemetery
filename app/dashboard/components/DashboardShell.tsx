import Link from "next/link";
import type { ReactNode } from "react";
import type { HendersonDashboardSession } from "@/lib/henderson-dashboard/types";

export function DashboardShell({
  session,
  title,
  description,
  children,
}: {
  session: HendersonDashboardSession;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <header className="border-b border-[#D8D4C8] bg-white">
        <div className="mx-auto flex w-full max-w-[92rem] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
          <Link href="/dashboard" className="font-serif text-2xl font-semibold text-[#243A2E]">
            Henderson Dashboard
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <Link href="/" className="underline decoration-[#B08A3E] underline-offset-4">
              Public site
            </Link>
            <Link href="/dashboard/new" className="rounded-full bg-[#243A2E] px-4 py-2 text-white">
              New item
            </Link>
            {session.role === "admin" ? (
              <Link href="/dashboard/users" className="rounded-full border border-[#B08A3E] bg-white px-4 py-2">
                Users
              </Link>
            ) : null}
            <form action="/dashboard/logout" method="post">
              <button type="submit" className="rounded-full border border-[#D8D4C8] bg-white px-4 py-2">
                Sign out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <section className="mx-auto w-full max-w-[92rem] px-5 py-8 sm:px-6 lg:px-10">
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77746C]">
              {session.email} · {session.role}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-none sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#514B42]">
              {description}
            </p>
          </div>
        </div>
        {children}
      </section>
    </main>
  );
}
