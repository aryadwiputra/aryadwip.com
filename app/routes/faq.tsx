import type { Route } from "./+types/faq";
import { Link } from "react-router";
import { SITE, FAQS } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `FAQ | ${SITE.name}`,
    description:
      "Pertanyaan umum tentang jasa pembuatan website & aplikasi Laravel: biaya, durasi, proses kerja, maintenance, pembayaran, dan migrasi sistem lama.",
    path: "/faq",
  });
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Jawaban jujur untuk hal-hal yang biasanya ditanyakan klien sebelum mulai bekerja sama."
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={i}>
                <details className="group border-2 border-black bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                  <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-4 p-5 font-bold">
                    <span>{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="w-8 h-8 shrink-0 border-2 border-black flex items-center justify-center font-black group-open:bg-dark group-open:text-paper"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-paper py-16 px-6 border-t-2 border-black">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Pertanyaan Lain?
            </h2>
            <p className="text-lg leading-relaxed">
              Tidak menemukan jawaban yang Anda cari? Tanyakan langsung — saya balas dalam
              1–2 hari kerja.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kontak"
                className="bg-dark text-paper font-semibold px-8 py-4 text-base hover:opacity-90 transition-opacity"
              >
                Hubungi Saya
              </Link>
              <a
                href={`https://wa.me/${SITE.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-dark text-dark font-semibold px-8 py-4 text-base hover:bg-dark hover:text-paper transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
