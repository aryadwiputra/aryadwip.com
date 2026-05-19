import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PortfolioDetailContentSection,
  PortfolioDetailHeroSection,
  PortfolioDetailPagerSection,
} from "@/components/sections/portfolio/PortfolioDetailSections";
import {
  getAdjacentPortfolioItems,
  getPortfolioBySlug,
  getPortfolioItems,
} from "@/features/portfolio/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPortfolioItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    return { title: "Portfolio — Arya Dwi Putra" };
  }

  return {
    title: `${item.title} — Portfolio — Arya Dwi Putra`,
    description: item.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    notFound();
  }

  const { previous, next } = getAdjacentPortfolioItems(item.slug);

  return (
    <main>
      <PortfolioDetailHeroSection item={item} />
      <PortfolioDetailContentSection item={item} />
      <PortfolioDetailPagerSection
        previousHref={previous ? `/portfolio/${previous.slug}` : "/portfolio"}
        nextHref={next ? `/portfolio/${next.slug}` : "/portfolio"}
      />
    </main>
  );
}
