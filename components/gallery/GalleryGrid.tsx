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
      <div className="grid auto-rows-[180px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={[
              "group relative overflow-hidden bg-white shadow-lg shadow-[#243A2E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:ring-offset-2",
              index % 9 === 0 ? "md:col-span-2 md:row-span-2" : "",
              index % 7 === 3 ? "md:row-span-2" : "",
            ].join(" ")}
            aria-label={`Open cemetery photograph: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
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
