import type { Metadata } from "next";
import { PlotMapViewer } from "@/app/components/plot-maps/PlotMapViewer";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Plot Map Viewer",
  description:
    "View and enlarge the Henderson Cemetery lot map in Harmarville, Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Plot Map Viewer",
    description: "View and enlarge the Henderson Cemetery lot map.",
    url: "/plot-maps/viewer",
  },
  twitter: {
    title: "Henderson Cemetery Plot Map Viewer",
    description: "View and enlarge the Henderson Cemetery lot map.",
  },
};

export default function PlotMapViewerPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-[92rem] px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A3E]">
              Henderson Cemetery
            </p>
            <h1 className="mt-3 font-serif text-5xl font-semibold text-[#243A2E]">
              Cemetery Plans
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#514B42]">
              Use the controls to move and enlarge the map.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/plot-maps"
              className="button-soft inline-flex w-full justify-center rounded-full border border-[#B08A3E] bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] sm:w-auto"
            >
              Back to Plot Maps
            </a>
            <a
              href="/images/plot-map/henderson-cemetery-plots-medium.jpg"
              target="_blank"
              rel="noreferrer"
              className="button-soft inline-flex w-full justify-center rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] sm:w-auto"
            >
              Open Full-Size Map
            </a>
          </div>
        </div>

        <PlotMapViewer />
      </section>

      <SiteFooter />
    </main>
  );
}
