import { BurialSearch } from "@/app/components/burial-records/BurialSearch";
import type { BurialRecord } from "@/app/components/burial-records/types";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DonationBanner } from "@/app/components/site/DonationBanner";
import burialRecords from "@/app/data/burial-records.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burial Records",
  description:
    "Search Henderson Cemetery burial records for surnames, dates, plot references, comments, and tombstone image links in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Burial Records",
    description:
      "Search the archival burial roster for genealogy and historical research at Henderson Cemetery.",
    url: "/burial-records",
  },
  twitter: {
    title: "Henderson Cemetery Burial Records",
    description:
      "Search the archival burial roster for genealogy and historical research at Henderson Cemetery.",
  },
};

type BurialRecordsPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function BurialRecordsPage({ searchParams }: BurialRecordsPageProps) {
  const records = burialRecords as BurialRecord[];
  const resolvedSearchParams = await searchParams;
  const initialQuery = resolvedSearchParams?.q ?? "";

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Cemetery Archive"
          title="Burial Records"
          description="Search burial records by surname, given name, dates, plan, plot, and historical notes."
        />

        <PageHeroImage
          src="/gallery/cemetery-wintersnow-group.jpg"
          alt="Snow-covered view of Henderson Cemetery"
        />

        <p className="mt-4 max-w-4xl rounded-xl border border-stone-300 bg-stone-50/80 px-4 py-3 text-sm leading-6 text-stone-600">
          Records are presented as documented. Some abbreviations and historical
          notes may reflect the original cemetery records.
        </p>

        <BurialSearch records={records} initialQuery={initialQuery} />
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}
