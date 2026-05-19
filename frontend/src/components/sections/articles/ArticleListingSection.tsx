import { ArticleListingClient } from "@/features/articles/components/ArticleListingClient";
import { getArticleFilters, getArticleItems } from "@/features/articles/utils";

export function ArticleListingSection() {
  const items = getArticleItems();
  const filters = getArticleFilters();

  return <ArticleListingClient items={items} filters={filters} />;
}
