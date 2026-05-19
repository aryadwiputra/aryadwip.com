import fs from "node:fs";
import path from "node:path";

import type {
  PortfolioFilter,
  PortfolioFilterKey,
  PortfolioGalleryItem,
  PortfolioItem,
  PortfolioSidebarPoint,
  RawClient,
  RawPortfolio,
  RawPortfolioGallery,
} from "@/features/portfolio/types";

const portfolioFilters: PortfolioFilter[] = [
  { key: "all", label: "Semua Proyek" },
  { key: "laravel", label: "Ekosistem Laravel" },
  { key: "fullstack", label: "Fullstack (Vue/React)" },
  { key: "dashboard", label: "Dashboard & Sistem Internal" },
  { key: "integration", label: "Integrasi Sistem" },
];

const accentMap: Record<
  Exclude<PortfolioFilterKey, "all">,
  { teaserLabelClassName: string; hoverAccentClassName: string; caseStudyLabelClassName: string; bulletClassName: string }
> = {
  laravel: {
    teaserLabelClassName: "text-accent-green bg-accent-green/5",
    hoverAccentClassName: "group-hover:text-accent-green",
    caseStudyLabelClassName: "text-accent-green bg-accent-green/5",
    bulletClassName: "text-accent-green",
  },
  fullstack: {
    teaserLabelClassName: "text-accent-purple bg-accent-purple/5",
    hoverAccentClassName: "group-hover:text-accent-purple",
    caseStudyLabelClassName: "text-accent-purple bg-accent-purple/5",
    bulletClassName: "text-accent-purple",
  },
  dashboard: {
    teaserLabelClassName: "text-accent-blue bg-accent-blue/5",
    hoverAccentClassName: "group-hover:text-accent-blue",
    caseStudyLabelClassName: "text-accent-blue bg-accent-blue/5",
    bulletClassName: "text-accent-blue",
  },
  integration: {
    teaserLabelClassName: "text-accent-orange bg-accent-orange/5",
    hoverAccentClassName: "group-hover:text-accent-orange",
    caseStudyLabelClassName: "text-accent-orange bg-accent-orange/5",
    bulletClassName: "text-accent-orange",
  },
};

function parseTechnologies(value: string | null) {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as string[];
    return parsed.filter(Boolean);
  } catch {
    return value
      .replace(/^\[|\]$/g, "")
      .split(",")
      .map((item) => item.replaceAll('"', "").trim())
      .filter(Boolean);
  }
}

function stripRichText(value: string) {
  return value
    .replace(/##\s+Daftar Isi[\s\S]*?(?=\n##\s+|$)/i, "")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li>\s*<li>/gi, "\n- ")
    .replace(/<li>/gi, "- ")
    .replace(/<\/?ul>/gi, "\n")
    .replace(/<\/?[^>]+>/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function toPublicAsset(relativePath: string | null) {
  if (!relativePath) {
    return null;
  }

  const normalizedPath = relativePath.replace(/^\/+/, "");
  const absolutePath = path.join(process.cwd(), "public", normalizedPath);

  if (!fs.existsSync(absolutePath)) {
    return null;
  }

  return `/${normalizedPath}`;
}

function formatYear(startDate: string | null, endDate: string | null) {
  const source = endDate ?? startDate;
  return source ? new Date(source).getFullYear().toString() : "N/A";
}

function formatDuration(startDate: string | null, endDate: string | null) {
  if (!startDate && !endDate) {
    return "Durasi belum tercatat";
  }

  if (!startDate || !endDate) {
    const value = startDate ?? endDate;
    if (!value) {
      return "Durasi belum tercatat";
    }

    return new Intl.DateTimeFormat("id-ID", { month: "short", year: "numeric" }).format(new Date(value));
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const months = Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1);

  if (months < 12) {
    return `${months} bulan`;
  }

  const years = Math.floor(months / 12);
  const remainder = months % 12;
  return remainder === 0 ? `${years} tahun` : `${years} tahun ${remainder} bulan`;
}

function deriveCategories(portfolio: RawPortfolio, stack: string[]) {
  const haystack = `${portfolio.title} ${portfolio.description ?? ""} ${portfolio.content ?? ""} ${stack.join(" ")}`.toLowerCase();
  const categories = new Set<PortfolioFilterKey>();

  if (stack.some((item) => item.toLowerCase().includes("laravel"))) {
    categories.add("laravel");
  }

  if (stack.some((item) => ["vue.js", "vue", "react", "next.js", "inertiajs"].includes(item.toLowerCase()))) {
    categories.add("fullstack");
  }

  if (haystack.includes("sistem") || haystack.includes("dashboard") || haystack.includes("approval") || haystack.includes("management")) {
    categories.add("dashboard");
  }

  if (haystack.includes("integrasi") || haystack.includes("payment") || haystack.includes("gateway") || haystack.includes("api") || haystack.includes("xendit")) {
    categories.add("integration");
  }

  if (categories.size === 0) {
    categories.add("dashboard");
  }

  return Array.from(categories);
}

function derivePrimaryCategory(categories: PortfolioFilterKey[]) {
  return categories.find((item) => item !== "all") ?? "dashboard";
}

function deriveTeaserLabel(portfolio: RawPortfolio, client: RawClient | undefined, categories: PortfolioFilterKey[]) {
  const haystack = `${portfolio.title} ${portfolio.description ?? ""}`.toLowerCase();

  if (client?.name) {
    return "Proyek Klien";
  }

  if (haystack.includes("e-commerce")) {
    return "Platform E-Commerce";
  }

  if (categories.includes("integration")) {
    return "Integrasi Sistem";
  }

  if (categories.includes("dashboard")) {
    return "Sistem Operasional";
  }

  return "Produk Digital";
}

function deriveDomainScope(portfolio: RawPortfolio, client: RawClient | undefined, categories: PortfolioFilterKey[]) {
  if (client?.description) {
    return client.description;
  }

  if (categories.includes("integration")) {
    return "Integrasi proses bisnis, alur transaksi, dan koneksi antarsistem.";
  }

  if (categories.includes("dashboard")) {
    return "Pengelolaan data operasional, approval workflow, dan pelaporan internal.";
  }

  return portfolio.description ?? "Implementasi produk digital berbasis kebutuhan bisnis riil.";
}

function buildSidebarPoints(
  portfolio: RawPortfolio,
  client: RawClient | undefined,
  categories: PortfolioFilterKey[],
  stack: string[],
) {
  const bulletClassName = accentMap[derivePrimaryCategory(categories)].bulletClassName;
  const points: PortfolioSidebarPoint[] = [];

  if (client?.name) {
    points.push({ bulletClassName, title: "Klien:", description: client.name });
  }

  points.push({
    bulletClassName,
    title: "Periode:",
    description: formatDuration(portfolio.startDate, portfolio.endDate),
  });

  if (stack.length > 0) {
    points.push({ bulletClassName, title: "Stack teknis:", description: stack.join(", ") });
  }

  if (portfolio.demoUrl) {
    points.push({ bulletClassName, title: "Demo:", description: portfolio.demoUrl });
  }

  if (portfolio.repoUrl) {
    points.push({ bulletClassName, title: "Repository:", description: portfolio.repoUrl });
  }

  return points;
}

function buildGalleryItems(portfolio: RawPortfolio, galleries: RawPortfolioGallery[]): PortfolioGalleryItem[] {
  const featured = toPublicAsset(portfolio.featuredImage);
  const items = galleries.map((gallery, index) => ({
    src: toPublicAsset(gallery.image),
    alt: gallery.caption || `${portfolio.title} screenshot ${index + 1}`,
    label: gallery.caption || `Galeri ${index + 1}`,
  }));

  return featured ? [{ src: featured, alt: portfolio.title, label: "Tampilan utama" }, ...items] : items;
}

function normalizeContent(portfolio: RawPortfolio) {
  return stripRichText(portfolio.content ?? portfolio.description ?? "");
}

function summarize(portfolio: RawPortfolio) {
  const source = stripRichText(portfolio.description ?? portfolio.content ?? "");
  return source.length > 180 ? `${source.slice(0, 177).trimEnd()}...` : source;
}

export function getPortfolioFiltersDefinition() {
  return portfolioFilters;
}

export function mapRawPortfolioToItem(
  portfolio: RawPortfolio,
  client: RawClient | undefined,
  galleries: RawPortfolioGallery[],
): PortfolioItem {
  const stack = parseTechnologies(portfolio.technologies);
  const categories = deriveCategories(portfolio, stack);
  const primaryCategory = derivePrimaryCategory(categories);
  const accent = accentMap[primaryCategory];
  const galleryItems = buildGalleryItems(portfolio, galleries);
  const summary = summarize(portfolio);

  return {
    id: portfolio.id,
    slug: portfolio.slug,
    title: portfolio.title,
    summary,
    year: formatYear(portfolio.startDate, portfolio.endDate),
    teaserLabel: deriveTeaserLabel(portfolio, client, categories),
    teaserLabelClassName: accent.teaserLabelClassName,
    hoverAccentClassName: accent.hoverAccentClassName,
    image: galleryItems[0]?.src ?? toPublicAsset(portfolio.featuredImage),
    imageAlt: portfolio.title,
    stack,
    categories,
    isFeatured: portfolio.isFeatured,
    sortOrder: portfolio.order,
    detail: {
      caseStudyLabel: client ? "Proyek Klien" : "Proyek Mandiri",
      caseStudyLabelClassName: accent.caseStudyLabelClassName,
      title: portfolio.title,
      description: portfolio.description ?? summary,
      infoTitle: "Ringkasan Proyek",
      info: {
        role: stack.some((item) => item.toLowerCase().includes("laravel")) ? "Laravel / Full-Stack Developer" : "Full-Stack Developer",
        duration: formatDuration(portfolio.startDate, portfolio.endDate),
        techStackSummary: stack.length > 0 ? stack.join(" · ") : "Stack teknis belum tercatat",
        domainScope: deriveDomainScope(portfolio, client, categories),
      },
      contentTitle: "Detail Implementasi",
      content: normalizeContent(portfolio),
      galleryTitle: "Galeri Proyek",
      galleryItems,
      sidebarTitle: "Konteks Implementasi",
      sidebarDescription:
        "Bagian ini disusun dari data portfolio yang tersedia di database lama, lalu dirapikan agar tetap enak dibaca di frontend Next.js.",
      sidebarPoints: buildSidebarPoints(portfolio, client, categories, stack),
    },
  };
}
