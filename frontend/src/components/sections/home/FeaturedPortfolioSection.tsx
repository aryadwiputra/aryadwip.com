import Image from "next/image";
import Link from "next/link";

import { getFeaturedPortfolioItems } from "@/features/portfolio/utils";

export function FeaturedPortfolioSection() {
  const portfolioItems = getFeaturedPortfolioItems();

  return (
    <section id="portfolio" className="border-t border-brand-border bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-purple">Selected Works</span>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Proven digital systems in production</h2>
          <p className="text-sm text-brand-muted md:text-base">Studi kasus pengembangan platform kompleks dari tahap inisiasi arsitektur database hingga deployment siap pakai.</p>
        </div>
        <div className="mb-12 flex justify-center">
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-button border border-brand-border bg-white px-5 py-3 text-sm font-medium text-brand-dark transition-all hover:bg-gray-50">
            Lihat semua portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.slug} className="group flex flex-col overflow-hidden rounded-card border border-brand-border bg-white transition-all hover:border-brand-dark/30 hover:shadow-soft-hover">
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-brand-muted/30">Thumbnail Placeholder</div>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover filter grayscale transition-transform duration-300 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-grow flex-col space-y-3 p-5">
                <span className={`w-fit rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${item.teaserLabelClassName}`}>
                  {item.teaserLabel}
                </span>
                <h3 className={`text-lg font-semibold leading-snug text-brand-dark ${item.hoverAccentClassName}`}>{item.title}</h3>
                <p className="line-clamp-2 text-xs text-brand-muted">{item.summary}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.stack.map((tag) => (
                    <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-brand-dark">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/portfolio/${item.slug}`} className={`mt-auto inline-flex items-center pt-4 text-xs font-medium text-brand-dark transition-colors ${item.hoverAccentClassName}`}>
                  Lihat Studi Kasus <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
