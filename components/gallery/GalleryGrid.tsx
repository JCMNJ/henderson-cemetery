"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="card-soft group overflow-hidden rounded-[1.5rem] border border-stone-300 bg-stone-50 text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
            aria-label={`Open archive photograph: ${image.alt}`}
          >
            <span className="relative block aspect-[4/3] overflow-hidden bg-stone-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </span>
            <span className="block border-t border-stone-200 px-4 py-3">
              <span className="block text-sm font-medium text-stone-900">Archive Photograph</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-stone-500">
                {image.category ?? "Henderson Cemetery"}
              </span>
            </span>
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={images}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelect={setSelectedIndex}
      />
    </>
  );
}
