import type { Metadata } from "next";

import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Arya Dwi Putra untuk diskusi proyek, audit backend, atau kebutuhan dashboard admin.",
};

const budgets = ["< Rp15 Juta", "Rp15 – Rp35 Juta", "Rp35 – Rp75 Juta", "> Rp75 Juta"];
const needs = [
  "Audit Backend & Query",
  "Internal Dashboard App",
  "Integrasi API Hub",
  "Fullstack SaaS Architecture",
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Get In Touch</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl">
              Mari bangun arsitektur sistem digital yang andal dan tepat guna.
            </h1>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Terbuka untuk kolaborasi proyek baru, audit query database, stabilisasi sistem legacy, atau sesi konsultasi pemetaan MVP dan dashboard admin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
          <form className="space-y-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[var(--ink)]">
                <span>Nama Lengkap *</span>
                <input className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ink)]" placeholder="Nama lengkap" />
              </label>
              <label className="space-y-2 text-sm font-medium text-[var(--ink)]">
                <span>Alamat Email *</span>
                <input type="email" className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ink)]" placeholder="nama@perusahaan.com" />
              </label>
            </div>
            <label className="space-y-2 text-sm font-medium text-[var(--ink)]">
              <span>Perusahaan / Tim</span>
              <input className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ink)]" placeholder="Nama perusahaan atau tim" />
            </label>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[var(--ink)]">
                <span>Estimasi Skala Budget</span>
                <select className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ink)]">
                  <option>Pilih rentang kisaran budget</option>
                  {budgets.map((budget) => (
                    <option key={budget}>{budget}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-[var(--ink)]">
                <span>Jenis Kebutuhan Sistem</span>
                <select className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ink)]">
                  <option>Pilih kebutuhan utama</option>
                  {needs.map((need) => (
                    <option key={need}>{need}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="space-y-2 text-sm font-medium text-[var(--ink)]">
              <span>Detail Singkat Proyek</span>
              <textarea rows={6} className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ink)]" placeholder="Ceritakan konteks bisnis, target pengguna, dan kebutuhan teknis utama." />
            </label>
            <button type="submit" className="rounded-[var(--radius-sm)] bg-[var(--ink)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-90">
              Kirim Inquiry Project
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
              <h2 className="text-lg font-semibold text-[var(--ink)]">Saluran Komunikasi Langsung</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
                <p>
                  <span className="block font-medium text-[var(--ink)]">Korespondensi Email Utama</span>
                  hello@aryadwiputra.com
                </p>
                <p>
                  <span className="block font-medium text-[var(--ink)]">Lokasi Kerja</span>
                  Indonesia • Global Remote Coordination Ready
                </p>
                <p>
                  <span className="block font-medium text-[var(--ink)]">Jam Koordinasi Efektif</span>
                  Senin – Jumat, 09.00 – 18.00 WIB
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)]">
              <iframe
                title="Lokasi Arya Dwi Putra"
                src="https://www.google.com/maps?q=Jakarta%20Indonesia&z=10&output=embed"
                className="h-[320px] w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
