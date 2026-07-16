import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery";

type GalleryHeroProps = {
  featuredImage: GalleryImage | null;
};

export function GalleryHero({ featuredImage }: GalleryHeroProps) {
  if (!featuredImage) {
    return (
      <div className="card-soft rounded-[2rem] border border-stone-300 bg-stone-50/85 p-8 text-center shadow-sm sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Collection Pending</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
          No photographs have been added yet.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone-700">
          Add supported image files to public/gallery and redeploy to publish them in the archive.
        </p>
      </div>
    );
  }

  return (
    <figure className="image-soft overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-50 shadow-sm">
      <div className="relative aspect-[16/9] min-h-[20rem] bg-stone-200 sm:min-h-[30rem]">
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
          priority
        />
      </div>
      <figcaption className="border-t border-stone-200 bg-stone-50/95 px-5 py-4 text-sm text-stone-600 sm:px-6">
        Featured archive photograph from the Henderson Cemetery collection.
      </figcaption>
    </figure>
  );
}
