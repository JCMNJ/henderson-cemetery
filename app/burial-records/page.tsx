import { BurialSearch } from "@/app/components/burial-records/BurialSearch";
import type { BurialRecord } from "@/app/components/burial-records/types";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import burialRecords from "@/app/data/burial-records.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burial Records",
  description:
    "Search Henderson Cemetery burial records by name, date, plan, plot, or record note.",
  openGraph: {
    title: "Henderson Cemetery Burial Records",
    description:
      "Search Henderson Cemetery burial records by name, date, plan, plot, or record note.",
    url: "/burial-records",
  },
  twitter: {
    title: "Henderson Cemetery Burial Records",
    description:
      "Search Henderson Cemetery burial records by name, date, plan, plot, or record note.",
  },
};

type BurialRecordsPageProps = {
  searchParams?: Promise<{ q?: string; plan?: string }>;
};

export default async function BurialRecordsPage({ searchParams }: BurialRecordsPageProps) {
  const records = burialRecords as BurialRecord[];
  const resolvedSearchParams = await searchParams;
  const initialQuery = resolvedSearchParams?.q ?? "";
  const initialPlan = ["H/D", "1", "2"].includes(resolvedSearchParams?.plan ?? "")
    ? (resolvedSearchParams?.plan ?? "")
    : "";

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-[92rem] px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Henderson Cemetery Records
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
              Search Burial Records
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#514B42]">
              Search by name, date, plan, plot, or record note.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/plot-maps"
                className="rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                View Cemetery Plans
              </a>
              <a
                href="/contact#association-contact"
                className="rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                Share a Correction
              </a>
            </div>
          </div>

          <BurialSearch records={records} initialQuery={initialQuery} initialPlan={initialPlan} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
