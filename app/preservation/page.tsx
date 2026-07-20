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
          description="Henderson Cemetery is maintained through community stewardship, volunteer labor, and private support. The cemetery is not publicly funded."
        />

        <PageHeroImage
          src="/gallery/cemetery-wintersnow-flagsflowers2.jpg"
          alt="Winter preservation view with flags and flowers at Henderson Cemetery"
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Preservation Mission
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Association records describe long-standing stewardship by the
            Harmarville Cemetery Association and descendants of those buried at
            Henderson Cemetery. Documented maintenance has included brush
            clearing, gravestone repair, mapping, and care of sunken gravesites.
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            This preservation effort protects fragile burial records and keeps
            the grounds accessible for families, researchers, and local history.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Why Maintenance Matters
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Historical records note that periods of reduced maintenance led to
              overgrowth and loss of visibility in older sections. Ongoing
              stewardship helps preserve stones, plot references, and the
              historical record tied to local families.
            </p>
          </article>

          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Donation and Volunteer Support
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Henderson Cemetery is privately maintained through donations and
              volunteer hours rather than public funding.
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Donation and contact details are listed on the Contact page.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
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
