import type { Route } from "./+types/testimoni";
import { Link } from "react-router";
import { SITE, TESTIMONIALS, CLIENTS } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `Testimoni & Kepercayaan Klien — ${SITE.name}`,
    description:
      "Prinsip kerja dan track record software developer Laravel yang dipercaya oleh instansi pemerintah dan korporasi di Indonesia.",
    path: "/testimoni",
  });
}

export default function Testimoni() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="TESTIMONI & KEPERCAYAAN"
          title="Apa yang Saya Jaga di Setiap Proyek"
          description="Lebih dari sekadar kode: cara kerja, arsitektur, dan pengalaman production adalah yang membuat klien kembali dan merekomendasikan."
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name}>
                <div
                  className={`h-full border-2 border-black p-6 md:p-8 flex flex-col gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                    i % 3 === 0 ? "bg-terracotta" : i % 3 === 1 ? "bg-sage" : "bg-mustard"
                  } ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-transform`}
                >
                  <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center font-black">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-lg font-bold">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-gray-600">{t.role}</p>
                  <p className="text-gray-800 leading-relaxed flex-1">“{t.quote}”</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-dark text-paper py-16 px-6 border-y-2 border-black">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Dipercaya oleh Instansi &amp; Korporasi
            </h2>
            <p className="text-paper/70 text-lg leading-relaxed">
              Pernah mengerjakan proyek untuk {CLIENTS.join(", ")}: dari lembaga negara hingga
              grup korporasi berskala nasional.
            </p>
          </div>
        </section>

        <section className="bg-paper py-16 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Jadilah Klien Berikutnya
            </h2>
            <p className="text-lg leading-relaxed">
              Ceritakan kebutuhan proyek Anda, saya akan menunjukkan bagaimana cara saya
              bekerja dan apa yang bisa Anda harapkan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kontak"
                className="bg-dark text-paper font-semibold px-8 py-4 text-base hover:opacity-90 transition-opacity"
              >
                Buka Halaman Kontak
              </Link>
              <Link
                to="/proyek"
                className="border-2 border-dark text-dark font-semibold px-8 py-4 text-base hover:bg-dark hover:text-paper transition-colors"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
