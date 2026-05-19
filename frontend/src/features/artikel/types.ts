export type ArticleFilterKey = "all" | "laravel" | "database" | "architecture";

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

export type ArticleRelatedItem = {
  label: string;
  labelClassName: string;
  title: string;
  slug: string;
};

export type ArticleDetailContent = {
  standfirst: string;
  featureGraphicLabel: string;
  introParagraphs: string[];
  signalsTitle: string;
  signalsIntro: string;
  signals: Array<{
    bulletClassName: string;
    title: string;
    description: string;
  }>;
  quote: string;
  midParagraph: string;
  strategyTitle: string;
  strategyParagraph: string;
  codeTitle: string;
  codeMeta: string;
  codeBlock: string;
  closingParagraph: string;
  consultationLabel: string;
  consultationTitle: string;
  consultationDescription: string;
  consultationButtonLabel: string;
  publicationTitle: string;
  publicationInfo: ArticlePublicationInfo;
  shareTitle: string;
  relatedSectionLabel: string;
  relatedSectionTitle: string;
};

export type ArticleItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  dateIso: string;
  readingTime: string;
  categoryLabel: string;
  categoryBadgeClassName: string;
  hoverAccentClassName: string;
  categories: ArticleFilterKey[];
  tags: string[];
  heroLabel: string;
  detail: ArticleDetailContent;
};
