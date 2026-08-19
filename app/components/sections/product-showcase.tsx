import { Link } from "react-router";
import { SITE } from "~/lib/portfolio-data";
import Reveal from "~/components/reveal";

export default function ProductShowcase() {
  const p = SITE.product;
  return (
    <Reveal>
      <section id="produk" className="bg-dark text-paper py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-terracotta text-paper text-sm font-semibold px-3 py-1 font-mono">
              {"// "}PRODUK SAYA SENDIRI
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Saya tidak hanya mengerjakan proyek klien — saya juga membangun produk.
            </h2>
            <p className="text-paper/80 text-lg leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta text-paper font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
              >
                Kunjungi {p.name} →
              </a>
              <Link
                to="/proyek/marikoding"
                className="border-2 border-primary text-paper font-semibold px-6 py-3 text-sm hover:bg-primary hover:text-paper transition-colors"
              >
                Baca Studi Kasus
              </Link>
            </div>
          </div>
          <div className="border-2 border-primary p-2 shadow-[8px_8px_0px_0px_rgba(255,225,124,1)]">
            <img
              src="/images/projects/marikoding/1.png"
              alt={`${p.name}, ${p.tagline}`}
              width={800}
              height={450}
              loading="lazy"
              className="w-full border border-primary/30"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
