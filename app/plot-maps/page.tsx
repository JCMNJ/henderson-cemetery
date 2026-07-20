import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { DonationBanner } from "@/app/components/site/DonationBanner";

export const metadata: Metadata = {
  title: "Plot Maps",
  description:
    "Plot map references and preserved cemetery plan notes for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Plot Maps",
    description:
      "Explore cemetery plan references and map context for Henderson Cemetery sections and burial locations.",
    url: "/plot-maps",
  },
  twitter: {
    title: "Henderson Cemetery Plot Maps",
    description:
      "Explore cemetery plan references and map context for Henderson Cemetery sections and burial locations.",
  },
};

export default function PlotMapsPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Cemetery Layout"
          title="Plot Maps"
          description="Use the cemetery plot map together with the burial records archive to locate documented burial locations and plot references."
        />

        <PageHeroImage
          src="/images/skyview-henderson-cemetery.jpg"
          alt="Aerial view of Henderson Cemetery grounds"
          imageClassName="object-cover -scale-x-100 -scale-y-100 hover:-scale-x-100 hover:-scale-y-100"
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Cemetery Lot Map
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            The map below is based on cemetery lot plans maintained with the
            cemetery records.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-stone-600">
            For the clearest view, open the full-size map and use pinch-to-zoom.
          </p>

          <div className="mt-5 max-h-[72vh] overflow-auto rounded-2xl border border-stone-300 bg-stone-100">
            <img
              src="/images/plot-map/henderson-cemetery-plots-medium.jpg"
              alt="Henderson Cemetery lot map"
              className="h-auto max-w-none"
            />
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/images/plot-map/henderson-cemetery-plots-medium.jpg"
              target="_blank"
              rel="noreferrer"
              className="button-soft inline-flex w-full justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 hover:bg-stone-700 sm:w-auto"
            >
              Open full-size plot map
            </a>
            <Link
              href="/plot-maps/viewer"
              className="button-soft inline-flex w-full justify-center rounded-full border border-stone-400 px-5 py-3 text-sm font-medium text-stone-800 hover:bg-stone-200 sm:w-auto"
            >
              Open Interactive Map Viewer
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Map Reference Notes</p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Plot-map materials note a sequence of plan tracing and
            revisions: traced from SP on July 22, 1915; retraced in April 1974
            (F. Carson); revised in March 2000 (J. Stephenson); and revised
            again in June 2012 (J. B. Ebert).
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-stone-600">
            Plot references correspond to cemetery records where available.
            Historical maps may contain older labeling and record conventions.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-stone-600">
            Visitors should use burial records and map references together.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Grounds Context</p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              The aerial view provides context for the cemetery grounds while
              the lot map remains the primary reference for plot numbering.
            </p>

            <div className="image-soft mt-5 overflow-hidden rounded-2xl border border-stone-300 bg-stone-100">
              <img
                src="/images/skyview-henderson-cemetery.jpg"
                alt="Aerial view of Henderson Cemetery grounds"
                className="h-[220px] w-full -scale-x-100 -scale-y-100 object-cover hover:-scale-x-100 hover:-scale-y-100 sm:h-[300px]"
              />
            </div>
          </article>

          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Archive Cross-Links</p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
              <li>Plan-level references for Plan 1, Plan 2, and related sections</li>
              <li>Burial-record and plot associations used in cemetery records</li>
              <li>Use burial records and map references together for best results</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-stone-200 pt-5">
              <Link
                href="/burial-records"
                className="button-soft rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                Burial Records
              </Link>
              <Link
                href="/history"
                className="button-soft rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                Cemetery History
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Preservation Note
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Historical map records and burial references were created across
            different periods and revisions. Plot positions and numbering may
            vary between sources. This page preserves available references while
            documenting an ongoing process of verification.
          </p>
        </div>
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}
