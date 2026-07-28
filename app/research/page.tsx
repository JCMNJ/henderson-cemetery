import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FacebookLogo } from "@/app/components/site/FacebookFollow";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

const externalResources = [
  {
    title: "FamilySearch",
    href: "https://www.familysearch.org/",
  },
  {
    title: "Ancestry",
    href: "https://www.ancestry.com/",
  },
  {
    title: "MyHeritage",
    href: "https://www.myheritage.com/",
  },
  {
    title: "Find a Grave",
    href: "https://www.findagrave.com/",
  },
  {
    title: "Cyndi's List",
    href: "https://www.cyndislist.com/",
  },
];

const documentRows = [
  {
    title: "Association Formation and Early Minutes",
    body: "Transfer of management authority, by-laws, founding contributions, and the 1909 charter application.",
    href: "/documents/association-formation",
  },
  {
    title: "Survey and Plan Book References",
    body: "Plan-era notes tied to lot ownership, map references, and cemetery sections.",
    href: "/documents",
  },
  {
    title: "Burial Roster and Stone Inventory",
    body: "Record-gathering notes connected to surnames, stone photographs, and plot references.",
    href: "/burial-records",
  },
];

export const metadata: Metadata = {
  title: "Research Center",
  description:
    "Begin Henderson Cemetery research with burial records, plot maps, documents, and genealogy resources.",
  openGraph: {
    title: "Henderson Cemetery Research Center",
    description:
      "Search Henderson Cemetery burial records, view plot maps, and read surviving association documents.",
    url: "/research",
  },
  twitter: {
    title: "Henderson Cemetery Research Center",
    description:
      "Search Henderson Cemetery burial records, view plot maps, and read surviving association documents.",
  },
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Research Center
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-6xl">
              Begin With a Name. Follow the Record.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#514B42]">
              Search Henderson&apos;s burial records, view cemetery plans, and
              read surviving association documents.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[460px]">
            <Image
              src="/gallery/cemetery-wintersnow-contrast.jpg"
              alt="Henderson Cemetery stones in snow"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[50%_58%]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[86rem] px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.9fr_0.9fr]">
          <form
            action="/burial-records"
            method="get"
            className="bg-white p-6 shadow-2xl shadow-[#243A2E]/12 ring-1 ring-[#D8D4C8] sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
              Burial Records
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#243A2E]">
              Search Burial Records
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#514B42]">
              Find known interments by name, date, plan, plot, or notes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                name="q"
                type="search"
                placeholder="Surname, given name, plot, or note"
                className="min-h-12 w-full rounded-full border border-[#D8D4C8] bg-white px-5 py-3 text-base text-[#243A2E] outline-none transition focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/35"
              />
              <button
                type="submit"
                className="rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]"
              >
                Search
              </button>
            </div>
            <Link
              href="/burial-records"
              className="mt-5 inline-flex font-semibold text-[#243A2E] underline decoration-[#B08A3E] decoration-2 underline-offset-4 hover:text-[#702F35]"
            >
              Browse all burial records
            </Link>
          </form>

          <Link
            href="/plot-maps"
            className="group overflow-hidden bg-white shadow-xl shadow-[#243A2E]/10 ring-1 ring-[#D8D4C8] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            <div className="relative h-48">
              <Image
                src="/images/plot-map/henderson-cemetery-plots-medium.jpg"
                alt="Detail of Henderson Cemetery plot map"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover object-left"
              />
            </div>
            <div className="border-t-4 border-[#B08A3E] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">
                Plot Maps
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#243A2E]">
                View Plot Maps
              </h2>
            </div>
          </Link>

          <Link
            href="/documents"
            className="group overflow-hidden bg-[#702F35] text-white shadow-xl shadow-[#702F35]/18 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
          >
            <div className="relative h-48">
              <Image
                src="/gallery/cemetery-wintersnow-flagsflowers.jpg"
                alt="Flags and flowers beside grave markers"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-4 border-[#F2D68B] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2D68B]">
                Historical Documents
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">
                Read Historical Documents
              </h2>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[86rem] px-5 py-14 sm:px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-18">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
            Documents
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#243A2E]">
            Historical Documents
          </h2>
        </div>
        <div className="mt-7 divide-y divide-[#D8D4C8] bg-white shadow-lg shadow-[#243A2E]/8 lg:mt-0">
          {documentRows.map((row) => (
            <details key={row.title} className="group p-5 sm:p-6">
              <summary className="cursor-pointer list-none font-serif text-2xl font-semibold text-[#243A2E]">
                {row.title}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#514B42]">{row.body}</p>
              <Link
                href={row.href}
                className="mt-4 inline-flex text-sm font-semibold text-[#702F35] underline decoration-[#B08A3E] decoration-2 underline-offset-4"
              >
                Open
              </Link>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Genealogy Resources
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#243A2E]">
              Continue the search.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {externalResources.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-[#D8D4C8] py-3 text-base font-semibold text-[#243A2E] hover:text-[#702F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
              >
                <span>{item.title}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#243A2E] text-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Help Complete the Story
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Corrections, photographs, and family records matter.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/84">
              Submit a correction, share family records, send photographs, or
              contribute historical information.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact#association-contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]"
            >
              Contact the Association
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100057152182753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0F66D8]"
            >
              <FacebookLogo className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
