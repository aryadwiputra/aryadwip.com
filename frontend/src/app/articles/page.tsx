import type { Metadata } from "next";
import { ArticleListingSection } from "@/components/sections/articles/ArticleListingSection";

export const metadata: Metadata = { title: "Articles — Arya Dwi Putra" };

export default function Page() {
  return <ArticleListingSection />;
}
