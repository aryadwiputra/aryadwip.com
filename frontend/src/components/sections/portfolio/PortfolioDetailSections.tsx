import Link from "next/link";
import type { PortfolioItem } from "@/features/portfolio/types";

export function PortfolioDetailHeroSection({ item }: { item: PortfolioItem }) {
  return (
    <section className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <nav className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-brand-muted">
          <Link href="/" className="transition-colors hover:text-brand-dark">Beranda</Link>
          <span className="text-brand-border">/</span>
          <Link href="/portfolio" className="transition-colors hover:text-brand-dark">Portfolio</Link>
          <span className="text-brand-border">/</span>
          <span className="text-brand-dark">Case Study</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-8">
            <span className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${item.detail.caseStudyLabelClassName}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current"></span> {item.detail.caseStudyLabel}
            </span>
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
              {item.detail.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
              {item.detail.description}
            </p>
          </div>

          <aside className="w-full rounded-card border border-brand-border bg-gray-50 p-6 shadow-soft lg:col-span-4">
            <div className="space-y-4">
              <h3 className="border-b border-brand-border pb-2.5 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
                {item.detail.infoTitle}
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 text-xs">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-muted">Peran Utama</p>
                  <p className="mt-0.5 font-semibold text-brand-dark">{item.detail.info.role}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-muted">Durasi</p>
                  <p className="mt-0.5 font-semibold text-brand-dark">{item.detail.info.duration}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] uppercase tracking-wider text-brand-muted">Inti Tech Stack</p>
                  <p className="mt-0.5 font-mono text-[11px] font-semibold text-brand-dark">{item.detail.info.techStackSummary}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] uppercase tracking-wider text-brand-muted">Cakupan Domain Backend</p>
                  <p className="mt-0.5 font-semibold text-brand-dark">{item.detail.info.domainScope}</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/kontak"
                  className="inline-flex h-10 w-full items-center justify-center rounded-button bg-brand-dark px-4 text-center text-xs font-semibold text-white shadow-soft transition-all hover:bg-opacity-90"
                >
                  Konsultasikan Kebutuhan Serupa
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function PortfolioDetailContentSection({ item }: { item: PortfolioItem }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          <article className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-purple"></span>
              <h2 className="text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">{item.detail.challengeTitle}</h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-brand-muted md:text-[15px]">
              {item.detail.challengeBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue"></span>
              <h2 className="text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">{item.detail.solutionTitle}</h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-brand-muted md:text-[15px]">
              {item.detail.solutionBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-purple"></span>
              <h2 className="text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">{item.detail.executionTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {item.detail.executionSteps.map((step) => (
                <div key={step.title} className="space-y-2 rounded-card border border-brand-border bg-white p-5 transition-colors hover:border-brand-dark">
                  <p className={`text-[10px] font-mono font-semibold uppercase tracking-widest ${step.eyebrowClassName}`}>{step.eyebrow}</p>
                  <h4 className="text-sm font-semibold text-brand-dark">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-brand-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green"></span>
              <h2 className="text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">{item.detail.impactTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {item.detail.impactItems.map((impactItem) => (
                <div key={impactItem.label} className="rounded-card border border-brand-border bg-gray-50/50 p-5">
                  <p className="text-3xl font-semibold tracking-tight text-brand-dark">{impactItem.value}</p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-brand-muted">{impactItem.label}</p>
                  <p className="mt-1 text-xs leading-normal text-brand-muted">{impactItem.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-orange"></span>
              <h2 className="text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">{item.detail.documentationTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {item.detail.documentationPlaceholders.map((placeholder) => (
                <div
                  key={placeholder}
                  className="flex aspect-[4/3] items-center justify-center rounded-card border border-brand-border bg-gray-50 p-4 text-center font-mono text-[10px] text-brand-muted/40"
                >
                  {placeholder}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div className="sticky top-24 space-y-4 rounded-card border border-brand-border bg-gray-50 p-6">
            <h4 className="border-b border-brand-border pb-2.5 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
              {item.detail.sidebarTitle}
            </h4>
            <p className="text-xs leading-relaxed text-brand-muted">{item.detail.sidebarDescription}</p>
            <ul className="space-y-2.5 pt-2 text-xs text-brand-muted">
              {item.detail.sidebarPoints.map((point) => (
                <li key={point.title} className="flex items-start gap-2">
                  <span className={`shrink-0 font-mono ${point.bulletClassName}`}>&bull;</span>
                  <span>
                    <strong className="font-medium text-brand-dark">{point.title}</strong> {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioDetailPagerSection({
  previousHref,
  nextHref,
}: {
  previousHref: string;
  nextHref: string;
}) {
  return (
    <section className="border-y border-brand-border bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <Link href={previousHref} className="group inline-flex items-center gap-1 text-xs font-semibold text-brand-muted transition-colors hover:text-brand-dark">
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Project Sebelumnya
        </Link>
        <Link
          href="/kontak"
          className="inline-flex h-11 w-full items-center justify-center rounded-button bg-brand-dark px-6 text-center text-xs font-semibold text-white shadow-soft transition-all hover:bg-opacity-90 sm:w-auto"
        >
          Butuh Solusi Arsitektur Serupa? Mari Berdiskusi
        </Link>
        <Link href={nextHref} className="group inline-flex items-center gap-1 text-xs font-semibold text-brand-muted transition-colors hover:text-brand-dark">
          Project Berikutnya <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
