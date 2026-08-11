import { useState } from "react";
import type { Route } from "./+types/contact";
import { SITE } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `Kontak — ${SITE.name}`,
    description:
      "Hubungi Arya Dwi Putra — backend engineer & tech lead spesialis Laravel. Konsultasi arsitektur, API, dan infrastruktur untuk proyek Anda.",
    path: "/kontak",
  });
}

const CONTACT_INFO = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    desc: "Respon tercepat untuk pertanyaan teknis & kolaborasi.",
  },
  {
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: `https://wa.me/${SITE.wa}`,
    desc: "Diskusi cepat untuk kebutuhan mendesak.",
  },
  {
    label: "Lokasi",
    value: SITE.location,
    href: undefined,
    desc: "Bekerja remote untuk klien Indonesia & global.",
  },
  {
    label: "Jam Kerja",
    value: "Mon–Fri, 09:00–18:00 WIB",
    href: undefined,
    desc: "Di luar jam kerja, balasan di hari kerja berikutnya.",
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const name = form.name.trim() || "calon klien";
  const message = form.message.trim();
  const waLink = `https://wa.me/${SITE.wa}?text=${encodeURIComponent(
    `Halo Arya, saya ${name}.\n\n${message || "(isi pesan di bawah)"}`
  )}`;
  const mailLink = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Kolaborasi dari ${name} — aryadwip.com`
  )}&body=${encodeURIComponent(
    `Halo Arya, saya ${name}${form.email ? ` (${form.email})` : ""}.\n\n${message}`
  )}`;

  const inputClass =
    "w-full border-2 border-black bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow";

  return (
    <form
      className="bg-white border-2 border-black p-6 md:p-8 space-y-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="text-xl font-bold">Kirim Pesan</h3>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block space-y-1.5">
          <span className="text-sm font-semibold">Nama</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Nama Anda"
            className={inputClass}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="email@anda.com"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block space-y-1.5">
        <span className="text-sm font-semibold">Pesan</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder="Ceritakan kebutuhan proyek Anda..."
          className={`${inputClass} resize-y`}
        />
      </label>
      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark text-primary font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
        >
          Kirim via WhatsApp
        </a>
        <a
          href={mailLink}
          className="border-2 border-dark text-dark font-semibold px-6 py-3 text-sm hover:bg-dark hover:text-primary transition-colors"
        >
          Kirim via Email
        </a>
      </div>
      <p className="text-xs text-gray-500">
        Pesan Anda akan terbuka di WhatsApp / aplikasi email Anda — tanpa perlu server di sisi kami.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 px-6 bg-primary overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, black 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-7xl mx-auto text-center space-y-6">
            <span className="inline-block bg-dark text-primary text-sm font-semibold px-3 py-1">
              Kontak
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Mari Diskusikan Proyek Anda
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Butuh backend engineer, tech lead, atau konsultan arsitektur
              sistem? Ceritakan kebutuhan Anda — saya siap membantu mewujudkan
              solusi yang scalable dan maintainable.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 px-6 border-t-2 border-black">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
            <Reveal className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Info Kontak</h2>
              {CONTACT_INFO.map((info) => (
                <div
                  key={info.label}
                  className="bg-primary border-2 border-black p-5 space-y-1"
                >
                  <p className="text-xs font-bold tracking-widest text-gray-600 uppercase">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-bold text-lg break-words hover:underline underline-offset-4"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-bold text-lg">{info.value}</p>
                  )}
                  <p className="text-sm text-gray-600">{info.desc}</p>
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-dark px-4 py-2 text-sm font-semibold hover:bg-dark hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-dark px-4 py-2 text-sm font-semibold hover:bg-dark hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
