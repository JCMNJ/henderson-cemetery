import Image from "next/image";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DROPBOX_FILE_REQUEST_URL, SUBMISSION_NOTICE } from "@/app/lib/siteLinks";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Henderson Cemetery photographs, grounds, monuments, and preservation scenes.",
  openGraph: {
    title: "Henderson Cemetery Gallery",
    description:
      "A visual look at Henderson Cemetery, its grounds, monuments, and care.",
    url: "/gallery",
  },
  twitter: {
    title: "Henderson Cemetery Gallery",
    description:
      "A visual look at Henderson Cemetery, its grounds, monuments, and care.",
  },
};

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const heroImage = images.find((image) => image.src === "/gallery/cemetery-summer-view10-wide-lawn-monuments.jpg") ?? images[0];

  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#243A2E]">
      <SiteHeader sticky />

      <section className="relative min-h-[74vh] overflow-hidden bg-[#243A2E] text-white">
        {heroImage ? (
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-72"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,58,46,0.92),rgba(36,58,46,0.55),rgba(36,58,46,0.18))]" />
        <div className="relative mx-auto flex min-h-[74vh] w-full max-w-[86rem] items-end px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Henderson Cemetery
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] sm:text-7xl">
              A Place Shaped by Memory, Nature, and Care
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/86">
              Photographs offer another way to understand why this place is
              worth preserving.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[92rem] px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <GalleryGrid images={images} />
      </section>

      <section className="bg-[#243A2E] text-white">
        <div className="mx-auto grid w-full max-w-[86rem] gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-18">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C16C]">
              Share Photos of Henderson
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Have photographs connected to Henderson Cemetery?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/84">
              Send the original, full-resolution files for review and possible
              inclusion in the cemetery&apos;s historical collection.
            </p>
            <p className="mt-4 max-w-2xl text-xs leading-5 text-white/70">
              {SUBMISSION_NOTICE}
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/60">
              Photographs courtesy of Tamsen Ercole
            </p>
          </div>
          <a
            href={DROPBOX_FILE_REQUEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit photographs of Henderson Cemetery through Dropbox"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C16C]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 16V4" />
              <path d="m7 9 5-5 5 5" />
              <path d="M5 20h14" />
            </svg>
            Submit Photographs
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
