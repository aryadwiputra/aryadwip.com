"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { PortfolioGalleryItem } from "@/features/portfolio/types";

type PortfolioGalleryLightboxProps = {
  items: PortfolioGalleryItem[];
  title: string;
};

const ZOOM_LEVELS = [1, 1.5, 2, 2.5] as const;

export function PortfolioGalleryLightbox({ items, title }: PortfolioGalleryLightboxProps) {
  const validItems = useMemo(() => items.filter((item) => Boolean(item.src)), [items]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomIndex, setZoomIndex] = useState(0);

  const activeItem = activeIndex === null ? null : validItems[activeIndex] ?? null;
  const activeItemNumber = activeIndex === null ? 0 : activeIndex + 1;
  const zoom = ZOOM_LEVELS[zoomIndex] ?? 1;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setZoomIndex(0);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    setZoomIndex(0);
  }, []);

  const showPrevious = useCallback(() => {
    if (!validItems.length) {
      return;
    }

    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current - 1 + validItems.length) % validItems.length;
    });
    setZoomIndex(0);
  }, [validItems.length]);

  const showNext = useCallback(() => {
    if (!validItems.length) {
      return;
    }

    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + 1) % validItems.length;
    });
    setZoomIndex(0);
  }, [validItems.length]);

  const zoomIn = () => setZoomIndex((current) => Math.min(current + 1, ZOOM_LEVELS.length - 1));
  const zoomOut = () => setZoomIndex((current) => Math.max(current - 1, 0));
  const resetZoom = () => setZoomIndex(0);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "+" || event.key === "=") {
        zoomIn();
      }

      if (event.key === "-") {
        zoomOut();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  if (!validItems.length) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {validItems.map((item, index) => (
          <button
            key={`${item.label}-${item.alt}`}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative flex aspect-[4/3] overflow-hidden rounded-card border border-brand-border bg-gray-50 text-left transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/20"
            aria-label={`Buka galeri ${index + 1}: ${item.alt}`}
          >
            <Image
              src={item.src!}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-brand-dark/75 via-brand-dark/10 to-transparent p-4 text-white">
              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">Klik untuk memperbesar</p>
                <p className="text-sm font-medium leading-snug">{item.label}</p>
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
                Zoom
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-dark/88 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri proyek ${title}`}
          onClick={closeLightbox}
        >
          <div
            className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1115] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white md:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{activeItem.label}</p>
                <p className="truncate text-xs text-white/60">{activeItemNumber} / {validItems.length} • {Math.round(zoom * 100)}%</p>
              </div>

              <div className="flex items-center gap-2">
                <button type="button" onClick={zoomOut} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10" aria-label="Perkecil gambar">
                  −
                </button>
                <button type="button" onClick={resetZoom} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10" aria-label="Reset zoom">
                  Reset
                </button>
                <button type="button" onClick={zoomIn} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10" aria-label="Perbesar gambar">
                  +
                </button>
                <button type="button" onClick={closeLightbox} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10" aria-label="Tutup galeri">
                  Close
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-auto bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_58%)]">
              <div className="relative flex min-h-full min-w-full items-center justify-center p-4 md:p-8">
                <div
                  className="relative h-[68vh] w-full max-w-5xl transition-transform duration-300 ease-out md:h-[74vh]"
                  style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
                >
                  <Image
                    src={activeItem.src!}
                    alt={activeItem.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 text-white md:px-5">
              <button type="button" onClick={showPrevious} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white/10">
                Prev
              </button>
              <p className="text-center text-xs text-white/60">Klik area luar untuk menutup • Gunakan panah kiri/kanan untuk navigasi</p>
              <button type="button" onClick={showNext} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white/10">
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
