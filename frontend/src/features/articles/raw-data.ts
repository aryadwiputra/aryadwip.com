import "server-only";

import type { RawArticle, RawCategory } from "@/features/articles/types";
import { extractInsertValues, getSqlDump, mapRows, type SqlValue } from "@/lib/sql-dump";

const sql = getSqlDump();

const articleInsert = extractInsertValues(sql, "articles");
const categoryInsert = extractInsertValues(sql, "categories");

export const rawArticles: RawArticle[] = mapRows<Record<string, SqlValue>>(articleInsert.columns, articleInsert.rows)
  .map((item) => ({
    id: Number(item.id),
    userId: item.user_id ? Number(item.user_id) : null,
    categoryId: item.category_id ? Number(item.category_id) : null,
    title: String(item.title ?? ""),
    slug: String(item.slug ?? ""),
    excerpt: item.excerpt ? String(item.excerpt) : null,
    content: item.content ? String(item.content) : null,
    featuredImage: item.featured_image ? String(item.featured_image) : null,
    status: String(item.status ?? "draft"),
    isFeatured: Boolean(Number(item.is_featured ?? 0)),
    publishedAt: item.published_at ? String(item.published_at) : null,
    metaTitle: item.meta_title ? String(item.meta_title) : null,
    metaDescription: item.meta_description ? String(item.meta_description) : null,
    createdAt: item.created_at ? String(item.created_at) : null,
    updatedAt: item.updated_at ? String(item.updated_at) : null,
  }))
  .filter((item) => item.status === "published");

export const rawCategories: RawCategory[] = mapRows<Record<string, SqlValue>>(categoryInsert.columns, categoryInsert.rows)
  .map((item) => ({
    id: Number(item.id),
    name: String(item.name ?? ""),
    slug: String(item.slug ?? ""),
    description: item.description ? String(item.description) : null,
    parentId: item.parent_id ? Number(item.parent_id) : null,
    createdAt: item.created_at ? String(item.created_at) : null,
    updatedAt: item.updated_at ? String(item.updated_at) : null,
  }));
