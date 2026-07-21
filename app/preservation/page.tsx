import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DonationBanner } from "@/app/components/site/DonationBanner";

export const metadata: Metadata = {
  title: "Preservation",
  description:
    "Preservation mission, stewardship context, and support guidance for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Preservation",
    description:
      "Learn why cemetery maintenance and historical preservation work matter for Henderson Cemetery records and grounds.",
    url: "/preservation",
  },
  twitter: {
    title: "Henderson Cemetery Preservation",
    description:
      "Learn why cemetery maintenance and historical preservation work matter for Henderson Cemetery records and grounds.",
  },
};

export default function PreservationPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Preservation Support"
          title="Preservation"
          description="Henderson Cemetery is maintained through volunteer stewardship, community care, and private support."
        />

        <PageHeroImage
          src="/gallery/cemetery-wintersnow-flagsflowers2.jpg"
          alt="Winter preservation view with flags and flowers at Henderson Cemetery"
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Preservation Mission
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            A cemetery, especially a local burial ground with a rich heritage
            like Henderson Cemetery, is a quiet record of lives, families, and
            communities entrusted to the care of every generation. This cemetery
            is more than two centuries old and needs protection from time, the
            elements, and the fading of human memory.
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Henderson Cemetery is a book written by those buried within its
            boundaries. Each gravestone tells a story of a life lived, a family
            established, and a community built over generations. Through
            preservation of grounds and records, stewardship honors those who
            came before us and keeps their stories part of regional heritage.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Why Maintenance Matters
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              The Harmarville Cemetery Association&apos;s only mission today, as it
              was in 1909 at its inception, is the operation and management of
              Henderson Cemetery. Since the board&apos;s renewal in 1952, the
              cemetery has been sustained by dedicated volunteers and the
              generosity of those who provide financial support.
            </p>
          </article>

          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Donation and Volunteer Support
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              The tradition of volunteer stewardship that has sustained
              Henderson Cemetery for generations now depends on finding the next
              generation of volunteers willing to continue the work of those who
              have faithfully protected the cemetery and the stories entrusted
              within its boundaries.
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Donation and contact details are listed on the Contact page.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            501(c)(3) Nonprofit Status
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Through the dedicated leadership and efforts of longtime board
            member David Campbell, the Association was granted 501(c)(3)
            nonprofit status. Donations made to support the cemetery are
            tax-deductible to the extent permitted by law.
          </p>
          <address className="mt-4 not-italic text-sm leading-7 text-stone-700">
            Harmarville Cemetery Association
            <br />
            c/o David Campbell
            <br />
            505 Bicker Rd
            <br />
            Cabot, PA 16023
          </address>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Continue in the Archive
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
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
