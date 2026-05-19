"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getArticleFilters, getArticleItems } from "@/features/artikel/utils";
import type { ArticleFilterKey, ArticleItem } from "@/features/artikel/types";

function ArticleCard({ item }: { item: ArticleItem }) {
  return (
    <Card as="article" className="group flex flex-col justify-between p-6 shadow-soft transition-all hover:border-brand-dark/30 hover:shadow-soft-hover md:p-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className={`rounded px-2.5 py-0.5 font-semibold uppercase tracking-widest ${item.categoryBadgeClassName}`}>
            {item.categoryLabel}
          </span>
          <time className="font-mono text-brand-muted" dateTime={item.dateIso}>{item.date}</time>
        </div>
        <h2 className={`text-2xl font-semibold leading-snug tracking-tight text-brand-dark transition-colors ${item.hoverAccentClassName}`}>
          <Link href={`/artikel/${item.slug}`}>{item.title}</Link>
        </h2>
        <p className="line-clamp-3 text-sm leading-relaxed text-brand-muted">{item.summary}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-dashed border-brand-border/60 pt-4">
        <div className="flex gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded border border-brand-border bg-gray-50 px-2 py-0.5 text-[10px] text-brand-dark">{tag}</span>
          ))}
        </div>
        <Link href={`/artikel/${item.slug}`} className={`inline-flex items-center text-xs font-semibold text-brand-dark transition-colors ${item.hoverAccentClassName}`}>
          Baca artikel <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Card>
  );
}

function ArticlesPageCta() {
  return (
    <section className="border-t border-brand-border bg-white px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-card bg-brand-dark p-8 text-white shadow-soft md:flex-row md:p-12">
        <div className="max-w-xl space-y-3 text-center md:text-left">
          <span className="inline-block rounded border border-accent-green/20 bg-accent-green/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent-green">Mailing List Teknis</span>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Dapatkan insight langsung ke inbox Anda</h2>
          <p className="text-xs leading-relaxed text-gray-400 md:text-sm">Tulisan mendalam seputar studi kasus sistem enterprise, arsitektur backend, dan optimasi performa framework PHP/Laravel. Tanpa spam, dikirim berkala.</p>
        </div>
        <div className="w-full md:max-w-md">
          <form className="flex flex-col gap-2 sm:flex-row">
            <input type="email" required placeholder="Masukkan alamat email Anda" className="h-11 w-full rounded-button border border-gray-800 bg-white/5 px-4 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-white focus:outline-none focus:ring-0" />
            <button type="submit" className="h-11 whitespace-nowrap rounded-button bg-white px-5 text-xs font-semibold text-brand-dark transition-all hover:bg-gray-100">Langganan</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ArticleListingClient() {
  const items = getArticleItems();
  const filters = getArticleFilters();
  const [activeFilter, setActiveFilter] = useState<ArticleFilterKey>("all");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesFilter = activeFilter === "all" || item.categories.includes(activeFilter);
      const haystack = `${item.title} ${item.summary} ${item.tags.join(" ")}`.toLowerCase();
      const matchesSearch = !searchValue || haystack.includes(searchValue);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, items, search]);

  return (
    <main>
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 py-16 md:py-24 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <Badge className="bg-accent-purple/5 text-accent-purple" withDot dotClassName="bg-accent-purple">Catatan Teknis</Badge>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
              Artikel teknis dari pengalaman membangun sistem yang benar-benar dipakai.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
              Tulisan yang membahas Laravel, desain database, performa backend, dan keputusan arsitektur yang relevan untuk kebutuhan bisnis nyata.
            </p>
          </div>
          <div className="space-y-4 rounded-card border border-brand-border bg-white p-5 shadow-soft lg:col-span-5">
            <h3 className="text-sm font-semibold text-brand-dark">Filter & pencarian cepat</h3>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ketik kata kunci judul..."
                className="h-10 w-full rounded-button border border-brand-border px-3 pr-10 text-sm transition-colors placeholder:text-gray-400 focus:border-brand-dark focus:ring-0"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-brand-muted">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
            </div>
            <div className="space-y-2.5">
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-brand-dark/50">Kategori Topik</label>
              <div className="flex flex-wrap gap-1.5">
                {filters.map((filter) => (
                  <Button
                    key={filter.key}
                    type="button"
                    size="sm"
                    variant={filter.key === activeFilter ? "primary" : "outline"}
                    className="h-8 whitespace-nowrap px-3.5"
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {filteredItems.map((item) => (
              <ArticleCard key={item.slug} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="rounded-card border border-dashed border-brand-border bg-gray-50/50 py-20 text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-brand-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="text-sm font-medium text-brand-muted">Tidak ada artikel teknis yang cocok dengan kata kunci atau filter Anda.</p>
            </div>
          ) : null}
        </div>
      </section>

      <ArticlesPageCta />
    </main>
  );
}
