export type PortfolioFilterKey = "all" | "laravel" | "fullstack" | "dashboard" | "integration";

export type PortfolioFilter = {
  key: PortfolioFilterKey;
  label: string;
};

export type PortfolioExecutionStep = {
  eyebrow: string;
  eyebrowClassName: string;
  title: string;
  description: string;
};

export type PortfolioImpactItem = {
  value: string;
  label: string;
  description: string;
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

export type PortfolioDetailContent = {
  caseStudyLabel: string;
  caseStudyLabelClassName: string;
  title: string;
  description: string;
  infoTitle: string;
  info: PortfolioDetailInfo;
  challengeTitle: string;
  challengeBody: string[];
  solutionTitle: string;
  solutionBody: string[];
  executionTitle: string;
  executionSteps: PortfolioExecutionStep[];
  impactTitle: string;
  impactItems: PortfolioImpactItem[];
  documentationTitle: string;
  documentationPlaceholders: [string, string];
  sidebarTitle: string;
  sidebarDescription: string;
  sidebarPoints: PortfolioSidebarPoint[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  teaserLabel: string;
  teaserLabelClassName: string;
  hoverAccentClassName: string;
  image: string;
  imageAlt: string;
  stack: string[];
  categories: PortfolioFilterKey[];
  detail: PortfolioDetailContent;
};
