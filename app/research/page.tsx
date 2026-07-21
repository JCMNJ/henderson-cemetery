import Link from "next/link";
import type { Metadata } from "next";
import { DonationBanner } from "@/app/components/site/DonationBanner";
import { PageHeader } from "@/app/components/site/PageHeader";
import { PageHeroImage } from "@/app/components/site/PageHeroImage";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

const researchLinks = [
  {
    title: "Burial Records",
    description: "Search known interments by name, date, plan, plot, and notes.",
    href: "/burial-records",
  },
  {
    title: "Plot Maps",
    description: "Use plan and plot references to compare burial locations.",
    href: "/plot-maps",
  },
  {
    title: "History",
    description: "Review the cemetery timeline and stewardship narrative.",
    href: "/history",
  },
  {
    title: "Documents",
    description: "Read archival document summaries and transcriptions.",
    href: "/documents",
  },
  {
    title: "Gallery",
    description: "Browse cemetery views, monuments, and preservation images.",
    href: "/gallery",
  },
];

const externalResources = [
  {
    title: "FamilySearch",
    description: "Free family history records, tree tools, and research guides.",
    href: "https://www.familysearch.org/",
  },
  {
    title: "Find a Grave",
    description: "Cemetery memorials, grave photographs, and burial listings.",
    href: "https://www.findagrave.com/",
  },
  {
    title: "Cyndi's List",
    description: "A long-running categorized directory of genealogy resources.",
    href: "https://www.cyndislist.com/",
  },
  {
    title: "Ancestry",
    description: "Subscription genealogy records, family trees, and historical collections.",
    href: "https://www.ancestry.com/",
  },
  {
    title: "MyHeritage",
    description: "Family tree tools, historical records, and genealogy research resources.",
    href: "https://www.myheritage.com/",
  },
];

const futureCollections = [
  "Families & Relationships",
  "Military Burials",
  "Lot Ownership & Plot Development",
  "Preservation History",
];

export const metadata: Metadata = {
  title: "Research Center",
  description:
    "Research center for Henderson Cemetery burial records, plot maps, historical documents, photographs, and external genealogy resources.",
  openGraph: {
    title: "Henderson Cemetery Research Center",
    description:
      "Navigate Henderson Cemetery records, maps, history, documents, photographs, and genealogy research resources.",
    url: "/research",
  },
  twitter: {
    title: "Henderson Cemetery Research Center",
    description:
      "Navigate Henderson Cemetery records, maps, history, documents, photographs, and genealogy research resources.",
  },
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
        <PageHeader
          eyebrow="Research Center"
          title="Research Center"
          description="Use Henderson Cemetery records, maps, documents, photographs, and outside genealogy resources to begin cemetery, family history, and preservation research."
        />

        <PageHeroImage
          src="/gallery/cemetery-wintersnow-contrast.jpg"
          alt="Winter cemetery view with headstones and snow"
          frameClassName="relative h-52 sm:h-60 lg:h-72"
          imageClassName="object-cover object-[50%_58%]"
        />

        <section className="mt-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Start Your Research
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {researchLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-soft block h-full rounded-2xl border border-stone-300 bg-stone-50/90 p-4 transition hover:-translate-y-0.5 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 sm:p-5"
              >
                <h2 className="font-serif text-xl font-semibold text-stone-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-stone-700">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Research Resources
          </p>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            These external research links open in a new browser tab.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {externalResources.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-stone-200 bg-stone-100/75 p-4 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-serif text-lg font-semibold text-stone-950">
                    {item.title}
                  </h2>
                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-stone-500">
                    External Link
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-stone-700">
                  {item.description}
                </p>
                <p className="mt-3 text-sm font-medium text-stone-800 underline decoration-stone-400 underline-offset-4">
                  Open resource →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Future Research Collections
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-stone-950">
            Coming Soon
          </h2>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-stone-700 sm:grid-cols-2">
            {futureCollections.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </section>

      <DonationBanner />
      <SiteFooter />
    </main>
  );
}
