"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { PortfolioFilter, PortfolioFilterKey, PortfolioItem } from "@/features/portfolio/types";

function PortfolioFilterBar({
  activeFilter,
  filters,
  onChange,
}: {
  activeFilter: PortfolioFilterKey;
  filters: PortfolioFilter[];
  onChange: (filter: PortfolioFilterKey) => void;
}) {
  return (
    <section className="sticky top-16 z-40 border-b border-brand-border bg-white/80 py-4 backdrop-blur-md transition-all">
      <div className="no-scrollbar mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-6">
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              type="button"
              size="sm"
              variant={filter.key === activeFilter ? "primary" : "outline"}
              className="h-9 whitespace-nowrap"
              onClick={() => onChange(filter.key)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Card as="article" className="group flex flex-col overflow-hidden transition-all hover:border-brand-dark/30 hover:shadow-soft-hover">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-brand-border bg-gray-50">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover opacity-95 transition-all duration-300 group-hover:scale-[1.01]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(128,90,213,0.05),rgba(59,130,246,0.04))] px-6 text-center font-mono text-xs text-brand-muted/40">
            Tampilan belum tersedia
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col space-y-3.5 p-6">
        <div className="flex items-center justify-between">
          <span className={`rounded px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${item.teaserLabelClassName}`}>
            {item.teaserLabel}
          </span>
          <span className="text-xs font-mono text-brand-muted">{item.year}</span>
        </div>
        <h2 className={`text-xl font-semibold leading-snug tracking-tight text-brand-dark transition-colors ${item.hoverAccentClassName}`}>
          {item.title}
        </h2>
        <p className="line-clamp-3 text-xs leading-relaxed text-brand-muted">{item.summary}</p>
        <div className="flex flex-wrap gap-1.5 pt-1.5">
          {item.stack.map((stackItem) => (
            <span key={stackItem} className="rounded border border-brand-border bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-brand-dark">
              {stackItem}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-dashed border-brand-border/60 pt-4">
          <Link href={`/portfolio/${item.slug}`} className={`inline-flex items-center text-xs font-semibold text-brand-dark transition-colors ${item.hoverAccentClassName}`}>
            Lihat Studi Kasus <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export function PortfolioListingClient({
  items,
  filters,
}: {
  items: PortfolioItem[];
  filters: PortfolioFilter[];
}) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterKey>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return items;
    }

    return items.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter, items]);

  return (
    <>
      <PortfolioFilterBar activeFilter={activeFilter} filters={filters} onChange={setActiveFilter} />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="rounded-card border border-dashed border-brand-border bg-gray-50/50 py-20 text-center">
              <p className="text-sm font-medium text-brand-muted">Tidak ada proyek yang sesuai dengan kategori filter terpilih.</p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
