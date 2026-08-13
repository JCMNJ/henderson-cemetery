import Link from "next/link";
import { DashboardShell } from "./components/DashboardShell";
import { listDashboardItems } from "@/lib/henderson-dashboard/repository";
import { formatDashboardDateTime } from "@/lib/henderson-dashboard/time";
import type { HendersonContentStatus } from "@/lib/henderson-dashboard/types";

const groups: HendersonContentStatus[] = ["draft", "scheduled", "published", "expired", "archived"];

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { session, items } = await listDashboardItems();

  return (
    <DashboardShell
      session={session}
      title="Announcements and Events"
      description="Create, schedule, publish, archive, and reuse Henderson Cemetery homepage content."
    >
      <div className="space-y-6">
        {groups.map((status) => {
          const matches = items.filter((item) => item.status === status);
          return (
            <section key={status} className="rounded-sm bg-white p-5 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-serif text-2xl font-semibold capitalize">{status}</h2>
                <span className="rounded-full bg-[#F7F6F1] px-3 py-1 text-xs font-semibold text-[#77746C]">{matches.length}</span>
              </div>
              <div className="mt-4 divide-y divide-[#D8D4C8]">
                {matches.length ? matches.map((item) => (
                  <article key={item.id} className="grid gap-3 py-4 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77746C]">
                        {item.content_type} · Updated {formatDashboardDateTime(item.updated_at)}
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#514B42]">
                        Publish: {formatDashboardDateTime(item.publish_at)} · Expires: {formatDashboardDateTime(item.expires_at)}
                      </p>
                    </div>
                    <Link href={`/dashboard/items/${item.id}`} className="w-fit rounded-full bg-[#243A2E] px-4 py-2 text-sm font-semibold text-white">
                      Open
                    </Link>
                  </article>
                )) : (
                  <p className="py-5 text-sm text-[#77746C]">No {status} items yet.</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </DashboardShell>
  );
}
