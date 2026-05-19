import "server-only";

import { mapRawArticleToItem } from "@/features/articles/mappers";
import { rawArticles, rawCategories } from "@/features/articles/raw-data";
import type { ArticleFilter, ArticleItem } from "@/features/articles/types";

export const articleFilters: ArticleFilter[] = [
  { key: "all", label: "Semua" },
  { key: "laravel", label: "Laravel" },
  { key: "frontend", label: "Frontend" },
  { key: "database", label: "Database" },
  { key: "architecture", label: "Arsitektur" },
  { key: "career", label: "Karier" },
];

function buildArticleItems() {
  return rawArticles
    .map((article) => mapRawArticleToItem(article, rawCategories.find((category) => category.id === article.categoryId)))
    .sort((left, right) => right.dateIso.localeCompare(left.dateIso));
}

export function getArticleItems(): ArticleItem[] {
  return buildArticleItems();
}

export function getArticleFilters() {
  return articleFilters;
}

export function getFeaturedArticles(limit = 3) {
  const items = buildArticleItems();
  const featured = items.filter((item) => item.isFeatured);
  return (featured.length ? featured : items).slice(0, limit);
}

export function getArticleBySlug(slug: string) {
  return buildArticleItems().find((item) => item.slug === slug);
}

export function getRelatedArticleItems(currentSlug: string, limit = 3) {
  const items = buildArticleItems();
  const current = items.find((item) => item.slug === currentSlug);

  if (!current) {
    return items.slice(0, limit);
  }

  const sameCategory = items.filter(
    (item) => item.slug !== currentSlug && item.categorySlug === current.categorySlug,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const fallback = items.filter((item) => item.slug !== currentSlug && item.categorySlug !== current.categorySlug);
  return [...sameCategory, ...fallback].slice(0, limit);
}
