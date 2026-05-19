import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedArticles } from "@/features/articles/utils";

export function LatestArticlesSection() {
  const latestArticles = getFeaturedArticles(3);

  return (
    <section id="blog" className="border-t border-brand-border bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          align="center"
          className="mb-16"
          eyebrow={<span className="text-xs font-semibold uppercase tracking-wider text-accent-blue">Technical Writing</span>}
          title="Insights from engineering trenches"
          description="Berbagi pengalaman empiris seputar optimasi performa framework, rancangan sistem backend, serta dokumentasi best practice."
        />

        <div className="mb-12 flex justify-center">
          <Button href="/articles" variant="outline" size="md">
            View all articles
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => {
            return (
              <article key={article.slug} className="group flex flex-col space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-brand-border bg-gray-100">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      quality={76}
                      sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(122,61,255,0.06),rgba(59,137,255,0.05),rgba(237,82,203,0.06))]">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(216,216,216,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,216,216,0.45)_1px,transparent_1px)] bg-[size:1.4rem_1.4rem] opacity-40"></div>
                      <div className="relative flex h-full flex-col justify-between p-5">
                        <span className={`w-fit rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${article.categoryBadgeClassName}`}>
                          {article.heroLabel}
                        </span>
                        <div className="space-y-2">
                          <div className="h-2.5 w-24 rounded-full bg-white/70"></div>
                          <div className="h-2.5 w-40 rounded-full bg-white/70"></div>
                          <div className="h-2.5 w-28 rounded-full bg-white/70"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 pt-1 text-xs text-brand-muted">
                  <span>{article.categoryLabel}</span>
                  <span>•</span>
                  <time dateTime={article.dateIso}>{article.date}</time>
                </div>
                <h3 className={`text-base font-semibold leading-snug text-brand-dark transition-colors ${article.hoverAccentClassName}`}>
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="line-clamp-2 text-xs leading-relaxed text-brand-muted">{article.summary}</p>
                <Link href={`/articles/${article.slug}`} className="inline-flex items-center pt-2 text-xs font-medium text-brand-dark group-hover:underline">
                  Baca artikel <span className="ml-1">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
