import type { Metadata } from "next";
import { PortfolioListingSection } from "@/components/sections/portfolio/PortfolioListingSection";

export const metadata: Metadata = { title: "Portfolio — Arya Dwi Putra" };

export default function Page() {
  return <PortfolioListingSection />;
}
