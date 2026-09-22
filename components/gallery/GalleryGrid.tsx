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
  const panorama = images.find((image) => image.filename.includes("panorama"));
  const regularImages = images
    .map((image, index) => ({ image, index }))
    .filter(({ image }) => image !== panorama);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {panorama ? (
        <button
          type="button"
          onClick={() => setSelectedIndex(images.indexOf(panorama))}
          className="group relative mb-5 block aspect-[12/5] w-full overflow-hidden bg-white shadow-lg shadow-[#243A2E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:ring-offset-2"
          aria-label={`Open cemetery photograph: ${panorama.alt}`}
        >
          <Image
            src={panorama.src}
            alt={panorama.alt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            priority
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#243A2E]/85 to-transparent px-5 pb-4 pt-12 text-left text-sm font-medium text-white sm:px-6">
            {panorama.caption}
          </span>
        </button>
      ) : null}

      <div className="grid auto-rows-[180px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-4">
        {regularImages.map(({ image, index }, layoutIndex) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={[
              "group relative overflow-hidden bg-white shadow-lg shadow-[#243A2E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A3E] focus-visible:ring-offset-2",
              layoutIndex % 9 === 0 ? "md:col-span-2 md:row-span-2" : "",
              layoutIndex % 7 === 3 ? "md:row-span-2" : "",
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
