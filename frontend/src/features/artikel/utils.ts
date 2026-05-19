import { articleFilters, articleItems } from "@/features/artikel/data";
import type { ArticleFilterKey } from "@/features/artikel/types";

export function getArticleItems() {
  return articleItems;
}

export function getArticleFilters() {
  return articleFilters;
}

export function getArticleBySlug(slug: string) {
  return articleItems.find((item) => item.slug === slug);
}

export function getFilteredArticleItems(filter: ArticleFilterKey, search = "") {
  const searchValue = search.trim().toLowerCase();

  return articleItems.filter((item) => {
    const matchesFilter = filter === "all" || item.categories.includes(filter);
    const haystack = `${item.title} ${item.summary} ${item.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !searchValue || haystack.includes(searchValue);

    return matchesFilter && matchesSearch;
  });
}

export function getRelatedArticleItems(currentSlug: string, limit = 3) {
  return articleItems.filter((item) => item.slug !== currentSlug).slice(0, limit);
}
