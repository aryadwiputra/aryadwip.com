import type { Route } from "./+types/layanan";
import { Link } from "react-router";
import { SITE, SERVICES, HOW_I_WORK } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `Layanan Jasa | ${SITE.name}`,
    description:
      "Jasa pembuatan website & aplikasi Laravel di Indonesia: company profile, sistem informasi custom, e-commerce, API, maintenance, dan migrasi. Konsultasi gratis via WhatsApp.",
    path: "/layanan",
  });
}

const SERVICE_COLORS = ["bg-white", "bg-sage", "bg-white", "bg-mustard", "bg-white", "bg-terracotta"];
const SERVICE_ROTATE = ["-rotate-1", "rotate-1", "", "-rotate-1", "rotate-1", ""];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Pembuatan Website & Aplikasi Laravel",
  provider: {
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: "ID",
  serviceType: ["Web Development", "Custom Software", "API Development", "Maintenance"],
  url: `${SITE.url}/layanan`,
};

export default function Layanan() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="LAYANAN"
          title={
            <>
              Jasa Pembuatan Website{" "}
              <span className="bg-dark text-paper px-2 inline-block -rotate-1">
                &amp; Aplikasi Laravel
              </span>
            </>
          }
          description="Dari company profile hingga sistem informasi custom — dikerjakan dengan Laravel, arsitektur rapi, dan komunikasi yang transparan."
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id}>
                <div
                  className={`h-full border-2 border-black p-6 flex flex-col gap-4 ${SERVICE_COLORS[i % SERVICE_COLORS.length]} ${SERVICE_ROTATE[i % SERVICE_ROTATE.length]} hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <img
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      className="w-8 h-8"
                    />
                    <span className="text-xs font-bold bg-dark text-paper px-2 py-1 whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight">{service.title}</h2>
                    <p className="text-sm font-semibold text-gray-600 mt-1">{service.tagline}</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">{service.desc}</p>
                  <ul className="space-y-1.5 text-sm">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span aria-hidden="true" className="font-black">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${SITE.wa}?text=${encodeURIComponent(
                      `Halo Arya, saya tertarik dengan layanan ${service.title}. Bisa diskusi?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-dark text-paper text-center font-semibold px-4 py-3 text-sm hover:opacity-90 transition-opacity"
                  >
                    Tanya Layanan Ini →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10 max-w-xl mx-auto">
            Estimasi harga di atas adalah titik awal — penawaran final disepakati setelah
            discovery call dan proposal, sesuai kebutuhan &amp; scope proyek Anda.
          </p>
        </section>

        <section className="bg-dark text-paper py-16 px-6 border-y-2 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 tracking-tight">
              Cara Saya Bekerja
            </h2>
            <p className="text-center text-paper/70 text-lg mb-12 max-w-xl mx-auto">
              Proses yang transparan dari awal hingga delivery.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_I_WORK.map((step) => (
                <div
                  key={step.step}
                  className="border-2 border-primary/30 p-8 space-y-3 hover:border-primary transition-colors"
                >
                  <span className="inline-flex w-12 h-12 items-center justify-center border-2 border-black font-black text-lg text-dark bg-terracotta">
                    {step.step}
                  </span>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="text-paper/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Punya Proyek dalam Pikiran?
            </h2>
            <p className="text-lg leading-relaxed">
              Ceritakan kebutuhan Anda — konsultasi awal gratis, tanpa komitmen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kontak"
                className="bg-dark text-paper font-semibold px-8 py-4 text-base hover:opacity-90 transition-opacity"
              >
                Buka Halaman Kontak
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
