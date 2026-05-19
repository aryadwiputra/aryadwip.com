import "server-only";

import type { RawClient, RawPortfolio, RawPortfolioGallery } from "@/features/portfolio/types";
import { extractInsertValues, getSqlDump, mapRows, type SqlValue } from "@/lib/sql-dump";

const sql = getSqlDump();

const portfolioInsert = extractInsertValues(sql, "portfolios");
const portfolioGalleryInsert = extractInsertValues(sql, "portfolio_galleries");
const clientInsert = extractInsertValues(sql, "clients");

export const rawPortfolios: RawPortfolio[] = mapRows<Record<string, SqlValue>>(portfolioInsert.columns, portfolioInsert.rows)
  .map((item) => ({
    id: Number(item.id),
    clientId: item.client_id ? Number(item.client_id) : null,
    title: String(item.title ?? ""),
    slug: String(item.slug ?? ""),
    description: item.description ? String(item.description) : null,
    content: item.content ? String(item.content) : null,
    featuredImage: item.featured_image ? String(item.featured_image) : null,
    demoUrl: item.demo_url ? String(item.demo_url) : null,
    repoUrl: item.repo_url ? String(item.repo_url) : null,
    technologies: item.technologies ? String(item.technologies) : null,
    startDate: item.start_date ? String(item.start_date) : null,
    endDate: item.end_date ? String(item.end_date) : null,
    status: String(item.status ?? "draft"),
    isFeatured: Boolean(Number(item.is_featured ?? 0)),
    order: Number(item.order ?? 0),
    createdAt: item.created_at ? String(item.created_at) : null,
    updatedAt: item.updated_at ? String(item.updated_at) : null,
  }))
  .filter((item) => item.status === "published")
  .sort((left, right) => left.order - right.order || left.id - right.id);

export const rawPortfolioGalleries: RawPortfolioGallery[] = mapRows<Record<string, SqlValue>>(
  portfolioGalleryInsert.columns,
  portfolioGalleryInsert.rows,
)
  .map((item) => ({
    id: Number(item.id),
    portfolioId: Number(item.portfolio_id),
    image: String(item.image ?? ""),
    caption: item.caption ? String(item.caption) : null,
    order: Number(item.order ?? 0),
    createdAt: item.created_at ? String(item.created_at) : null,
    updatedAt: item.updated_at ? String(item.updated_at) : null,
  }))
  .sort((left, right) => left.order - right.order || left.id - right.id);

export const rawClients: RawClient[] = mapRows<Record<string, SqlValue>>(clientInsert.columns, clientInsert.rows).map((item) => ({
  id: Number(item.id),
  name: String(item.name ?? ""),
  slug: String(item.slug ?? ""),
  logo: item.logo ? String(item.logo) : null,
  website: item.website ? String(item.website) : null,
  description: item.description ? String(item.description) : null,
  isFeatured: Boolean(Number(item.is_featured ?? 0)),
  order: Number(item.order ?? 0),
  createdAt: item.created_at ? String(item.created_at) : null,
  updatedAt: item.updated_at ? String(item.updated_at) : null,
}));
