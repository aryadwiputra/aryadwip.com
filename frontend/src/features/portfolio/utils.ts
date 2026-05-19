import { portfolioFilters, portfolioItems } from "@/features/portfolio/data";
import type { PortfolioFilterKey } from "@/features/portfolio/types";

export function getPortfolioItems() {
  return portfolioItems;
}

export function getPortfolioFilters() {
  return portfolioFilters;
}

export function getFeaturedPortfolioItems(limit = 6) {
  return portfolioItems.slice(0, limit);
}

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getFilteredPortfolioItems(filter: PortfolioFilterKey) {
  if (filter === "all") {
    return portfolioItems;
  }

  return portfolioItems.filter((item) => item.categories.includes(filter));
}

export function getAdjacentPortfolioItems(slug: string) {
  const currentIndex = portfolioItems.findIndex((item) => item.slug === slug);

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  const previous = currentIndex > 0 ? portfolioItems[currentIndex - 1] : portfolioItems[portfolioItems.length - 1];
  const next = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : portfolioItems[0];

  return { previous, next };
}
