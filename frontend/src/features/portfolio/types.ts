export type PortfolioFilterKey = "all" | "laravel" | "fullstack" | "dashboard" | "integration";

export type RawPortfolio = {
  id: number;
  clientId: number | null;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  featuredImage: string | null;
  demoUrl: string | null;
  repoUrl: string | null;
  technologies: string | null;
  startDate: string | null;
  endDate: string | null;
  status: string;
  isFeatured: boolean;
  order: number;
  createdAt: string | null;
  updatedAt: string | null;
};

export type RawPortfolioGallery = {
  id: number;
  portfolioId: number;
  image: string;
  caption: string | null;
  order: number;
  createdAt: string | null;
  updatedAt: string | null;
};

export type RawClient = {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  website: string | null;
  description: string | null;
  isFeatured: boolean;
  order: number;
  createdAt: string | null;
  updatedAt: string | null;
};

export type PortfolioFilter = {
  key: PortfolioFilterKey;
  label: string;
};

export type PortfolioSidebarPoint = {
  bulletClassName: string;
  title: string;
  description: string;
};

export type PortfolioDetailInfo = {
  role: string;
  duration: string;
  techStackSummary: string;
  domainScope: string;
};

export type PortfolioGalleryItem = {
  src: string | null;
  alt: string;
  label: string;
};

export type PortfolioDetailContent = {
  caseStudyLabel: string;
  caseStudyLabelClassName: string;
  title: string;
  description: string;
  infoTitle: string;
  info: PortfolioDetailInfo;
  contentTitle: string;
  content: string;
  galleryTitle: string;
  galleryItems: PortfolioGalleryItem[];
  sidebarTitle: string;
  sidebarDescription: string;
  sidebarPoints: PortfolioSidebarPoint[];
};

export type PortfolioItem = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  year: string;
  teaserLabel: string;
  teaserLabelClassName: string;
  hoverAccentClassName: string;
  image: string | null;
  imageAlt: string;
  stack: string[];
  categories: PortfolioFilterKey[];
  isFeatured: boolean;
  sortOrder: number;
  detail: PortfolioDetailContent;
};
