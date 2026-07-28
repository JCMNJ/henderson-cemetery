import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
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
              Help Us See More of Henderson
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Family photographs and marker images can preserve details that memory loses.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/84">
              Share historical photographs, family images, higher-resolution
              cemetery photographs, or help document markers.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/60">
              Photographs courtesy of Tamsen Ercole
            </p>
          </div>
          <Link
            href="/contact#association-contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#243A2E] hover:bg-[#F7F6F1]"
          >
            Share Photographs
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
