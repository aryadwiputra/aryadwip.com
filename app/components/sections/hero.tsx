import { Link } from "react-router";
import { SITE, STATS } from "~/lib/portfolio-data";

// Kartu Profil Developer — pengganti terminal window & tech ring (klise
// template AI). Foto asli + info real, tetap neobrutalism (border 2px,
// shadow solid, rotasi tipis). Foto manusia tidak bisa dipalsukan AI.
function ProfileCard() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Kartu utama */}
      <div className="relative border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
        {/* header bar */}
        <div className="bg-dark text-paper flex items-center justify-between px-4 py-2.5 border-b-2 border-black">
          <span className="font-mono text-xs tracking-wider">
            aryadwiputra@dev
          </span>
          <span className="font-mono text-[10px] text-paper/70">
            // open for projects
          </span>
        </div>
        {/* foto */}
        <div className="p-3">
          <div className="border-2 border-black overflow-hidden">
            <picture>
              <source srcSet="/images/arya-dwi-putra.webp" type="image/webp" />
              <img
                src="/images/arya-dwi-putra.png"
                alt={SITE.name}
                width={448}
                height={508}
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
          {/* info real */}
          <div className="mt-3 px-1 pb-1 space-y-1.5">
            <p className="font-bold text-lg leading-tight">{SITE.name}</p>
            <p className="font-mono text-xs text-gray-600">{SITE.title}</p>
            <div className="border-t-2 border-dashed border-black/20 pt-2 mt-2 space-y-1 font-mono text-[11px] leading-snug">
              <p className="truncate">
                <span className="text-gray-400">//</span> {SITE.location} · 6+ tahun
              </p>
              <p className="truncate">
                <span className="text-gray-400">//</span> klien: LPSK · Wifiku · HATTI
              </p>
              <p className="truncate">
                <span className="text-gray-400">//</span> stack: laravel · mysql · redis
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sticky note kecil — aksen terracotta */}
      <div className="absolute -bottom-4 -right-3 bg-terracotta border-2 border-black px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
        <p className="font-mono text-[11px] font-bold text-paper">
          founder: marikoding.com
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[640px] pt-32 pb-28 px-6 bg-paper overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <span className="inline-block bg-dark text-paper text-sm font-semibold px-3 py-1 font-mono">
              {"// "}6+ TAHUN LARAVEL
            </span>
            <span className="inline-block bg-dark text-paper text-sm font-semibold px-3 py-1 font-mono">
              {"// "}FOUNDER MARIKODING.COM
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Software Developer{" "}
            <span className="bg-dark text-paper px-2 inline-block -rotate-1">
              &amp; Laravel Specialist
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-lg text-dark/80">
            {SITE.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#proyek"
              className="bg-dark text-paper font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Lihat Studi Kasus Proyek
            </a>
            <Link
              to="/kontak"
              className="border-2 border-dark text-dark font-semibold px-6 py-3 text-sm hover:bg-dark hover:text-paper transition-colors"
            >
              Diskusikan Proyek Anda
            </Link>
          </div>
          <div className="pt-1">
            <Link
              to="/layanan"
              className="text-sm font-semibold underline underline-offset-4 hover:text-gray-700"
            >
              Lihat Layanan Jasa
            </Link>
          </div>
          {/* Stats: angka + anotasi sumber */}
          <div className="grid grid-cols-3 border-2 border-black bg-white divide-x-2 divide-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            {STATS.map((stat) => (
              <div key={stat.short} className="p-3 text-center">
                <p className="font-display font-bold text-2xl md:text-3xl leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-gray-600 mt-1">
                  {stat.short}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
