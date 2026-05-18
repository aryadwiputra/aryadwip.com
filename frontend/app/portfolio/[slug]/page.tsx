import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import { portfolioItems } from "@/lib/site-data";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = portfolioItems.find((item) => item.slug === params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioItems.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{project.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 md:px-10">
          <div className="aspect-[16/9] rounded-[var(--radius-lg)]" style={{ background: `linear-gradient(135deg, ${project.accent}, color-mix(in srgb, ${project.accent} 20%, white))` }} />
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
              <h2 className="text-lg font-semibold text-[var(--ink)]">Challenge</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>
            </article>
            <article className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
              <h2 className="text-lg font-semibold text-[var(--ink)]">Solution</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.solution}</p>
            </article>
            <article className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
              <h2 className="text-lg font-semibold text-[var(--ink)]">Results</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {project.result.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
            <span aria-hidden>←</span> Back to Portfolio
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
