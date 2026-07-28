"use client";

import { useRef, useState } from "react";

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

  const zoomIn = () => setZoom((value) => Math.min(2.5, Number((value + 0.2).toFixed(2))));
  const zoomOut = () => setZoom((value) => Math.max(0.8, Number((value - 0.2).toFixed(2))));
  const resetZoom = () => setZoom(1);

  return (
    <div className="bg-white p-4 shadow-2xl shadow-[#243A2E]/12 ring-1 ring-[#D8D4C8] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77746C]">
          Select a cemetery plan to view it in greater detail.
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            className="button-soft rounded-full border border-[#D8D4C8] bg-white px-4 py-2 text-xs font-semibold text-[#243A2E] focus-visible:ring-[#B08A3E]"
          >
            Zoom out
          </button>
          <button
            type="button"
            onClick={zoomIn}
            className="button-soft rounded-full bg-[#243A2E] px-4 py-2 text-xs font-semibold text-white focus-visible:ring-[#B08A3E]"
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
          <span className="rounded-full bg-[#F7F6F1] px-3 py-2 text-xs font-semibold text-[#77746C]">{Math.round(zoom * 100)}%</span>
        </div>
      </div>
      <div
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
          src="/images/plot-map/henderson-cemetery-plots-medium.jpg"
          alt="Henderson Cemetery lot map"
          className="h-auto max-w-none origin-top-left"
          style={{ transform: `scale(${zoom})` }}
          draggable={false}
        />
      </div>
    </div>
  );
}
