"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { GalleryImage } from "@/lib/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
};

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

export function GalleryLightbox({ images, selectedIndex, onClose, onSelect }: GalleryLightboxProps) {
  const imageViewportRef = useRef<HTMLDivElement>(null);
  const isOpen = selectedIndex !== null;
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  useEffect(() => {
    if (!isOpen || selectedIndex === null) return;

    const activeIndex = selectedIndex;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onSelect(wrapIndex(activeIndex - 1, images.length));
      }

      if (event.key === "ArrowRight") {
        onSelect(wrapIndex(activeIndex + 1, images.length));
      }
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isOpen, onClose, onSelect, selectedIndex]);

  useEffect(() => {
    if (!isOpen) return;

    imageViewportRef.current?.scrollTo({ top: 0, left: 0 });
  }, [isOpen, selectedIndex]);

  if (!isOpen || selectedIndex === null || !selectedImage) {
    return null;
  }

  const previousIndex = wrapIndex(selectedIndex - 1, images.length);
  const nextIndex = wrapIndex(selectedIndex + 1, images.length);
  const portalRoot = typeof document === "undefined" ? null : document.body;

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex h-dvh flex-col overflow-hidden bg-stone-950/95 text-stone-50"
      role="dialog"
      aria-modal="true"
      aria-label={`Archive image ${selectedIndex + 1} of ${images.length}`}
    >
      <div className="z-10 border-b border-stone-700/90 bg-stone-950/95 px-4 py-3 shadow-lg shadow-stone-950/30 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onClose}
            className="button-soft inline-flex h-11 w-fit items-center justify-center rounded-full border border-stone-600 bg-stone-900 px-4 text-sm font-medium text-stone-100 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
          >
            X Close
          </button>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:flex sm:gap-3">
            <button
              type="button"
              className="button-soft h-11 rounded-full border border-stone-600 bg-stone-900 px-4 text-sm font-medium text-stone-100 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
              onClick={() => onSelect(previousIndex)}
            >
              ← Previous
            </button>

            <p className="whitespace-nowrap px-2 text-center text-sm font-medium text-stone-300">
              Image {selectedIndex + 1} of {images.length}
            </p>

            <button
              type="button"
              className="button-soft h-11 rounded-full border border-stone-600 bg-stone-900 px-4 text-sm font-medium text-stone-100 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
              onClick={() => onSelect(nextIndex)}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <div ref={imageViewportRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
        <div className="mx-auto flex min-h-full w-full max-w-6xl items-center justify-center">
          <div className="relative h-[min(1200px,calc(100dvh-9rem))] min-h-[22rem] w-full sm:h-[min(1200px,calc(100dvh-7rem))]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="z-10 border-t border-stone-700/90 bg-stone-950/95 px-4 py-3 shadow-lg shadow-stone-950/30 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-serif text-lg font-semibold text-stone-50 sm:text-xl">Archive Photograph</p>
            <p className="mt-0.5 text-xs text-stone-400 sm:text-sm">Henderson Cemetery Preservation Archive</p>
          </div>
          <p className="shrink-0 text-xs text-stone-500 sm:text-sm">
            Use arrow keys to browse
          </p>
        </div>
      </div>
    </div>,
    portalRoot,
  );
}
