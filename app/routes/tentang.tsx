import type { Route } from "./+types/tentang";
import { Link } from "react-router";
import { SITE, FEATURES, TESTIMONIALS, EXPERIENCE, CLIENTS } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `Tentang — ${SITE.name}`,
    description:
      "Software developer spesialis Laravel di Indonesia dengan pengalaman 6+ tahun. Membangun aplikasi web end-to-end: API, database, integrasi, hingga deployment.",
    path: "/tentang",
  });
}

export default function Tentang() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="TENTANG SAYA"
          title={
            <>
              Software Developer{" "}
              <span className="bg-dark text-primary px-2 inline-block -rotate-1">
                spesialis Laravel
              </span>
            </>
          }
          description={SITE.bio}
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
            <Reveal className="lg:col-span-1">
              <div className="bg-primary border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square overflow-hidden border-2 border-black">
                  <picture>
                    <source srcSet="/images/arya-dwi-putra.webp" type="image/webp" />
                    <img
                      src="/images/arya-dwi-putra.png"
                      alt={SITE.name}
                      width={448}
                      height={508}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="mt-5 space-y-2">
                  <p className="font-black text-xl">{SITE.name}</p>
                  <p className="text-sm font-semibold">{SITE.title}</p>
                  <p className="text-sm text-gray-600">{SITE.location}</p>
                  <div className="grid grid-cols-3 border-2 border-black bg-white divide-x-2 divide-black mt-3">
                    {[
                      ["6+", "Tahun"],
                      ["20+", "Proyek"],
                      ["4+", "Industri"],
                    ].map(([v, l]) => (
                      <div key={l} className="p-3 text-center">
                        <p className="font-black text-xl leading-none">{v}</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-600 mt-1">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <section className="border-2 border-black p-6 md:p-8 bg-white">
                  <h2 className="text-2xl font-black tracking-tight mb-4">Perjalanan Saya</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Saya mulai sebagai IT Support &amp; Web Developer di lembaga negara, lalu
                    berkembang menjadi Web Developer di perusahaan telekomunikasi, dan kini
                    Software Developer yang fokus di ekosistem Laravel — dari Laravel 5 hingga
                    Laravel 13.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sepanjang perjalanan itu saya menangani sistem kritikal: contact center
                    omnichannel untuk instansi pemerintah, platform WhatsApp terpusat untuk
                    grup korporasi, CRM, billing, POS, hingga portal PPDB sekolah. Dari situ
                    saya belajar bahwa kode yang rapi dan komunikasi yang jujur adalah fondasi
                    proyek yang sukses.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-2 border-black p-6 md:p-8 bg-white">
                  <h2 className="text-2xl font-black tracking-tight mb-4">Stack &amp; Tools</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {FEATURES.map((f) => (
                      <div key={f.title} className="border-2 border-black p-4 flex gap-3">
                        <img src={f.icon} alt="" width={28} height={28} loading="lazy" className="w-7 h-7 shrink-0" />
                        <div>
                          <p className="font-bold text-sm">{f.title}</p>
                          <p className="text-gray-600 text-xs leading-relaxed mt-1">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-2 border-black p-6 md:p-8 bg-white">
                  <h2 className="text-2xl font-black tracking-tight mb-4">Prinsip Kerja Saya</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {TESTIMONIALS.map((t) => (
                      <div key={t.name} className="border-2 border-black p-4 bg-primary -rotate-1 hover:rotate-0 transition-transform">
                        <p className="text-sm font-bold">{t.name}</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-600">{t.role}</p>
                        <p className="text-sm text-gray-700 leading-relaxed mt-2">“{t.quote}”</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 px-6 border-t-2 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 tracking-tight">
              Riwayat Pengalaman
            </h2>
            <div className="max-w-3xl mx-auto mt-10 space-y-6">
              {EXPERIENCE.map((exp) => (
                <Reveal key={exp.company + exp.period}>
                  <div className="border-2 border-black p-6 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                    <span className="inline-block bg-dark text-primary text-xs font-semibold px-2 py-1 mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-500 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Dipercaya oleh Instansi &amp; Korporasi
            </h2>
            <p className="text-gray-600 text-lg">
              {CLIENTS.join(" • ")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/layanan"
                className="bg-dark text-primary font-semibold px-8 py-4 text-base hover:opacity-90 transition-opacity"
              >
                Lihat Layanan
              </Link>
              <Link
                to="/kontak"
                className="border-2 border-dark text-dark font-semibold px-8 py-4 text-base hover:bg-dark hover:text-primary transition-colors"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-dark text-primary py-16 px-6 border-t-2 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-primary text-dark text-sm font-semibold px-3 py-1 font-mono">
              {"// "}PRODUK SAYA SENDIRI
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-4 mb-3 tracking-tight">
              Saya juga membangun {SITE.product.name}
            </h2>
            <p className="text-primary/80 text-lg max-w-2xl mx-auto mb-6">
              {SITE.product.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SITE.product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-dark font-semibold px-8 py-4 text-base hover:opacity-90 transition-opacity"
              >
                Kunjungi {SITE.product.name} →
              </a>
              <Link
                to="/proyek/marikoding"
                className="border-2 border-primary text-primary font-semibold px-8 py-4 text-base hover:bg-primary hover:text-dark transition-colors"
              >
                Baca Studi Kasus
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
