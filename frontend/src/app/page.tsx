import type { Metadata } from "next";

import { CTASection } from "@/components/sections/home/CTASection";
import { ClientsSection } from "@/components/sections/home/ClientsSection";
import { FeaturedPortfolioSection } from "@/components/sections/home/FeaturedPortfolioSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { LatestArticlesSection } from "@/components/sections/home/LatestArticlesSection";
import { ToolsSection } from "@/components/sections/home/ToolsSection";
import { WorkMethodSection } from "@/components/sections/home/WorkMethodSection";

export const metadata: Metadata = {
  title: "Senior Laravel Engineer - Personal Portfolio",
};

export default function Page() {
  return (
    <main>
        <HeroSection />
        <ClientsSection />
        <ToolsSection />
        <FeaturedPortfolioSection />
        <WorkMethodSection />
        <LatestArticlesSection />
        <CTASection />
    </main>
  );
}
