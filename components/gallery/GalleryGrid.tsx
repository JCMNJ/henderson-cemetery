"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage, GallerySeason } from "@/lib/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

type GalleryGridProps = {
  images: GalleryImage[];
};

type GalleryFilter = "all" | GallerySeason;

const galleryFilters: { label: string; value: GalleryFilter }[] = [
  { label: "All", value: "all" },
  { label: "Spring", value: "spring" },
  { label: "Summer", value: "summer" },
  { label: "Fall", value: "fall" },
  { label: "Winter", value: "winter" },
];

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filteredImages =
    activeFilter === "all" ? images : images.filter((image) => image.season === activeFilter);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter photographs by season">
        {galleryFilters.map((filter) => {
          const isActive = activeFilter === filter.value;
          const count =
            filter.value === "all"
              ? images.length
              : images.filter((image) => image.season === filter.value).length;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => {
                setActiveFilter(filter.value);
                setSelectedIndex(null);
              }}
              aria-pressed={isActive}
              className={[
                "button-soft rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500",
                isActive
                  ? "border-stone-900 bg-stone-900 text-stone-50"
                  : "border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100",
              ].join(" ")}
            >
              {filter.label} <span className="text-xs opacity-75">({count})</span>
            </button>
          );
        })}
      </div>

      {filteredImages.length === 0 ? (
        <p className="rounded-2xl border border-stone-300 bg-stone-50/90 px-4 py-5 text-sm text-stone-700">
          No photographs are currently tagged for this season.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image, index) => (
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
              <span className="block text-sm font-medium text-stone-900">{image.caption}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-stone-500">
                {image.season ? `${image.season} photograph` : "Cemetery photograph"}
              </span>
            </span>
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={filteredImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelect={setSelectedIndex}
      />
    </>
  );
}
