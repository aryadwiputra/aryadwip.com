import "server-only";

import fs from "node:fs";
import path from "node:path";

import type { PortfolioItem, PortfolioFilterKey, PortfolioGalleryItem, PortfolioSidebarPoint } from "@/features/portfolio/types";

const PROJECTS_DIR = path.join(process.cwd(), "templates", "projects");

type MarkdownPortfolioEntry = {
  title: string;
  slug: string;
  summary: string;
  clientName: string;
  clientWebsite: string;
  clientDescription: string;
  caseStudyLabel: string;
  role: string;
  techStack: string[];
  categories: PortfolioFilterKey[];
  teaserLabel: string;
  featuredImage: string;
  featuredImageAlt: string;
  demoUrl: string;
  repoUrl: string;
  startDate: string;
  endDate: string;
  isFeatured: boolean;
  sortOrder: number;
  status: string;
  sidebarTitle: string;
  sidebarDescription: string;
  content: string;
  gallery: Array<{ src: string; alt: string; label: string }>;
  sidebarPoints: Array<{ title: string; description: string }>;
};

const accentMap: Record<Exclude<PortfolioFilterKey, "all">, { teaserLabelClassName: string; hoverAccentClassName: string; caseStudyLabelClassName: string; bulletClassName: string }> = {
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

const supportedCategories: PortfolioFilterKey[] = ["laravel", "fullstack", "dashboard", "integration"];

function normalizeCategories(value: unknown): PortfolioFilterKey[] {
  if (!Array.isArray(value)) {
    return ["dashboard"];
  }

  const normalized = value
    .map((item) => String(item).trim().toLowerCase())
    .flatMap<PortfolioFilterKey>((item) => {
      if (supportedCategories.includes(item as PortfolioFilterKey)) {
        return [item as PortfolioFilterKey];
      }

      if (["ticketing", "qr-code", "pdf"].includes(item)) {
        return ["integration"];
      }

      return [];
    });

  return normalized.length > 0 ? Array.from(new Set(normalized)) : ["dashboard"];
}

function formatYear(startDate: string, endDate: string) {
  const source = endDate || startDate;
  return source ? new Date(source).getFullYear().toString() : "N/A";
}

function formatDuration(startDate: string, endDate: string) {
  if (!startDate || !endDate) return "Durasi belum tercatat";
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months = Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1);
  if (months < 12) return `${months} bulan`;
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  return remainder === 0 ? `${years} tahun` : `${years} tahun ${remainder} bulan`;
}

function stripQuotes(value: string) {
  return value.replace(/^"|"$/g, "").trim();
}

function parseSimpleYamlBlock(block: string) {
  const lines = block.split("\n");
  const result: Record<string, unknown> = {};
  let currentKey: string | null = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, "  ");
    if (!line.trim()) continue;

    const keyMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (keyMatch && !line.startsWith("  - ")) {
      const [, key, rawValue] = keyMatch;
      const value = rawValue.trim();
      currentKey = key;

      if (!value) {
        result[key] = [];
      } else if (value === "true" || value === "false") {
        result[key] = value === "true";
      } else if (/^\d+$/.test(value)) {
        result[key] = Number(value);
      } else {
        result[key] = stripQuotes(value);
      }

      continue;
    }

    if (line.startsWith("  - ") && currentKey) {
      if (!Array.isArray(result[currentKey])) {
        result[currentKey] = [];
      }
      (result[currentKey] as unknown[]).push(stripQuotes(line.replace(/^  - /, "")));
    }
  }

  return result;
}

function parseFrontmatterObjectList(block: string, rootKey: string) {
  const lines = block.split("\n");
  const items: Array<Record<string, string>> = [];
  let current: Record<string, string> | null = null;
  let inRoot = false;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, "  ");
    if (!line.trim()) continue;

    if (line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/) && !line.startsWith("  - ") && line.trim() !== `${rootKey}:`) {
      if (inRoot) {
        break;
      }
    }

    if (line.trim() === `${rootKey}:`) {
      inRoot = true;
      continue;
    }

    if (!inRoot) continue;

    if (line.startsWith("  - ")) {
      current = {};
      items.push(current);
      const remainder = line.replace(/^  - /, "");
      if (remainder) {
        const [key, ...rest] = remainder.split(":");
        current[key.trim()] = stripQuotes(rest.join(":").trim());
      }
      continue;
    }

    if (line.startsWith("    ") && current) {
      const [key, ...rest] = line.trim().split(":");
      current[key.trim()] = stripQuotes(rest.join(":").trim());
    }
  }

  return items;
}

function parseObjectListBlock(block: string, rootKey: string) {
  const lines = block.split("\n");
  const items: Array<Record<string, string>> = [];
  let current: Record<string, string> | null = null;
  let inRoot = false;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, "  ");
    if (!line.trim()) continue;

    if (line.trim() === `${rootKey}:`) {
      inRoot = true;
      continue;
    }

    if (!inRoot) continue;

    if (line.startsWith("  - ")) {
      current = {};
      items.push(current);
      const remainder = line.replace(/^  - /, "");
      if (remainder) {
        const [key, ...rest] = remainder.split(":");
        current[key.trim()] = stripQuotes(rest.join(":").trim());
      }
      continue;
    }

    if (line.startsWith("    ") && current) {
      const [key, ...rest] = line.trim().split(":");
      current[key.trim()] = stripQuotes(rest.join(":").trim());
    }
  }

  return items;
}

function extractFrontmatterBlock(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, "\n");

  if (!normalized.startsWith("---\n")) {
    return "";
  }

  const endIndex = normalized.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return "";
  }

  return normalized.slice(4, endIndex).trim();
}

function extractYamlCodeBlock(markdown: string, heading: string) {
  const headingMarker = `## ${heading}`;
  const headingIndex = markdown.indexOf(headingMarker);

  if (headingIndex === -1) {
    return "";
  }

  const blockStart = markdown.indexOf("```yaml", headingIndex);
  if (blockStart === -1) {
    return "";
  }

  const contentStart = blockStart + "```yaml".length;
  const blockEnd = markdown.indexOf("```", contentStart);
  if (blockEnd === -1) {
    return "";
  }

  return markdown.slice(contentStart, blockEnd).trim();
}

function extractLeadingYamlCodeBlock(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, "\n").trimStart();

  if (!normalized.startsWith("```yaml\n")) {
    return "";
  }

  const contentStart = "```yaml\n".length;
  const blockEnd = normalized.indexOf("\n```", contentStart);
  if (blockEnd === -1) {
    return "";
  }

  return normalized.slice(contentStart, blockEnd).trim();
}

function extractContent(markdown: string) {
  const start = markdown.indexOf("## Latar Belakang");

  if (start === -1) {
    return "";
  }

  const galleryHeadingIndex = markdown.indexOf("\n## Gallery", start);
  const end = galleryHeadingIndex === -1 ? markdown.length : galleryHeadingIndex;

  return markdown.slice(start, end).trim();
}

function resolvePosImages(entry: MarkdownPortfolioEntry) {
  if (entry.slug !== "point-of-sales-operasional-retail") {
    return entry;
  }

  return {
    ...entry,
    featuredImage: "/images/point-of-sales/pos-thumbnail.png",
    featuredImageAlt: entry.featuredImageAlt || "Dashboard aplikasi point of sales dan operasional retail",
    gallery: [
      {
        src: "/images/point-of-sales/pos-1.png",
        alt: "Dashboard overview aplikasi point of sales",
        label: "Dashboard utama dan ringkasan operasional",
      },
      {
        src: "/images/point-of-sales/pos-2.png",
        alt: "Halaman transaksi kasir dengan cart dan checkout",
        label: "Modul POS dan checkout kasir",
      },
    ],
  };
}

function resolveHattiImages(entry: MarkdownPortfolioEntry) {
  if (entry.slug !== "hatti-website-keanggotaan-dan-event") {
    return entry;
  }

  return {
    ...entry,
    featuredImage: "/images/hatti/hatti-1.png",
    featuredImageAlt: entry.featuredImageAlt || "Halaman publik dan dashboard admin HATTI",
    gallery: [
      {
        src: "/images/hatti/hatti-1.png",
        alt: "Landing page dan navigasi publik HATTI",
        label: "Landing page dan navigasi publik",
      },
      {
        src: "/images/hatti/hatti-2.png",
        alt: "Dashboard admin dan pengelolaan anggota HATTI",
        label: "Dashboard admin dan data anggota",
      },
      {
        src: "/images/hatti/hatti-3.png",
        alt: "Modul event dan registrasi HATTI",
        label: "Event, pricing, dan registrasi",
      },
      {
        src: "/images/hatti/hatti-4.png",
        alt: "CMS dan pengelolaan konten organisasi HATTI",
        label: "CMS dan konten organisasi",
      },
    ],
  };
}

function resolveProjectImages(entry: MarkdownPortfolioEntry) {
  if (entry.slug === "plannify") {
    return {
      ...entry,
      featuredImage: "/images/plannify/plannify-1 (2).png",
      featuredImageAlt: entry.featuredImageAlt || "Tampilan dashboard dan workspace board aplikasi Plannify",
      gallery: [
        {
          src: "/images/plannify/plannify-1 (1).png",
          alt: "Dashboard aplikasi Plannify dengan statistik dan grafik produktivitas",
          label: "Dashboard ringkasan dan productivity chart",
        },
        {
          src: "/images/plannify/plannify-1 (2).png",
          alt: "Workspace board Plannify dengan daftar card per status",
          label: "Board workspace dengan filter dan grouping status",
        },
        {
          src: "/images/plannify/plannify-1 (3).png",
          alt: "Detail card Plannify berisi checklist, assignee, lampiran, dan komentar",
          label: "Detail card sebagai pusat eksekusi tugas",
        },
        {
          src: "/images/plannify/plannify-1 (4).png",
          alt: "Halaman my tasks pada aplikasi Plannify",
          label: "My tasks dan visibilitas pekerjaan pribadi",
        },
        {
          src: "/images/plannify/plannify-1 (5).png",
          alt: "Manajemen workspace dan anggota di Plannify",
          label: "Manajemen workspace dan anggota",
        },
        {
          src: "/images/plannify/plannify-1 (6).png",
          alt: "User management dan pengaturan akses di Plannify",
          label: "User management dan pengaturan akses",
        },
        {
          src: "/images/plannify/plannify-1 (7).png",
          alt: "Tampilan tambahan board workflow di Plannify",
          label: "Workflow board dan interaksi task",
        },
        {
          src: "/images/plannify/plannify-1 (8).png",
          alt: "Tampilan tambahan dashboard atau workspace di Plannify",
          label: "Tampilan tambahan dashboard/workspace",
        },
      ],
    };
  }

  if (entry.slug === "tickety-platform-penjualan-tiket-event") {
    return {
      ...entry,
      featuredImage: "/images/event-ticketing-app/tickety-1.png",
      featuredImageAlt: entry.featuredImageAlt || "Halaman publik dan dashboard admin aplikasi Tickety",
      gallery: [
        {
          src: "/images/event-ticketing-app/tickety-1.png",
          alt: "Landing page dan katalog event Tickety",
          label: "Landing page dan katalog event",
        },
        {
          src: "/images/event-ticketing-app/tickety-2.png",
          alt: "Alur checkout pembelian tiket Tickety",
          label: "Alur checkout tiket",
        },
        {
          src: "/images/event-ticketing-app/tickety-3.png",
          alt: "Manajemen event di panel admin Tickety",
          label: "Manajemen event di panel admin",
        },
        {
          src: "/images/event-ticketing-app/tickety-4.png",
          alt: "Validasi tiket saat check-in melalui QR di Tickety",
          label: "Validasi tiket saat check-in",
        },
      ],
    };
  }

  if (entry.slug === "website-ppdb-taruna-insani-boarding-school") {
    return {
      ...entry,
      featuredImage: "/images/taruna-insani-boarding-school/tibs-1.png",
      featuredImageAlt: entry.featuredImageAlt || "Dashboard admin dan portal PPDB Taruna Insani Boarding School",
      gallery: [
        {
          src: "/images/taruna-insani-boarding-school/tibs-1.png",
          alt: "Landing page dan konten profil sekolah Taruna Insani",
          label: "Landing page dan konten profil sekolah",
        },
        {
          src: "/images/taruna-insani-boarding-school/tibs-2.png",
          alt: "Dashboard admin untuk konten dan PPDB Taruna Insani",
          label: "Dashboard admin untuk konten dan PPDB",
        },
        {
          src: "/images/taruna-insani-boarding-school/tibs-3.png",
          alt: "Portal wali murid untuk pendaftaran dan monitoring Taruna Insani",
          label: "Portal wali murid untuk pendaftaran dan monitoring",
        },
        {
          src: "/images/taruna-insani-boarding-school/tibs-4.png",
          alt: "Verifikasi pembayaran, dokumen, dan status seleksi Taruna Insani",
          label: "Verifikasi pembayaran, dokumen, dan status seleksi",
        },
        {
          src: "/images/taruna-insani-boarding-school/tibs-5.png",
          alt: "Halaman operasional tambahan PPDB Taruna Insani",
          label: "Halaman operasional tambahan PPDB",
        },
      ],
    };
  }

  if (entry.slug === "asetku-asset-management-platform") {
    return {
      ...entry,
      featuredImage: "/images/sistem-manajemen-aset/ams-1.png",
      featuredImageAlt: entry.featuredImageAlt || "Dashboard Asetku untuk manajemen aset multi-organisasi",
      gallery: [
        {
          src: "/images/sistem-manajemen-aset/ams-1.png",
          alt: "Dashboard operasional dan KPI aset Asetku",
          label: "Dashboard operasional dan KPI aset",
        },
        {
          src: "/images/sistem-manajemen-aset/ams-2.png",
          alt: "Manajemen aset dan pencarian data Asetku",
          label: "Manajemen aset dan pencarian data",
        },
        {
          src: "/images/sistem-manajemen-aset/ams-3.png",
          alt: "Lifecycle aset dan histori audit Asetku",
          label: "Lifecycle aset dan histori audit",
        },
        {
          src: "/images/sistem-manajemen-aset/ams-4.png",
          alt: "QR publik untuk akses cepat detail aset Asetku",
          label: "QR publik untuk akses cepat detail aset",
        },
        {
          src: "/images/sistem-manajemen-aset/ams-5.png",
          alt: "Reporting dan export data aset Asetku",
          label: "Reporting dan export data aset",
        },
        {
          src: "/images/sistem-manajemen-aset/ams-6.png",
          alt: "Pengaturan dan kontrol akses organisasi Asetku",
          label: "Pengaturan dan kontrol akses organisasi",
        },
      ],
    };
  }

  return resolveHattiImages(resolvePosImages(entry));
}

function parseProjectFile(filePath: string): MarkdownPortfolioEntry | null {
  const markdown = fs.readFileSync(filePath, "utf8");
  const frontmatterBlock = extractFrontmatterBlock(markdown) || extractYamlCodeBlock(markdown, "Frontmatter") || extractLeadingYamlCodeBlock(markdown);
  const frontmatter = parseSimpleYamlBlock(frontmatterBlock);
  const gallery = parseObjectListBlock(extractYamlCodeBlock(markdown, "Gallery"), "gallery");
  const sidebarPoints = parseObjectListBlock(extractYamlCodeBlock(markdown, "Sidebar Points"), "sidebar_points");
  const frontmatterGallery = parseFrontmatterObjectList(frontmatterBlock, "gallery");
  const frontmatterSidebarPoints = parseFrontmatterObjectList(frontmatterBlock, "sidebar_points");

  const entry: MarkdownPortfolioEntry = {
    title: String(frontmatter.title ?? ""),
    slug: String(frontmatter.slug ?? ""),
    summary: String(frontmatter.summary ?? ""),
    clientName: String(frontmatter.client_name ?? ""),
    clientWebsite: String(frontmatter.client_website ?? ""),
    clientDescription: String(frontmatter.client_description ?? ""),
    caseStudyLabel: String(frontmatter.case_study_label ?? "Proyek Mandiri"),
    role: String(frontmatter.role ?? "Full-Stack Developer"),
    techStack: Array.isArray(frontmatter.tech_stack) ? (frontmatter.tech_stack as string[]) : [],
    categories: normalizeCategories(frontmatter.categories),
    teaserLabel: String(frontmatter.teaser_label ?? "Produk Digital"),
    featuredImage: String(frontmatter.featured_image ?? ""),
    featuredImageAlt: String(frontmatter.featured_image_alt ?? ""),
    demoUrl: String(frontmatter.demo_url ?? ""),
    repoUrl: String(frontmatter.repo_url ?? ""),
    startDate: String(frontmatter.start_date ?? ""),
    endDate: String(frontmatter.end_date ?? ""),
    isFeatured: Boolean(frontmatter.is_featured),
    sortOrder: Number(frontmatter.sort_order ?? 999),
    status: String(frontmatter.status ?? "published"),
    sidebarTitle: String(frontmatter.sidebar_title ?? "Konteks Implementasi"),
    sidebarDescription: String(frontmatter.sidebar_description ?? ""),
    content: extractContent(markdown),
    gallery: (gallery.length > 0 ? gallery : frontmatterGallery).map((item) => ({
      src: item.src ?? "",
      alt: item.alt ?? "",
      label: item.label ?? "",
    })),
    sidebarPoints: (sidebarPoints.length > 0 ? sidebarPoints : frontmatterSidebarPoints).map((item) => ({
      title: item.title ?? "",
      description: item.description ?? "",
    })),
  };

  if (!entry.title || !entry.slug || entry.status !== "published") {
    return null;
  }

  return resolveProjectImages(entry);
}

function toPortfolioItem(entry: MarkdownPortfolioEntry, index: number): PortfolioItem {
  const primaryCategory = entry.categories.find((item) => item !== "all") ?? "dashboard";
  const accent = accentMap[primaryCategory];
  const galleryItems: PortfolioGalleryItem[] = [
    {
      src: entry.featuredImage,
      alt: entry.featuredImageAlt || entry.title,
      label: "Tampilan utama",
    },
    ...entry.gallery.map((item) => ({ src: item.src, alt: item.alt, label: item.label })),
  ];

  const sidebarPoints: PortfolioSidebarPoint[] = entry.sidebarPoints.map((item) => ({
    bulletClassName: accent.bulletClassName,
    title: item.title,
    description: item.description,
  }));

  return {
    id: 1000 + index,
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary,
    year: formatYear(entry.startDate, entry.endDate),
    teaserLabel: entry.teaserLabel,
    teaserLabelClassName: accent.teaserLabelClassName,
    hoverAccentClassName: accent.hoverAccentClassName,
    image: entry.featuredImage || galleryItems[0]?.src || null,
    imageAlt: entry.featuredImageAlt || entry.title,
    stack: entry.techStack,
    categories: entry.categories,
    isFeatured: entry.isFeatured,
    sortOrder: entry.sortOrder,
    detail: {
      caseStudyLabel: entry.caseStudyLabel,
      caseStudyLabelClassName: accent.caseStudyLabelClassName,
      title: entry.title,
      description: entry.clientDescription || entry.summary,
      infoTitle: "Ringkasan Proyek",
      info: {
        role: entry.role,
        duration: formatDuration(entry.startDate, entry.endDate),
        techStackSummary: entry.techStack.join(" · "),
        domainScope: entry.clientDescription || entry.summary,
      },
      contentTitle: "Detail Implementasi",
      content: entry.content,
      galleryTitle: "Galeri Proyek",
      galleryItems,
      sidebarTitle: entry.sidebarTitle,
      sidebarDescription: entry.sidebarDescription,
      sidebarPoints,
    },
  };
}

export function getMarkdownPortfolioItems(): PortfolioItem[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_DIR).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => parseProjectFile(path.join(PROJECTS_DIR, file)))
    .filter((item): item is MarkdownPortfolioEntry => Boolean(item))
    .sort((left, right) => left.sortOrder - right.sortOrder)
    .map((item, index) => toPortfolioItem(item, index));
}
