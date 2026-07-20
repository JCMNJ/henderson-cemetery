import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryStats } from "@/components/gallery/GalleryStats";
import { DonationBanner } from "@/app/components/site/DonationBanner";
import { PageHeader } from "@/app/components/site/PageHeader";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { getGalleryImages } from "@/lib/gallery";

const facebookUrl = "https://www.facebook.com/profile.php?id=100057152182753";

export const metadata: Metadata = {
  title: "Photo Archive",
  description:
    "Browse historical photographs, cemetery views, monuments, and preservation images from the Henderson Cemetery archive.",
  openGraph: {
    title: "Henderson Cemetery Photo Archive",
    description:
      "A visual record of Henderson Cemetery, its monuments, families, preservation efforts, and historical landscape.",
    url: "/gallery",
  },
  twitter: {
    title: "Henderson Cemetery Photo Archive",
    description:
      "A visual record of Henderson Cemetery, its monuments, families, preservation efforts, and historical landscape.",
  },
};

function FacebookArchiveCallout({ className = "" }: { className?: string }) {
  return (
    <section
      className={[
        "rounded-[1.5rem] border border-stone-300 bg-stone-100/80 p-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
          Community Updates
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-stone-950">
          Follow Henderson Cemetery on Facebook
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-700">
          View community notes, cemetery updates, and preservation activity.
        </p>
      </div>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="button-soft mt-5 inline-flex items-center gap-3 rounded-full border border-stone-400 bg-stone-50 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 sm:mt-0 sm:shrink-0"
      >
        <span
          aria-hidden="true"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 font-serif text-base font-semibold text-stone-100"
        >
          f
        </span>
        Facebook
      </a>
    </section>
  );
}

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const featuredImage = images[1] ?? images[0] ?? null;

  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <SiteHeader sticky />

      <section className="section-reveal border-b border-stone-300 bg-stone-200/35">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
          <PageHeader
            eyebrow="Photo Archive"
            title="Photo Archive"
            description="A visual record of Henderson Cemetery, its monuments, families, preservation efforts, and historical landscape."
          />

          <div className="mt-8 sm:mt-10">
            <GalleryStats photographCount={images.length} />
          </div>

          <FacebookArchiveCallout className="mt-8 sm:mt-10" />
        </div>
      </section>

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <GalleryHero featuredImage={featuredImage} />

        <div className="mt-12 sm:mt-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">Collection Images</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Cemetery photographs and preservation views.
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-700">
              Photographs are discovered automatically from the public gallery archive, including future folders for cemetery views, tombstones, historical records, or contributor collections.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <GalleryGrid images={images} />
          </div>
        </div>

        <FacebookArchiveCallout className="mt-10 sm:mt-12" />

        <section className="mt-14 rounded-[2rem] border border-stone-300 bg-stone-50/90 p-6 text-center shadow-sm sm:mt-18 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Contribute to the Archive</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
            Contribute to the Archive
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-700">
            Have historical photographs, family records, cemetery images, or preservation materials to share?
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-stone-700">
            Contact Henderson Cemetery Preserving Our History to help preserve local history.
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {[
              "Send original-size image files when possible.",
              "JPG files are preferred for photographs.",
              "Include the season or date if known.",
              "Include the photographer if known.",
              "Describe the approximate area shown when known.",
              "Confirm permission to publish the image online.",
            ].map((guideline) => (
              <p
                key={guideline}
                className="rounded-2xl border border-stone-200 bg-stone-100/75 px-4 py-3 text-sm leading-6 text-stone-700"
              >
                {guideline}
              </p>
            ))}
          </div>
          <Link
            href="/contact"
            className="button-soft mt-6 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 hover:bg-stone-700"
          >
            Contact the Archive
          </Link>
        </section>
      </section>

      <DonationBanner />
      <SiteFooter />
    </main>
  );
}
