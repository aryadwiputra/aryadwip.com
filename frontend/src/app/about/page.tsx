import type { Metadata } from "next";
import {
  AboutPageCareer,
  AboutPageCta,
  AboutPageExpertise,
  AboutPageHero,
  AboutPagePhilosophy,
} from "@/components/sections/about/AboutSections";

export const metadata: Metadata = { title: "About — Arya Dwi Putra" };

export default function Page() {
  return (
    <main>
      <AboutPageHero />
      <AboutPagePhilosophy />
      <AboutPageCareer />
      <AboutPageExpertise />
      <AboutPageCta />
    </main>
  );
}
