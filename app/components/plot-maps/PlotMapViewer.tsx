"use client";

import { useRef, useState } from "react";

const completeMapImageHref = "/images/plot-map/henderson-cemetery-plots-medium.jpg";
const mapNaturalWidth = 6500;
const minZoom = 0.5;
const maxZoom = 4;
const zoomStep = 0.25;

export function PlotMapViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [scrollStartTop, setScrollStartTop] = useState(0);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartY(event.clientY);
    setScrollStartLeft(containerRef.current.scrollLeft);
    setScrollStartTop(containerRef.current.scrollTop);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const dx = event.clientX - dragStartX;
    const dy = event.clientY - dragStartY;
    containerRef.current.scrollLeft = scrollStartLeft - dx;
    containerRef.current.scrollTop = scrollStartTop - dy;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const updateZoom = (nextZoom: number) => {
    const container = containerRef.current;
    const previousZoom = zoom;
    const boundedZoom = Math.min(maxZoom, Math.max(minZoom, Number(nextZoom.toFixed(2))));

    if (!container) {
      setZoom(boundedZoom);
      return;
    }

    const centerX = (container.scrollLeft + (container.clientWidth / 2)) / previousZoom;
    const centerY = (container.scrollTop + (container.clientHeight / 2)) / previousZoom;

    setZoom(boundedZoom);
    window.requestAnimationFrame(() => {
      container.scrollLeft = Math.max(0, (centerX * boundedZoom) - (container.clientWidth / 2));
      container.scrollTop = Math.max(0, (centerY * boundedZoom) - (container.clientHeight / 2));
    });
  };

  const zoomIn = () => updateZoom(zoom + zoomStep);
  const zoomOut = () => updateZoom(zoom - zoomStep);
  const resetZoom = () => {
    setZoom(1);
    window.requestAnimationFrame(() => {
      if (!containerRef.current) return;
      containerRef.current.scrollLeft = 0;
      containerRef.current.scrollTop = 0;
    });
  };
  const canZoomOut = zoom > minZoom;
  const canZoomIn = zoom < maxZoom;

  return (
    <div className="bg-white p-4 shadow-2xl shadow-[#243A2E]/12 ring-1 ring-[#D8D4C8] sm:p-5">
      <div className="mb-5">
        <h2 className="font-serif text-3xl font-semibold text-[#243A2E] sm:text-4xl">
          Henderson Cemetery Plot Map
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#514B42]">
          Explore recorded cemetery lots and burial locations.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            disabled={!canZoomOut}
            className="button-soft rounded-full border border-[#D8D4C8] bg-white px-4 py-2 text-xs font-semibold text-[#243A2E] focus-visible:ring-[#B08A3E] disabled:cursor-not-allowed disabled:opacity-45"
          >
            Zoom out
          </button>
          <button
            type="button"
            onClick={zoomIn}
            disabled={!canZoomIn}
            className="button-soft rounded-full bg-[#243A2E] px-4 py-2 text-xs font-semibold text-white focus-visible:ring-[#B08A3E] disabled:cursor-not-allowed disabled:opacity-45"
          >
            Zoom in
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="button-soft rounded-full border border-[#D8D4C8] bg-white px-4 py-2 text-xs font-semibold text-[#243A2E] focus-visible:ring-[#B08A3E]"
          >
            Reset
          </button>
          <a
            href={completeMapImageHref}
            download="henderson-cemetery-complete-plot-map.jpg"
            className="button-soft rounded-full bg-[#702F35] px-4 py-2 text-xs font-semibold text-white focus-visible:ring-[#B08A3E]"
          >
            Download Complete Map
          </a>
          <span className="rounded-full bg-[#F7F6F1] px-3 py-2 text-xs font-semibold text-[#77746C]">{Math.round(zoom * 100)}%</span>
        </div>
      </div>
      <div
        data-testid="plot-map-viewer"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className={[
          "mt-4 max-h-[76vh] overflow-auto bg-[#F7F6F1] ring-1 ring-[#D8D4C8]",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
      >
        <img
          src={completeMapImageHref}
          alt="Henderson Cemetery complete map"
          className="h-auto max-w-none origin-top-left"
          style={{ width: `${mapNaturalWidth * zoom}px` }}
          draggable={false}
        />
      </div>
    </div>
  );
}
