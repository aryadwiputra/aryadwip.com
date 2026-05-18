import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import { featuredArticles } from "@/lib/site-data";

export function generateStaticParams() {
  return featuredArticles.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = featuredArticles.find((item) => item.slug === params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = featuredArticles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-sm text-[var(--muted)]">
            {article.category} <span className="mx-2">•</span> {article.date}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{article.summary}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <article className="mx-auto grid w-full max-w-4xl gap-8 px-6 md:px-10">
          {article.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[var(--muted)] md:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
            <h2 className="text-lg font-semibold text-[var(--ink)]">Layanan Konsultasi Teknis</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Jika platform digital mulai terasa berat diubah, audit kode dan profiling database bisa menjadi langkah paling hemat sebelum trafik naik lebih tinggi.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
              Jadwalkan Diskusi <span aria-hidden>→</span>
            </Link>
          </div>
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
            <span aria-hidden>←</span> Back to Articles
          </Link>
        </article>
      </section>
    </SiteShell>
  );
}
