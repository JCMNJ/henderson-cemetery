import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { DonationBanner } from "@/app/components/site/DonationBanner";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Archival document references for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania, including governance, plan records, and preservation notes.",
  openGraph: {
    title: "Henderson Cemetery Documents Archive",
    description:
      "Review historical document references connected to Henderson Cemetery preservation and genealogy context.",
    url: "/documents",
  },
  twitter: {
    title: "Henderson Cemetery Documents Archive",
    description:
      "Review historical document references connected to Henderson Cemetery preservation and genealogy context.",
  },
};

const documentCollections = [
  {
    title: "Association Formation and Early Minutes",
    summary:
      "Transcribed early records document lot ownership, cemetery rules, the transfer of management authority, by-laws, founding contributions, and the 1909 charter application for the Harmarville Cemetery Association.",
    details:
      "These records provide context for how local descendants and community members formalized long-term stewardship.",
    href: "/documents/association-formation",
  },
  {
    title: "Survey and Plan Book References",
    summary:
      "Materials reference surveyed burial lots connected to Oliver P. Henderson's plan, including a county recording noted as November 18, 1884.",
    details:
      "These references support the documented transition to named plans, including what is now described as Plan 1.",
  },
  {
    title: "Plan 2 Land Donation and Deed Era",
    summary:
      "Historical notes describe a 1911 adjoining land gift from Anna Melzena Spring, followed by additional surveyed lots and deed activity from 1925 through 1941.",
    details:
      "These entries help trace how the cemetery expanded while preserving continuity of family plots and community maintenance.",
  },
  {
    title: "Burial Roster and Stone Inventory Work",
    summary:
      "Archived site copy references continued record-gathering by association members, including an enhanced surname roster (noted as of April 1, 2012).",
    details:
      "This work ties together gravestone surveys, plot references, and historical notes now reflected in the modern archive.",
  },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Archive Materials"
          title="Documents"
          description="This section brings together historical narratives and meeting minutes, association records, lot plans and indexes, and financial stewardship documents."
        />

        <PageHeroImage
          src="/gallery/cemetery-wintersnow-flagsflowers.jpg"
          alt="Flags and flowers marking graves in Henderson Cemetery"
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Archive Scope
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Materials include historical narratives and meeting minutes,
            association records, lot plans and indexes, and financial
            stewardship documents. Where records vary by date or source, the
            archive preserves the documented wording for continuity.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {documentCollections.map((item) => {
            const card = (
              <article
                className="card-soft h-full rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6"
              >
                <h2 className="font-serif text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  {item.summary}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {item.details}
                </p>
                {item.href ? (
                  <p className="mt-5 text-sm font-medium text-stone-800 underline decoration-stone-400 underline-offset-4">
                    Read archival transcription
                  </p>
                ) : null}
              </article>
            );

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                {card}
              </Link>
            ) : (
              <article
              key={item.title}
              className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6"
            >
              <h2 className="font-serif text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-base leading-7 text-stone-700">
                {item.summary}
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {item.details}
              </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Preservation and Completeness
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Historical records were compiled across many years and formats.
            Names, dates, plot references, and notes may differ between sources.
            This archive preserves those records as historical evidence while
            continuing careful review and reconciliation.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/history"
              className="button-soft rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Read Cemetery History
            </Link>
            <Link
              href="/burial-records"
              className="button-soft rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-100 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Search Burial Records
            </Link>
          </div>
        </div>
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}
