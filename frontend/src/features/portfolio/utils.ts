import "server-only";

import { getPortfolioFiltersDefinition, mapRawPortfolioToItem } from "@/features/portfolio/mappers";
import { getMarkdownPortfolioItems } from "@/features/portfolio/markdown-data";
import { rawClients, rawPortfolioGalleries, rawPortfolios } from "@/features/portfolio/raw-data";
import type { PortfolioFilterKey, RawPortfolioGallery } from "@/features/portfolio/types";

const clientById = new Map(rawClients.map((client) => [client.id, client]));
const galleriesByPortfolioId = new Map<number, RawPortfolioGallery[]>();

for (const gallery of rawPortfolioGalleries) {
  const items = galleriesByPortfolioId.get(gallery.portfolioId) ?? [];
  items.push(gallery);
  galleriesByPortfolioId.set(gallery.portfolioId, items);
}

const sqlPortfolioItems = rawPortfolios.map((portfolio) =>
  mapRawPortfolioToItem(portfolio, portfolio.clientId ? clientById.get(portfolio.clientId) : undefined, galleriesByPortfolioId.get(portfolio.id) ?? []),
);

const markdownPortfolioItems = getMarkdownPortfolioItems();

const portfolioItems = [...markdownPortfolioItems, ...sqlPortfolioItems].sort(
  (left, right) => left.sortOrder - right.sortOrder || left.title.localeCompare(right.title),
);

const portfolioListingItems = [...markdownPortfolioItems].sort(
  (left, right) => left.sortOrder - right.sortOrder || left.title.localeCompare(right.title),
);

export function getPortfolioItems() {
  return portfolioItems;
}

export function getPortfolioListingItems() {
  return portfolioListingItems;
}

export function getPortfolioFilters() {
  return getPortfolioFiltersDefinition();
}

export function getFeaturedPortfolioItems(limit = 6) {
  return portfolioListingItems.filter((item) => item.isFeatured).slice(0, limit);
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
