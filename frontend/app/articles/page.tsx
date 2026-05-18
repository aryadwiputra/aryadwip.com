import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/sections";
import { featuredArticles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Tulisan teknis tentang Laravel, arsitektur backend, performa, dan dashboard admin.",
};

export default function ArticlesPage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionIntro
            eyebrow="Artikel"
            title="Engineering notes from production trenches"
            description="Tulisan seputar optimasi Laravel, desain skema database, arsitektur backend, dan pengamanan area admin."
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:px-10 lg:grid-cols-2 xl:grid-cols-3">
          {featuredArticles.map((article) => (
            <article key={article.slug} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm text-[var(--muted)]">
                {article.category} <span className="mx-2">•</span> {article.date}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--ink)]">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{article.summary}</p>
              <Link href={`/articles/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
                Read Article <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
