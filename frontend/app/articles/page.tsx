import type { Metadata } from "next";

import { ArticlesPageClient } from "@/components/pages/articles-page-client";

export const metadata: Metadata = { title: "Artikel — Arya Dwi Putra" };

export default function Page() {
  return <ArticlesPageClient />;
}
