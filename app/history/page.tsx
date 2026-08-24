import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HistoricalLinks } from "@/app/components/history/HistoricalLinks";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { historicalItems, type HistoricalItem } from "@/app/data/historical-exploration";

export const metadata: Metadata = {
  title: "History",
  description:
    "Follow Henderson Cemetery history through Harmarville land stories, burial records, association minutes, source links, and stewardship work.",
  openGraph: {
    title: "Henderson Cemetery History",
    description:
      "A connected history of Henderson Cemetery, Harmarville land stories, association records, and preservation.",
    url: "/history",
  },
  twitter: {
    title: "Henderson Cemetery History",
    description:
      "A connected history of Henderson Cemetery, Harmarville land stories, association records, and preservation.",
  },
};

const historyOrder = [
  "original-graveyard",
  "plan-one-1884",
  "association-formation",
  "plan-two-1911",
  "railroad-boundary-1916",
  "turnpike-boundary-1951",
  "renewed-interest-1952",
  "final-land-acquisition-2020",
];

const sectionKickers: Record<string, string> = {
  "original-graveyard": "The Early Burial Ground",
  "plan-one-1884": "Plan I and the Organized Cemetery",
  "association-formation": "Association Stewardship Begins",
  "plan-two-1911": "Plan II and Continued Stewardship",
  "railroad-boundary-1916": "Railroad Edge",
  "turnpike-boundary-1951": "Modern Infrastructure",
  "renewed-interest-1952": "The 1952 Renewal",
  "final-land-acquisition-2020": "Protected Boundaries",
};

const sourceLabel: Record<HistoricalItem["confidence"], string> = {
  verified: "Supported by outside historical sources.",
  "association-records": "Documented in association history or records.",
  "local-records": "Identified in local cemetery records.",
  researching: "This connection is still being researched.",
};

function getItem(id: string) {
  const item = historicalItems.find((entry) => entry.id === id);
  if (!item) throw new Error(`Missing historical item: ${id}`);
  return item;
}

export default function HistoryPage() {
  const timelineItems = historyOrder.map(getItem);

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src="/gallery/tamsen-review-2026-08-06.jpg"
            alt="Wide view of Henderson Cemetery lawn and monuments"
            fill
            sizes="100vw"
            className="object-cover object-[52%_54%] opacity-34"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(247,246,241,0.98),rgba(247,246,241,0.82),rgba(247,246,241,0.36))]" />
        </div>
        <div className="relative mx-auto w-full max-w-[86rem] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
            More Than Two Centuries of Memory
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
            A Small Cemetery Woven Into Harmarville&apos;s Story
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#514B42]">
            Henderson Cemetery holds family records, local memory, and the
            continuing work of people who chose to care. The story is strongest
            when records, maps, documents, and sources stay connected.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#timeline"
              className="rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              Follow the Timeline
            </a>
            <Link
              href="/burial-records"
              className="rounded-full bg-[#702F35] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]"
            >
              Search the Records
            </Link>
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-28 bg-[#F7F6F1]">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-14 sm:px-6 lg:px-8 lg:py-20 xl:px-10">
          <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <article
                  id={item.id}
                  key={item.id}
                  className="scroll-mt-28"
                >
                  <div
                    className={[
                      "grid gap-8 lg:items-center",
                      index % 2 === 0
                        ? "lg:grid-cols-[0.9fr_1.1fr]"
                        : "lg:grid-cols-[1.1fr_0.9fr]",
                    ].join(" ")}
                  >
                    <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
                        {sectionKickers[item.id]}
                      </p>
                      <div className="mt-4 flex items-baseline gap-4">
                        <p className="font-serif text-5xl font-semibold text-[#702F35] sm:text-6xl">
                          {item.period}
                        </p>
                      </div>
                      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#243A2E]">
                        {item.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#514B42]">
                        {item.summary}
                      </p>
                      <details className="mt-5 bg-white p-5 shadow-lg shadow-[#243A2E]/8 ring-1 ring-[#D8D4C8]">
                        <summary className="cursor-pointer text-sm font-semibold text-[#243A2E]">
                          Sources and context
                        </summary>
                        <p className="mt-3 text-sm leading-6 text-[#514B42]">
                          {item.context}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#77746C]">
                          {sourceLabel[item.confidence]}
                        </p>
                        <HistoricalLinks links={item.links} />
                      </details>
                    </div>
                    <div className="relative min-h-[300px] overflow-hidden bg-[#243A2E] shadow-xl shadow-[#243A2E]/12 sm:min-h-[380px]">
                      <Image
                        src={
                          item.image ??
                          (index % 2 === 0
                            ? "/gallery/tamsen-review-2026-08-06.jpg"
                            : "/gallery/cemetery-summer-view03-obelisk-headstones.jpg")
                        }
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-cover object-[52%_56%]"
                      />
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F1]">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-18">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              The People Behind the Places
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#243A2E]">
              Local stories are still being connected.
            </h2>
          </div>
          <div className="bg-white p-6 shadow-xl shadow-[#243A2E]/8 sm:p-8">
            <p className="text-base leading-7 text-[#514B42]">
              Research is continuing into connections between cemetery families
              and Harmarville&apos;s roads, institutions, and community history.
              Unsupported profiles are not published as fact.
            </p>
            <Link
              href="/contact#association-contact"
              className="mt-6 inline-flex rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22]"
            >
              Help Research a Local Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#243A2E] text-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-18">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Henderson&apos;s Next Generation
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              History survives when someone carries it forward.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#association-contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]">
              Share Family Records
            </Link>
            <Link href="/contact#association-contact" className="rounded-full border border-white/55 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Submit Photographs
            </Link>
            <Link href="/preservation#current-needs" className="rounded-full bg-[#702F35] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5D252B]">
              Support Preservation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
