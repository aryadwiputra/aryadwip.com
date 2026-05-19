export type RawArticle = {
  id: number;
  userId: number | null;
  categoryId: number | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featuredImage: string | null;
  status: string;
  isFeatured: boolean;
  publishedAt: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type RawCategory = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  parentId: number | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ArticleFilterKey = "all" | "laravel" | "database" | "architecture" | "frontend" | "career";

export type ArticleFilter = {
  key: ArticleFilterKey;
  label: string;
};

export type ArticlePublicationInfo = {
  primaryTopic: string;
  framework: string;
  contentLevel: string;
  contentLevelClassName: string;
};

export type ArticleDetail = {
  standfirst: string;
  featureGraphicLabel: string;
  content: string;
  publicationTitle: string;
  publicationInfo: ArticlePublicationInfo;
  shareTitle: string;
  relatedSectionLabel: string;
  relatedSectionTitle: string;
};

export type ArticleItem = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  date: string;
  dateIso: string;
  readingTime: string;
  categoryLabel: string;
  categorySlug: string;
  categoryBadgeClassName: string;
  hoverAccentClassName: string;
  categories: ArticleFilterKey[];
  tags: string[];
  heroLabel: string;
  image: string | null;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  isFeatured: boolean;
  detail: ArticleDetail;
};
