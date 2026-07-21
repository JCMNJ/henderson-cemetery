import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { GalleryHighlights } from "@/components/gallery/GalleryHighlights";
import { getGalleryImages } from "@/lib/gallery";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=40.54480%2C-79.82320";
const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Henderson Cemetery preservation archive for Harmarville (Acmetonia), Pennsylvania, with burial records, historical context, plot maps, and stewardship resources.",
  openGraph: {
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Explore burial records, history, documents, and plot-map references for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
    url: "/",
  },
  twitter: {
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Explore burial records, history, documents, and plot-map references for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  },
};

export default async function HomePage() {
  const galleryImages = await getGalleryImages();
  const photoHighlightFeaturedImage = galleryImages.find(
    (image) => image.src === "/gallery/cemetery-wintersnow-group.jpg",
  );
  const photoHighlightImages = [
    ...(photoHighlightFeaturedImage ? [photoHighlightFeaturedImage] : []),
    ...galleryImages.filter(
      (image) =>
        image.src !== "/gallery/hendersoncemetery1.jpg" &&
        image.src !== photoHighlightFeaturedImage?.src,
    ),
  ];

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader sticky />

      <section className="section-reveal relative overflow-hidden border-b border-stone-300">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/gallery/hendersoncemetery1.jpg')] bg-cover bg-center opacity-25" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(240,241,232,0.68),rgba(240,241,232,0.94))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,150,135,0.18),transparent_35%)]" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-20">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-stone-600">
              Harmarville, Pennsylvania
            </p>

            <h1 className="max-w-3xl font-serif text-[2.35rem] font-semibold leading-[0.95] text-stone-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Preserving the history of Henderson Cemetery.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-700 sm:mt-8 sm:text-lg sm:leading-8">
              A respectful archive for cemetery history, burial records, plot
              maps, documents, and preservation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/burial-records"
                className="button-soft rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-stone-700 sm:px-6"
              >
                Search Burial Records
              </Link>

              <Link
                href="/preservation"
                className="button-soft rounded-full border border-stone-400 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-200 sm:px-6"
              >
                Support Preservation
              </Link>
            </div>
          </div>

          <div className="card-soft rounded-[2rem] border border-stone-300 bg-stone-50/70 p-5 shadow-sm sm:p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Archive Snapshot
            </p>

            <div className="mt-8 grid gap-4">
              <div className="border-b border-stone-200 pb-4">
                <p className="font-serif text-4xl font-semibold">1800s</p>
                <p className="mt-1 text-sm text-stone-600">
                  Early cemetery history and documented burials.
                </p>
                <Link
                  href="/history"
                  className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  View Historical Timeline
                </Link>
              </div>

              <div className="border-b border-stone-200 pb-4">
                <p className="font-serif text-4xl font-semibold">Records</p>
                <p className="mt-1 text-sm text-stone-600">
                  Surnames, dates, plot references, and notes.
                </p>
                <Link
                  href="/burial-records"
                  className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  Search Records
                </Link>
              </div>

              <div>
                <p className="font-serif text-4xl font-semibold">Maps</p>
                <p className="mt-1 text-sm text-stone-600">
                  Plot maps and cemetery layout references.
                </p>
                <Link
                  href="/plot-maps"
                  className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  Open Plot Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="history"
        className="section-reveal mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 md:gap-10 lg:grid-cols-2 lg:items-center lg:py-20"
      >
        <div className="space-y-6">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
              Historical Stewardship
            </p>

            <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              A living record of local families, service, and community care.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-soft rounded-2xl border border-stone-300 bg-stone-50/80 p-5">
              <p className="font-serif text-3xl font-semibold">c. 1800</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                The cemetery&apos;s history reaches back to the earliest documented
                burials of the 19th century.
              </p>
            </div>

            <div className="card-soft rounded-2xl border border-stone-300 bg-stone-50/80 p-5">
              <p className="font-serif text-3xl font-semibold">1,223 Records</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Searchable burial records preserve names, dates, plot
                references, and family history.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div className="image-soft overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-200 shadow-sm">
            <img
              src="/images/henderson-cemetery-rock.jpg"
              alt="Henderson Cemetery stone marker"
              className="h-[280px] w-full object-cover sm:h-[330px] lg:h-[390px]"
            />
          </div>

          <div className="space-y-4 text-base leading-7 text-stone-700">
            <p>
              Henderson Cemetery contains generations of local history and
              family records. This archive makes that history easier to read,
              search, preserve, and share.
            </p>

            <p>
              This work protects and organizes existing records so families,
              researchers, and visitors can find cemetery information more
              clearly.
            </p>
          </div>
        </div>
      </section>

      <GalleryHighlights
        images={galleryImages}
        highlightImages={photoHighlightImages}
        totalCount={galleryImages.length}
      />

      <section
        id="records"
        className="section-reveal relative overflow-hidden border-y border-stone-300 bg-stone-200/40"
      >
        <div className="absolute inset-0 bg-[url('/images/skyview-henderson-cemetery.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-stone-100/80" />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
                Burial Records
              </p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
                A clearer way to search the cemetery archive.
              </h2>
            </div>

            <p className="text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              Search names, dates, plots, and notes, with tombstone photographs
              where available. The archive is intended to support descendants,
              researchers, and local families.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-50/95 shadow-xl shadow-stone-400/10 sm:mt-10">
            <form
              action="/burial-records"
              method="get"
              className="bg-white/70 p-4 sm:p-6"
            >
              <p className="mb-3 text-sm text-stone-600">
                Search by surname, given name, date, plan, plot, or notes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  name="q"
                  placeholder="Search by surname, given name, plot, or note..."
                  className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm outline-none transition focus:border-stone-600 focus:ring-2 focus:ring-stone-200"
                />
                <button
                  type="submit"
                className="button-soft rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-stone-700 sm:shrink-0"
                >
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/burial-records"
                  className="link-soft text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  View all burial records
                </Link>
              </div>
            </form>

            <div className="grid gap-3 border-t border-stone-200 bg-stone-100/70 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Burial Records</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">1,223+</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Stone Photographs</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">655</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Cemetery History</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">200+ Years</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <Link
              href="/burial-records"
              className="link-soft text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
            >
              Browse full burial list
            </Link>
          </div>
        </div>
      </section>

      <section
        id="support"
        className="section-reveal border-t border-[#8B8E75] bg-[#68604D] text-[#F8F6EF]"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
          <div className="rounded-[2rem] border border-[#8B8E75] bg-[#68604D] p-5 shadow-sm sm:p-7 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F7F6F0]">
                Preservation Support
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
                Help maintain the cemetery and preserve its records.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#F7F6F0]">
                The Harmarville Cemetery Association depends on volunteer
                stewardship and private support to protect Henderson Cemetery,
                its grounds, and the stories entrusted within its boundaries.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="button-soft inline-flex rounded-full bg-[#F7F6F0] px-5 py-3 text-sm font-medium text-[#68604D] hover:bg-[#F1ECDD]"
                >
                  Donation and Contact Details
                </Link>
                <Link
                  href="/research"
                  className="button-soft inline-flex rounded-full border border-[#F1ECDD]/70 px-5 py-3 text-sm font-medium text-[#F1ECDD] hover:bg-[#554F41]"
                >
                  Research Center
                </Link>
              </div>
            </div>

            <div className="mt-8 border-t border-[#8B8E75] pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm uppercase tracking-[0.2em] text-[#F7F6F0]">
                Current Needs
              </p>
              <div className="mt-4 divide-y divide-[#8B8E75]">
                {[
                  {
                    title: "Grounds Care",
                    body: "Mowing, filling sunken gravesites, and ongoing maintenance.",
                  },
                  {
                    title: "Record Preservation",
                    body: "Burial details, family context, documents, and photographs.",
                  },
                  {
                    title: "Stone Documentation",
                    body: "Marker care, stone photographs, and preservation notes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-serif text-xl font-semibold text-[#F8F6EF]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#F7F6F0]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#8B8E75] pt-5 text-sm">
                <Link
                  href="/contact"
                  className="link-soft font-medium text-[#F1ECDD] underline decoration-[#F1ECDD]/60 underline-offset-4 hover:text-[#F8F6EF]"
                >
                  Share a Correction
                </Link>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-soft font-medium text-[#F1ECDD] underline decoration-[#F1ECDD]/60 underline-offset-4 hover:text-[#F8F6EF]"
                >
                  Get Directions
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-soft font-medium text-[#F1ECDD] underline decoration-[#F1ECDD]/60 underline-offset-4 hover:text-[#F8F6EF]"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
