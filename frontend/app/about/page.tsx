import type { Metadata } from "next";

import { PortraitCard, SiteShell } from "@/components/site-shell";
import { PrimaryLink, SectionIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Profil, pengalaman, dan pendekatan kerja Arya Dwi Putra sebagai Senior Laravel Engineer.",
};

const experiences = [
  {
    role: "Senior Backend Engineer",
    period: "2023 — Sekarang",
    description: "Fokus pada Laravel API, dashboard internal, stabilitas sistem, dan profiling query untuk platform dengan kompleksitas menengah hingga tinggi.",
  },
  {
    role: "Fullstack Engineer",
    period: "2020 — 2023",
    description: "Mengerjakan produk bisnis end-to-end dari data modeling, integrasi layanan pihak ketiga, sampai implementasi antarmuka berbasis React dan Vue.",
  },
  {
    role: "Web Developer",
    period: "2018 — 2020",
    description: "Membangun fondasi aplikasi web, CMS kustom, serta panel admin untuk kebutuhan operasional dan pemasaran digital.",
  },
];

const principles = [
  "Mulai dari alur bisnis riil, bukan dari pola desain yang sedang populer.",
  "Pisahkan tanggung jawab sistem agar dashboard admin tetap mudah dikembangkan.",
  "Optimalkan query, cache, dan observability sebelum mengejar kompleksitas infrastruktur.",
];

const expertise = [
  {
    title: "Laravel Ecosystem",
    description: "Laravel, queue orchestration, authorization, scheduler, testing, dan best practice implementasi dashboard admin.",
  },
  {
    title: "Relational Database Hub",
    description: "Perancangan skema, indexing, query optimization, audit bottleneck, dan strategi pertumbuhan data yang terukur.",
  },
  {
    title: "Pragmatic Delivery",
    description: "Menjaga keseimbangan antara maintainability, kecepatan rilis, dan pengalaman pengguna pada aplikasi internal maupun publik.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Tentang Saya</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl">
              Pragmatisme terstruktur untuk ketahanan software
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Saya membantu tim dan bisnis membangun aplikasi Laravel yang siap tumbuh: API, dashboard admin, integrasi data, dan pengalaman pengelolaan konten yang efisien.
            </p>
            <div className="space-y-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
              <h2 className="text-base font-semibold text-[var(--ink)]">Prinsip Rekayasa</h2>
              {principles.map((item) => (
                <p key={item} className="text-sm leading-7 text-[var(--muted)]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <PortraitCard />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <SectionIntro
            eyebrow="Experience"
            title="Lintasan kerja yang dekat dengan produk nyata"
            description="Pengalaman saya dibentuk oleh kebutuhan delivery yang menuntut sistem stabil, data rapi, dan dashboard yang benar-benar dipakai tim operasional."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {experiences.map((item) => (
              <article key={item.role} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--ink)]">{item.role}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <SectionIntro
            eyebrow="Expertise"
            title="Kapabilitas yang paling sering saya bawa ke proyek"
            description="Fokus utama ada pada Laravel, data, dan delivery pragmatis agar produk tetap kuat secara teknis tanpa memperlambat bisnis."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {expertise.map((item) => (
              <article key={item.title} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] py-16 text-white md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">Kolaborasi</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Jika kamu membutuhkan backend yang rapi dan dashboard yang mudah dikelola, kita bisa mulai dari scope paling penting lebih dulu.
            </h2>
          </div>
          <PrimaryLink href="/contact">Diskusikan Proyek</PrimaryLink>
        </div>
      </section>
    </SiteShell>
  );
}
