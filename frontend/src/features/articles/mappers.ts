import type { ArticleFilterKey, ArticleItem, RawArticle, RawCategory } from "@/features/articles/types";

const articleAccentMap: Record<string, { badge: string; hover: string; filter: ArticleFilterKey; heroLabel: string }> = {
  laravel: {
    badge: "text-accent-purple bg-accent-purple/5",
    hover: "group-hover:text-accent-purple",
    filter: "laravel",
    heroLabel: "Arsitektur Laravel",
  },
  react: {
    badge: "text-accent-blue bg-accent-blue/5",
    hover: "group-hover:text-accent-blue",
    filter: "frontend",
    heroLabel: "Pengembangan React",
  },
  vuejs: {
    badge: "text-accent-green bg-accent-green/5",
    hover: "group-hover:text-accent-green",
    filter: "frontend",
    heroLabel: "Pengembangan Frontend",
  },
  database: {
    badge: "text-accent-orange bg-accent-orange/5",
    hover: "group-hover:text-accent-orange",
    filter: "database",
    heroLabel: "Rekayasa Database",
  },
  career: {
    badge: "text-accent-pink bg-accent-pink/5",
    hover: "group-hover:text-accent-pink",
    filter: "career",
    heroLabel: "Catatan Karier",
  },
};

function normalizeContent(content: string | null) {
  return (content ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatDate(dateString: string | null) {
  if (!dateString) {
    return { date: "Tanpa tanggal", dateIso: "" };
  }

  const date = new Date(dateString.replace(" ", "T") + ".000Z");

  return {
    date: new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date),
    dateIso: date.toISOString(),
  };
}

function estimateReadingTime(content: string) {
  const words = content.replace(/[#*_`>-]/g, " ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min baca`;
}

function deriveTags(article: RawArticle, category: RawCategory | undefined) {
  const tags = new Set<string>();

  if (category) {
    tags.add(category.name);
  }

  if (/laravel/i.test(article.title)) tags.add("Laravel");
  if (/react/i.test(article.title)) tags.add("React");
  if (/vue/i.test(article.title)) tags.add("Vue.js");
  if (/mysql|query|database/i.test(article.title)) tags.add("Database");
  if (/codex|prompt/i.test(article.title)) tags.add("Workflow AI");
  if (/zustand/i.test(article.title)) tags.add("Manajemen State");

  return Array.from(tags).slice(0, 3);
}

function resolveFramework(article: RawArticle, category: RawCategory | undefined) {
  const source = `${article.title} ${article.excerpt ?? ""}`.toLowerCase();

  if (source.includes("laravel")) return "Laravel";
  if (source.includes("react")) return "React";
  if (source.includes("vue")) return "Vue.js";
  if (source.includes("mysql") || source.includes("database")) return "MySQL / Database";

  return category?.name ?? "Rekayasa Perangkat Lunak";
}

function resolveContentLevel(article: RawArticle) {
  const content = `${article.title} ${article.excerpt ?? ""}`.toLowerCase();

  if (content.includes("tips") || content.includes("prompt")) {
    return {
      label: "Praktis",
      className: "text-accent-green bg-accent-green/5",
    };
  }

  return {
    label: "Lanjutan",
    className: "text-accent-purple bg-accent-purple/5",
  };
}

export function mapRawArticleToItem(article: RawArticle, category: RawCategory | undefined): ArticleItem {
  const accent = articleAccentMap[category?.slug ?? ""] ?? {
    badge: "text-accent-purple bg-accent-purple/5",
    hover: "group-hover:text-accent-purple",
    filter: "architecture" as const,
    heroLabel: category?.name ?? "Catatan Teknis",
  };
  const content = normalizeContent(article.content);
  const { date, dateIso } = formatDate(article.publishedAt ?? article.createdAt);
  const readingTime = estimateReadingTime(content || article.excerpt || article.title);
  const contentLevel = resolveContentLevel(article);
  const summary = (article.excerpt ?? content.split("\n").find(Boolean) ?? article.title).trim();

  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    summary,
    date,
    dateIso,
    readingTime,
    categoryLabel: category?.name ?? "Umum",
    categorySlug: category?.slug ?? "umum",
    categoryBadgeClassName: accent.badge,
    hoverAccentClassName: accent.hover,
    categories: [accent.filter],
    tags: deriveTags(article, category),
    heroLabel: accent.heroLabel,
    image: article.featuredImage,
    imageAlt: article.title,
    seoTitle: article.metaTitle ?? article.title,
    seoDescription: article.metaDescription ?? summary,
    isFeatured: article.isFeatured,
    detail: {
      standfirst: summary,
      featureGraphicLabel: `Ilustrasi artikel: ${article.title}`,
      content,
      publicationTitle: "Detail Publikasi",
      publicationInfo: {
        primaryTopic: category?.name ?? "Rekayasa Perangkat Lunak",
        framework: resolveFramework(article, category),
        contentLevel: contentLevel.label,
        contentLevelClassName: contentLevel.className,
      },
      shareTitle: "Bagikan Artikel",
      relatedSectionLabel: "Kelanjutan Bacaan",
      relatedSectionTitle: "Artikel teknis terkait lainnya",
    },
  };
}
