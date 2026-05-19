import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/features/artikel/components/ReadingProgress";
import { ArticleBottomCTASection, ArticleContentSection, ArticleHeroSection } from "@/components/sections/artikel/ArticleDetailSections";
import { getArticleBySlug, getArticleItems, getRelatedArticleItems } from "@/features/artikel/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getArticleItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getArticleBySlug(slug);

  if (!item) {
    return { title: "Artikel — Arya Dwi Putra" };
  }

  return {
    title: `${item.title} — Artikel — Arya Dwi Putra`,
    description: item.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const item = getArticleBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedArticleItems(item.slug, 3);

  return (
    <>
      <ReadingProgress />
      <main className="bg-white">
        <ArticleHeroSection item={item} />
        <ArticleContentSection item={item} />
        <ArticleBottomCTASection relatedItems={relatedItems} />
      </main>
    </>
  );
}
