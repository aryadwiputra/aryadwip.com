import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/sections";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kumpulan studi kasus pengembangan aplikasi, API, dan dashboard admin.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionIntro
            eyebrow="Portfolio"
            title="Case studies for systems that need to ship and scale"
            description="Koleksi proyek pilihan yang menampilkan kombinasi arsitektur backend, dashboard internal, dan integrasi data untuk kebutuhan bisnis nyata."
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:px-10 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.slug} className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <div className="aspect-[16/9]" style={{ background: `linear-gradient(135deg, ${item.accent}, color-mix(in srgb, ${item.accent} 18%, white))` }} />
              <div className="space-y-5 p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.category}</p>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">{item.title}</h2>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/portfolio/${item.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
                  View Case Study <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
