import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PlotMapViewer } from "@/app/components/plot-maps/PlotMapViewer";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Plot Maps",
  description:
    "View Henderson Cemetery plans and recorded lot locations in Harmarville, Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Plot Maps",
    description:
      "View Henderson Cemetery plans and recorded lot locations.",
    url: "/plot-maps",
  },
  twitter: {
    title: "Henderson Cemetery Plot Maps",
    description:
      "View Henderson Cemetery plans and recorded lot locations.",
  },
};

export default function PlotMapsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Henderson Cemetery
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] text-[#243A2E] sm:text-7xl">
              Find Your Place on the Map
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#514B42]">
              View Henderson Cemetery&apos;s plans and recorded lot locations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#plot-map" className="rounded-full bg-[#243A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
                Open the Plot Maps
              </a>
              <Link href="/burial-records" className="rounded-full bg-[#702F35] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5D252B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E]">
                Search Burial Records
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[460px]">
            <Image
              src="/images/plot-map/henderson-cemetery-plots-medium.jpg"
              alt="Detail of Henderson Cemetery plot map"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-left"
              priority
            />
          </div>
        </div>
      </section>

      <section id="plot-map" className="scroll-mt-28 bg-[#F7F6F1]">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
          <div className="mb-5 flex flex-wrap gap-3">
            {[
              "Original Burial Ground",
              "Plan I",
              "Plan II",
            ].map((label, index) => (
              <span
                key={label}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  index === 0
                    ? "bg-[#243A2E] text-white"
                    : "bg-white text-[#243A2E] ring-1 ring-[#D8D4C8]",
                ].join(" ")}
              >
                {label}
              </span>
            ))}
          </div>
          <PlotMapViewer />
        </div>
      </section>

      <section className="bg-[#243A2E] text-white">
        <div className="mx-auto flex w-full max-w-[86rem] flex-col gap-5 px-5 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="font-serif text-4xl font-semibold">
            Looking for a name?
          </h2>
          <Link
            href="/burial-records"
            className="w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]"
          >
            Search Burial Records
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
