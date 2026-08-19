import { Link } from "react-router";
import { SITE } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

export default function ContactCTA() {
  return (
    <Reveal><section id="kontak" className="relative py-20 px-6 bg-paper overflow-hidden border-b-2 border-black">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-block bg-dark text-paper text-sm font-semibold px-3 py-1 font-mono">
          {"// "}KONTAK
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          Mari Diskusikan Proyek Anda
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Butuh software developer spesialis Laravel untuk proyek Anda?
          Saya siap membantu mewujudkan solusi yang scalable dan maintainable.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
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
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-dark text-dark font-semibold px-8 py-4 text-base hover:bg-dark hover:text-paper transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm text-gray-700">
          Respon dalam 1–2 hari kerja • Indonesia & Global Remote
        </p>
      </div>
    </section></Reveal>
  );
}
