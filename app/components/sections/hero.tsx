import { Link } from "react-router";
import { SITE } from "~/lib/portfolio-data";

const TECH_RING = [
  { name: 'Laravel', icon: '/icons/tech/laravel.svg' },
  { name: 'PHP', icon: '/icons/tech/php.svg' },
  { name: 'MySQL', icon: '/icons/tech/mysql.svg' },
  { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg' },
  { name: 'Redis', icon: '/icons/tech/redis.svg' },
  { name: 'Docker', icon: '/icons/tech/docker.svg' },
  { name: 'React', icon: '/icons/tech/react.svg' },
  { name: 'Tailwind', icon: '/icons/tech/tailwindcss.svg' },
];

function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-primary border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div className="absolute inset-5 rounded-full border-2 border-dashed border-dark/15" />
      <div className="absolute inset-12 rounded-full border border-dark/10" />
      {TECH_RING.map((tech, i) => {
        const angle = (i / TECH_RING.length) * 2 * Math.PI - Math.PI / 2;
        const radius = 38;
        const top = 50 + radius * Math.sin(angle);
        const left = 50 + radius * Math.cos(angle);
        return (
          <div key={tech.name} className="absolute" style={{ top: `${top}%`, left: `${left}%` }}>
            {/* level 1: posisi ring (translate -50%, -50%) */}
            <div className="-translate-x-1/2 -translate-y-1/2">
              {/* level 2: animasi float idle (staggered delay) */}
              <div className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {/* level 3: hover interaktif + tooltip */}
                <div
                  title={tech.name}
                  aria-label={tech.name}
                  className="bg-white border-2 border-dark p-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:scale-110 hover:rotate-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <img src={tech.icon} alt="" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] aspect-square">
        <div className="w-full h-full rounded-full border-2 border-dark bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <picture>
            <source srcSet="/images/arya-dwi-putra.webp" type="image/webp" />
            <img
              src="/images/arya-dwi-putra.png"
              alt={SITE.name}
              width={448}
              height={508}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[640px] pt-32 pb-28 px-6 bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-dark text-primary text-sm font-semibold px-3 py-1">
            Laravel Ecosystem • 6+ Tahun
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Backend Engineer<br /> &amp; Tech Lead
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-lg">
            {SITE.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#proyek"
              className="bg-dark text-primary font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
            >
              Lihat Portfolio
            </a>
            <Link
              to="/kontak"
              className="border-2 border-dark text-dark font-semibold px-6 py-3 text-sm hover:bg-dark hover:text-primary transition-colors"
            >
              Hubungi Saya
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {['/logos/clients/logo-lpsk.png', '/logos/clients/wifiku-logo.png', '/logos/clients/citanusa.png'].map((src) => (
                <div key={src} className="w-9 h-9 rounded-full border-2 border-dark bg-white overflow-hidden">
                  <img src={src} alt="" width={36} height={36} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Dipercaya oleh instansi pemerintah &amp; korporasi</span>
          </div>
        </div>
        <div className="w-full">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
