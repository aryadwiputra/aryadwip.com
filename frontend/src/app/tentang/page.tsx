import type { Metadata } from "next";
import {
  AboutPageCareer,
  AboutPageCta,
  AboutPageExpertise,
  AboutPageHero,
  AboutPagePhilosophy,
} from "@/components/sections/tentang/AboutSections";

export const metadata: Metadata = { title: "Tentang Saya — Arya Dwi Putra" };

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
