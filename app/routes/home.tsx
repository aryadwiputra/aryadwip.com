import type { Route } from "./+types/home";
import Navbar from "~/components/sections/navbar";
import Hero from "~/components/sections/hero";
import ClientMarquee from "~/components/sections/client-marquee";
import CareerTimeline from "~/components/sections/career-timeline";
import Features from "~/components/sections/features";
import HowIWork from "~/components/sections/how-i-work";
import BentoProjects from "~/components/sections/bento-projects";
import ContactCTA from "~/components/sections/contact-cta";
import Footer from "~/components/sections/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arya Dwi Putra — Backend Engineer & Tech Lead" },
    { name: "description", content: "Backend engineer spesialis Laravel. 6+ tahun pengalaman di API architecture, database design, dan infrastructure planning." },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientMarquee />
      <CareerTimeline />
      <Features />
      <HowIWork />
      <BentoProjects />
      <ContactCTA />
      <Footer />
    </>
  );
}
