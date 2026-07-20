"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

type GalleryHighlightsProps = {
  images: GalleryImage[];
  highlightImages?: GalleryImage[];
  totalCount: number;
};

export function GalleryHighlights({ images, highlightImages: highlightImageInput, totalCount }: GalleryHighlightsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const highlightImages = (highlightImageInput ?? images).slice(0, 10);

  if (highlightImages.length === 0) {
    return null;
  }

  function scrollByCard(direction: "previous" | "next") {
    const node = scrollRef.current;
    if (!node) return;

    const amount = Math.min(node.clientWidth * 0.78, 620);
    node.scrollBy({
      left: direction === "previous" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="section-reveal mx-auto w-full max-w-6xl px-5 pb-10 sm:px-6 sm:pb-12" aria-labelledby="photo-highlights-heading">
      <div className="border-y border-stone-300 py-6 sm:py-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="photo-highlights-heading" className="font-serif text-2xl font-semibold text-stone-950 sm:text-3xl">
              Photo Highlights
            </h2>
            <p className="mt-1 text-sm leading-6 text-stone-600">
              Explore a selection of photographs from the Henderson Cemetery archive.
            </p>
          </div>

          <div className="hidden gap-2 md:flex" aria-label="Photo highlights navigation">
            <button
              type="button"
              onClick={() => scrollByCard("previous")}
              className="button-soft inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-200"
              aria-label="Scroll photo highlights left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              className="button-soft inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-200"
              aria-label="Scroll photo highlights right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-5 flex gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {highlightImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedIndex(images.findIndex((galleryImage) => galleryImage.id === image.id))}
              className="image-soft group relative aspect-[4/3] w-36 shrink-0 overflow-hidden rounded-2xl border border-stone-300 bg-stone-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 sm:w-40 lg:w-44"
              aria-label={`Open photograph: ${image.caption}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 144px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <Link
          href="/gallery"
          className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
        >
          View All {totalCount.toLocaleString()} Archive Photographs →
        </Link>
      </div>

      <GalleryLightbox
        images={images}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelect={setSelectedIndex}
      />
    </section>
  );
}
