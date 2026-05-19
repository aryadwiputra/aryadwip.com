import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedArticles } from "@/features/articles/utils";

const articlePreviewImages = [
  { src: "https://picsum.photos/600/380?random=11", alt: "Article preview 1" },
  { src: "https://picsum.photos/600/380?random=12", alt: "Article preview 2" },
  { src: "https://picsum.photos/600/380?random=13", alt: "Article preview 3" },
] as const;

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
          {latestArticles.map((article, index) => {
            const previewImage = articlePreviewImages[index] ?? articlePreviewImages[0];

            return (
              <article key={article.slug} className="group flex flex-col space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-brand-border bg-gray-100">
                  <Image src={previewImage.src} alt={previewImage.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 filter grayscale group-hover:scale-[1.01] group-hover:grayscale-0" />
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
                  Read article <span className="ml-1">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
