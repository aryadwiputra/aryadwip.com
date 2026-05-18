/* eslint-disable */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { Network } from "iconoir-react";

const clientLogos = [
  { src: "/assets/clients/citanusa.png", alt: "Citanusa" },
  { src: "/assets/clients/htti-logo.png", alt: "HTTI" },
  { src: "/assets/clients/logo-lpsk.png", alt: "LPSK" },
  { src: "/assets/clients/lsp-geoteknik.png", alt: "LSP Geoteknik" },
  { src: "/assets/clients/tibs-logo.png", alt: "TIBS" },
  { src: "/assets/clients/wifiku-logo.png", alt: "Wifiku" },
];

type StackItem = {
  label: string;
  category: string;
  cardClassName: string;
  badgeClassName: string;
  mode: "logo" | "icon";
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const stackItems: StackItem[] = [
  {
    label: "Laravel",
    category: "Inti",
    cardClassName:
      "bg-accent-purple/5 border border-accent-purple/20 hover:shadow-soft",
    badgeClassName:
      "text-accent-purple bg-white border border-accent-purple/10",
    mode: "logo",
    logoSrc: "/assets/tech/laravel.svg",
    logoAlt: "Laravel",
    logoClassName: "object-contain",
  },
  {
    label: "PHP",
    category: "Runtime",
    cardClassName:
      "bg-accent-pink/5 border border-accent-pink/20 hover:shadow-soft",
    badgeClassName: "text-accent-pink bg-white border border-accent-pink/10",
    mode: "logo",
    logoSrc: "/assets/tech/php.svg",
    logoAlt: "PHP",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "MySQL",
    category: "Database",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/mysql.svg",
    logoAlt: "MySQL",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "PostgreSQL",
    category: "Database",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/postgresql.svg",
    logoAlt: "PostgreSQL",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "Redis",
    category: "Cache",
    cardClassName:
      "bg-accent-orange/5 border border-accent-orange/20 hover:shadow-soft",
    badgeClassName:
      "text-accent-orange bg-white border border-accent-orange/10",
    mode: "logo",
    logoSrc: "/assets/tech/redis.svg",
    logoAlt: "Redis",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "REST API",
    category: "API",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "icon",
    icon: Network,
  },
  {
    label: "Tailwind CSS",
    category: "UI",
    cardClassName:
      "bg-accent-blue/5 border border-accent-blue/20 hover:shadow-soft",
    badgeClassName: "text-accent-blue bg-white border border-accent-blue/10",
    mode: "logo",
    logoSrc: "/assets/tech/tailwindcss.svg",
    logoAlt: "Tailwind CSS",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "ReactJS",
    category: "UI",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/react.svg",
    logoAlt: "React",
    logoClassName: "object-contain",
  },
  {
    label: "Vue.js",
    category: "UI",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/vue.svg",
    logoAlt: "Vue.js",
    logoClassName: "object-contain",
  },
  {
    label: "Docker",
    category: "Ops",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/docker.svg",
    logoAlt: "Docker",
    logoClassName: "object-contain",
  },
  {
    label: "Nginx",
    category: "Ops",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/nginx.svg",
    logoAlt: "Nginx",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "Node.js",
    category: "JS",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/nodejs.svg",
    logoAlt: "Node.js",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "Git",
    category: "VCS",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/git.svg",
    logoAlt: "Git",
    logoClassName: "object-contain",
  },
  {
    label: "Bootstrap",
    category: "UI",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/tech/bootstrap.svg",
    logoAlt: "Bootstrap",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
];

export const metadata: Metadata = { title: "Senior Laravel Engineer - Personal Portfolio" };

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-border hidden md:block">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  
                  <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark hover:opacity-80 transition-opacity">
                      arya<span className="text-accent-purple">dwiputra</span>
                  </Link>
                  
                  
                  <nav className="flex items-center space-x-8">
                      <Link href="/" className="text-sm font-medium text-brand-dark hover:text-accent-purple transition-colors">Beranda</Link>
                      <Link href="/portfolio" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link>
                      <Link href="/articles" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link>
                      <Link href="/about" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Tentang</Link>
                      <Link href="/contact" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Kontak</Link>
                  </nav>
                  
                  
                  <div>
                      <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 bg-brand-dark text-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all shadow-soft">
                          Yuk Ngobrol
                      </Link>
                  </div>
              </div>
          </header>
      
      
          
          
          
          <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-border px-4 py-2.5 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.03)] safe-area-pb">
              <div className="grid grid-cols-4 justify-items-center items-center">
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Beranda</span>
                  </Link>
                  <Link href="/portfolio" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Portfolio</span>
                  </Link>
                  <Link href="/articles" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Artikel</span>
                  </Link>
                  <Link href="/contact" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Kontak</span>
                  </Link>
              </div>
          </nav>
      
      
          <main>
              
              
              
              <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-20 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                      
                      
                      <div className="md:col-span-7 space-y-6 order-2 md:order-1">
                          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-1 rounded">
                              Senior Laravel Engineer
                          </span>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-dark tracking-tight leading-[1.1]">
                              Saya membangun website yang stabil dan  mudah dikembangkan untuk bisnis Anda.
                          </h1>
                          <p className="text-base md:text-lg text-brand-muted max-w-xl leading-relaxed">
                              Dengan Laravel sebagai fondasi utama, saya terbiasa menangani arsitektur API, optimasi database, serta integrasi sistem untuk kebutuhan operasional yang lebih kompleks.
                          </p>
                          
                          
                          <div className="flex flex-wrap gap-4 pt-2">
                              <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all shadow-soft">
                                  Lihat Portofolio
                              </Link>
                              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-dark border border-brand-border text-sm font-medium rounded-button hover:bg-gray-50 transition-all">
                                  Hubungi Saya
                              </Link>
                          </div>
      
                          
                          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-brand-border max-w-lg">
                              <div>
                                  <p className="text-2xl font-semibold text-brand-dark">6+ Years</p>
                                  <p className="text-xs text-brand-muted mt-1">Experience</p>
                              </div>
                              <div>
                                  <p className="text-2xl font-semibold text-brand-dark">Laravel</p>
                                  <p className="text-xs text-brand-muted mt-1">Specialist</p>
                              </div>
                              <div>
                                  <p className="text-2xl font-semibold text-brand-dark">100%</p>
                                  <p className="text-xs text-brand-muted mt-1">Fullstack Delivery</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="md:col-span-5 relative flex justify-center order-1 md:order-2 py-10 md:py-0">
                          
                          <div className="absolute top-4 left-10 w-12 h-12 rounded-full border-4 border-accent-purple/20 animate-float-1"></div>
                          <div className="absolute bottom-10 right-4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-accent-pink/30 border-r-[20px] border-r-transparent animate-float-2"></div>
                          <div className="absolute top-1/2 right-12 w-8 h-8 bg-accent-blue/10 rounded-card animate-float-3"></div>
                          <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full border-2 border-dashed border-accent-orange/40 animate-spin [animation-duration:20s]"></div>
      
                          
                          <div className="relative bg-white p-4 rounded-card border border-brand-border shadow-soft max-w-[320px] md:max-w-sm w-full z-10 transform hover:scale-[1.01] transition-transform">
                              <div className="aspect-square w-full bg-gray-100 rounded-card overflow-hidden relative">
                                  
                                  <img src="/assets/arya-dwi-putra.png" alt="Arya Dwi Putra" className="w-full h-full object-cover relative z-10 mix-blend-multiply filter opacity-90" />
                              </div>
                              <div className="mt-4 flex justify-between items-center">
                                  <div>
                                      <h3 className="text-sm font-semibold text-brand-dark">Arya Dwi Putra</h3>
                                      <p className="text-xs text-brand-muted">Siap untuk kerja remote</p>
                                  </div>
                                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                              </div>
                          </div>
                      </div>
      
                  </div>
              </section>
      
      
              
              
              
              <section id="clients" className="py-12 border-y border-brand-border bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6 mb-6">
                      <p className="text-center text-xs font-medium uppercase tracking-widest text-brand-muted">
                          Dipercaya tim dan bisnis yang terus berkembang
                      </p>
                  </div>
                  
                  
                  <div className="relative w-full flex items-center overflow-x-hidden whitespace-nowrap mask-gradient">
                      <div className="animate-marquee flex space-x-16 items-center">
                          
                          {[...clientLogos, ...clientLogos].map((logo, index) => (
                              <div
                                  key={`${logo.src}-${index}`}
                                  className="relative h-10 w-36 shrink-0 grayscale opacity-60 transition-opacity hover:opacity-100"
                              >
                                  <Image
                                      src={logo.src}
                                      alt={logo.alt}
                                      fill
                                      className="object-contain"
                                      sizes="144px"
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
              </section>
      
      
              
              
              
              <section id="tools" className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                          <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">Ecosystem & Stack</span>
                          <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Perangkat andalan di balik platform yang solid</h2>
                          <p className="text-brand-muted text-sm md:text-base">Kombinasi backend tangguh, pengelolaan data efisien, dan antarmuka modern untuk menghasilkan performa terbaik.</p>
                      </div>
      
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                          {stackItems.map((item) => {
                              const Icon = item.icon;

                              return (
                                  <div
                                      key={item.label}
                                      className={`${item.cardClassName} flex h-32 flex-col justify-between rounded-card p-5 transition-all`}
                                  >
                                      <div className="flex items-center justify-between gap-3">
                                          <span className={`${item.badgeClassName} inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold`}>
                                              {item.category}
                                          </span>
                                          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/80 text-brand-dark">
                                              {item.mode === "logo" && item.logoSrc ? (
                                                  <div className="relative h-5 w-5">
                                                      <Image
                                                          src={item.logoSrc}
                                                          alt={item.logoAlt ?? item.label}
                                                          fill
                                                          sizes="20px"
                                                          className={item.logoClassName}
                                                      />
                                                  </div>
                                              ) : Icon ? (
                                                  <Icon width={20} height={20} strokeWidth={1.8} />
                                              ) : null}
                                          </div>
                                      </div>
                                      <p className="mt-auto text-base font-semibold text-brand-dark">
                                          {item.label}
                                      </p>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              </section>
      
      
              
              
              
              <section id="portfolio" className="py-20 bg-white border-t border-brand-border">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                          <span className="text-xs font-semibold text-accent-purple uppercase tracking-wider">Selected Works</span>
                          <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Proven digital systems in production</h2>
                          <p className="text-brand-muted text-sm md:text-base">Studi kasus pengembangan platform kompleks dari tahap inisiasi arsitektur database hingga deployment siap pakai.</p>
                      </div>
                      <div className="flex justify-center mb-12">
                          <Link href="/portfolio" className="inline-flex items-center justify-center px-5 py-3 bg-white text-brand-dark border border-brand-border text-sm font-medium rounded-button hover:bg-gray-50 transition-all">
                              Lihat semua portfolio
                          </Link>
                      </div>
      
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          
                          
                          <article className="group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 text-xs">Thumbnail Placeholder</div>
                                  <img src="https://picsum.photos/600/400?random=1" alt="Asset Management System" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-purple bg-accent-purple/5 px-2 py-0.5 rounded w-fit">Enterprise App</span>
                                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">Asset Management System</h3>
                                  <p className="text-xs text-brand-muted line-clamp-2">Sistem pelacakan inventaris internal, depresiasi otomatis barang, dan approval module berbasis multi-gudang.</p>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Laravel 11</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">InertiaJS</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">PostgreSQL</span>
                                  </div>
                                  <Link href="/portfolio/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-4 mt-auto group-hover:text-accent-purple transition-colors">
                                      Lihat Studi Kasus <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article className="group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 text-xs">Thumbnail Placeholder</div>
                                  <img src="https://picsum.photos/600/400?random=2" alt="Inventory Dashboard" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-blue bg-accent-blue/5 px-2 py-0.5 rounded w-fit">Dashboard</span>
                                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">Real-time Inventory Dashboard</h3>
                                  <p className="text-xs text-brand-muted line-clamp-2">Visualisasi stok pergudangan real-time dengan integrasi scanner barcode dan push notification via WebSocket.</p>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Laravel Octane</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">VueJS</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Redis</span>
                                  </div>
                                  <Link href="/portfolio/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-4 mt-auto group-hover:text-accent-blue transition-colors">
                                      Lihat Studi Kasus <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article className="group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 text-xs">Thumbnail Placeholder</div>
                                  <img src="https://picsum.photos/600/400?random=3" alt="HRIS Platform" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-pink bg-accent-pink/5 px-2 py-0.5 rounded w-fit">SaaS App</span>
                                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">SaaS HRIS Platform</h3>
                                  <p className="text-xs text-brand-muted line-clamp-2">Sistem manajemen performa karyawan, absensi geofencing, kalkulasi payroll otomatis berstandar perpajakan lokal.</p>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Laravel Multi-tenant</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">AlpineJS</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">MySQL</span>
                                  </div>
                                  <Link href="/portfolio/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-4 mt-auto group-hover:text-accent-pink transition-colors">
                                      Lihat Studi Kasus <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article className="group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 text-xs">Thumbnail Placeholder</div>
                                  <img src="https://picsum.photos/600/400?random=4" alt="Finance Reporting App" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-green bg-accent-green/5 px-2 py-0.5 rounded w-fit">Finance</span>
                                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">Finance Reporting Architecture</h3>
                                  <p className="text-xs text-brand-muted line-clamp-2">Engine kalkulasi laporan rugi-laba perusahaan dengan enkripsi data transaksi tingkat tinggi dan audit log end-to-end.</p>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">PHP 8.3</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Laravel Eloquent</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Tailwind</span>
                                  </div>
                                  <Link href="/portfolio/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-4 mt-auto group-hover:text-accent-green transition-colors">
                                      Lihat Studi Kasus <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article className="group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 text-xs">Thumbnail Placeholder</div>
                                  <img src="https://picsum.photos/600/400?random=5" alt="Company Profile CMS" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-orange bg-accent-orange/5 px-2 py-0.5 rounded w-fit">CMS</span>
                                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">High-Performance Profile CMS</h3>
                                  <p className="text-xs text-brand-muted line-clamp-2">Content Management System modular yang dioptimalkan khusus untuk SEO, pemuatan gambar cepat, dan *low latency*.</p>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">FilamentCMS</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Tailwind</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">SQLite</span>
                                  </div>
                                  <Link href="/portfolio/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-4 mt-auto group-hover:text-accent-orange transition-colors">
                                      Lihat Studi Kasus <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article className="group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/30 text-xs">Thumbnail Placeholder</div>
                                  <img src="https://picsum.photos/600/400?random=6" alt="API Integration Platform" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-purple bg-accent-purple/5 px-2 py-0.5 rounded w-fit">Backend Integrations</span>
                                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">Omnichannel API Hub</h3>
                                  <p className="text-xs text-brand-muted line-clamp-2">Pusat integrasi API yang menjembatani web e-commerce dengan ekspedisi pihak ketiga dan gerbang pembayaran nasional.</p>
                                  <div className="flex flex-wrap gap-1.5 pt-2">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Laravel API</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Redis Queue</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-brand-dark font-medium">Webhooks</span>
                                  </div>
                                  <Link href="/portfolio/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-4 mt-auto group-hover:text-accent-purple transition-colors">
                                      Lihat Studi Kasus <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                      </div>
                  </div>
              </section>
      
      
              
              
              
              <section id="workflow" className="py-20 bg-white border-t border-brand-border">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                      
                      
                      <div className="md:col-span-5 sticky top-24">
                          <div className="border border-brand-border p-6 rounded-card bg-gray-50/50 space-y-4 shadow-soft">
                              <div className="aspect-[4/3] w-full bg-white border border-brand-border rounded flex items-center justify-center text-brand-muted text-xs">
                                  
                              </div>
                              <div>
                                  <h4 className="text-sm font-semibold text-brand-dark">Arsitektur Terarah & Terukur</h4>
                                  <p className="text-xs text-brand-muted mt-1">Mengurangi redundansi kode serta menghindari bottleneck database semenjak hari pertama proyek dimulai.</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="md:col-span-7 space-y-8">
                          <div className="space-y-3">
                              <span className="text-xs font-semibold text-accent-pink uppercase tracking-wider">How I Work</span>
                              <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">A structured process to ship reliable products</h2>
                          </div>
      
                          
                          <div className="relative pl-6 border-l border-brand-border space-y-10 mt-8">
                              
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">01</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Discovery & Requirement Mapping</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Bedah kebutuhan bisnis klien untuk menetapkan fungsionalitas sistem informasi, kebutuhan user role, cakupan skalabilitas, serta penentuan timeline rilis yang masuk akal.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">02</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Database & Architecture Planning</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Merancang skema Entity-Relationship Diagram (ERD), normalisasi data, pendefinisian relasi tabel, indeks kolom penting, serta menetapkan API design pattern yang bersih.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">03</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Clean Implementation</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Penulisan kode berbasis standar PSR-12, pemanfaatan Service Classes, Form Requests, Observers, serta pemisahan logika bisnis yang rigid dari controller agar project mudah di-maintain jangka panjang.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">04</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Testing & Optimasi</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Menjalankan PHPUnit testing, penanganan N+1 query menggunakan eager loading, serta optimasi caching data menggunakan Redis guna memangkas *response time* aplikasi.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">05</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Deployment & Maintenance</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Mengotomatisasi siklus deploy melalui CI/CD pipeline, konfigurasi server Nginx via Laravel Forge, serta integrasi logging error real-time untuk memastikan *high-availability*.
                                  </p>
                              </div>
      
                          </div>
                      </div>
      
                  </div>
              </section>
      
      
              
              
              
              <section id="blog" className="py-20 bg-white border-t border-brand-border">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                          <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">Technical Writing</span>
                          <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Insights from engineering trenches</h2>
                          <p className="text-brand-muted text-sm md:text-base">Berbagi pengalaman empiris seputar optimasi performa framework, rancangan sistem backend, serta dokumentasi best practice.</p>
                      </div>
      
                                      <div className="flex justify-center mb-12">
                          <Link href="/articles" className="inline-flex items-center justify-center px-5 py-3 bg-white text-brand-dark border border-brand-border text-sm font-medium rounded-button hover:bg-gray-50 transition-all">
                              Lihat semua artikel
                          </Link>
                      </div>
      
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          
                          
                          <article className="group flex flex-col space-y-3">
                              <div className="aspect-[16/10] bg-gray-100 rounded-card overflow-hidden border border-brand-border">
                                  <img src="https://picsum.photos/600/380?random=11" alt="Laravel Performance Optimasi" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-brand-muted pt-1">
                                  <span>Optimasi</span>
                                  <span>•</span>
                                  <time dateTime="2026-05-10">May 10, 2026</time>
                              </div>
                              <h3 className="text-base font-semibold text-brand-dark leading-snug group-hover:text-accent-purple transition-colors">
                                  <Link href="/articles/detail">Deep Dive: Laravel Performance Optimasi on High Traffic API Platforms</Link>
                              </h3>
                              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                                  Panduan komprehensif mengkonfigurasi Laravel Octane, database pooling, dan strategi chunking data untuk meminimalkan beban memori server.
                              </p>
                              <Link href="/articles/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-2 group-hover:underline">
                                  Baca Artikel <span className="ml-1">→</span>
                              </Link>
                          </article>
      
                          
                          <article className="group flex flex-col space-y-3">
                              <div className="aspect-[16/10] bg-gray-100 rounded-card overflow-hidden border border-brand-border">
                                  <img src="https://picsum.photos/600/380?random=12" alt="Database Schema" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-brand-muted pt-1">
                                  <span>Database Architecture</span>
                                  <span>•</span>
                                  <time dateTime="2026-04-22">Apr 22, 2026</time>
                              </div>
                              <h3 className="text-base font-semibold text-brand-dark leading-snug group-hover:text-accent-blue transition-colors">
                                  <Link href="/articles/detail">Designing Maintainable Database Schemas For E-commerce Scaling</Link>
                              </h3>
                              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                                  Menghindari jebakan arsitektur database relasional, cara tepat mendesain composite index, dan kapan waktu ideal menggunakan skema denormalisasi.
                              </p>
                              <Link href="/articles/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-2 group-hover:underline">
                                  Baca Artikel <span className="ml-1">→</span>
                              </Link>
                          </article>
      
                          
                          <article className="group flex flex-col space-y-3">
                              <div className="aspect-[16/10] bg-gray-100 rounded-card overflow-hidden border border-brand-border">
                                  <img src="https://picsum.photos/600/380?random=13" alt="Secure Dashboard" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-brand-muted pt-1">
                                  <span>Keamanan</span>
                                  <span>•</span>
                                  <time dateTime="2026-03-15">Mar 15, 2026</time>
                              </div>
                              <h3 className="text-base font-semibold text-brand-dark leading-snug group-hover:text-accent-pink transition-colors">
                                  <Link href="/articles/detail">Building Secure Admin Dashboards: RBAC Best Practices in Inti Laravel</Link>
                              </h3>
                              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                                  Menerapkan Role-Based Access Control secara aman menggunakan native Gates dan Policies, dilengkapi mitigasi celah keamanan IDOR.
                              </p>
                              <Link href="/articles/detail" className="text-xs font-medium text-brand-dark inline-flex items-center pt-2 group-hover:underline">
                                  Baca Artikel <span className="ml-1">→</span>
                              </Link>
                          </article>
      
                      </div>
                  </div>
              </section>
      
      
              
              
              
              <section id="contact" className="py-16 bg-white px-6">
                  <div className="max-w-7xl mx-auto bg-brand-dark rounded-card text-white p-8 md:p-16 relative overflow-hidden shadow-soft">
                      
                      <div className="absolute -top-12 -right-12 w-44 h-44 bg-accent-purple/10 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-8 left-1/3 w-32 h-32 bg-accent-pink/10 rounded-full blur-xl"></div>
                      
                      <div className="max-w-2xl relative z-10 space-y-6">
                          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded">
                              Let's work together
                          </span>
                          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2]">
                              Butuh engineer yang bisa bantu mewujudkan ide jadi aplikasi web yang scalable??
                          </h2>
                          <p className="text-sm md:text-base text-gray-400 max-w-lg leading-relaxed">
                              Konsultasikan kebutuhan sistem informasi, migrasi database legacy, atau kustomisasi web core platform Anda secara profesional bersama saya.
                          </p>
                          
                          <div className="flex flex-wrap gap-4 pt-4">
                              <a href="mailto:hello@aryadwiputra.com" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-dark text-sm font-medium rounded-button hover:bg-opacity-95 transition-all font-semibold">
                                  Start a Project
                              </a>
                              <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border border-gray-700 text-sm font-medium rounded-button hover:bg-gray-800 transition-all">
                                  Tentang Saya
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
      
      
          
          
          
          <footer className="bg-white border-t border-brand-border py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  
                  
                  <div className="md:col-span-4 space-y-4">
                      <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark">
                          arya<span className="text-accent-purple">dwiputra</span>
                      </Link>
                      <p className="text-xs text-brand-muted leading-relaxed max-w-xs">
                          Senior Laravel Engineer yang berfokus membangun produk digital berkualitas tinggi berbasis arsitektur server-side handal dan antarmuka interaktif modern.
                      </p>
                  </div>
      
                  
                  <div className="md:col-span-2 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Navigasi</h4>
                      <ul className="space-y-2 text-xs">
                          <li><Link href="/" className="text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link></li>
                          <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link></li>
                          <li><Link href="/articles" className="text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link></li>
                          <li><Link href="/about" className="text-brand-muted hover:text-brand-dark transition-colors">Tentang</Link></li>
                      </ul>
                  </div>
      
                  
                  <div className="md:col-span-3 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Layanan</h4>
                      <ul className="space-y-2 text-xs text-brand-muted">
                          <li>Backend API Development</li>
                          <li>Rekayasa Database & Profiling</li>
                          <li>Custom System Integration</li>
                          <li>Fullstack App Architecture</li>
                      </ul>
                  </div>
      
                  
                  <div className="md:col-span-3 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Terhubung</h4>
                      <ul className="space-y-2 text-xs">
                          <li><a href="https://github.com" target="_blank" rel="noopener" className="text-brand-muted hover:text-brand-dark transition-colors inline-flex items-center">GitHub</a></li>
                          <li><a href="https://linkedin.com" target="_blank" rel="noopener" className="text-brand-muted hover:text-brand-dark transition-colors inline-flex items-center">LinkedIn</a></li>
                          <li><a href="mailto:hello@aryadwiputra.com" className="text-brand-muted hover:text-brand-dark transition-colors">hello@aryadwiputra.com</a></li>
                      </ul>
                  </div>
      
              </div>
      
              
              <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-brand-muted">
                  <p>&copy; 2026 Arya Dwi Putra. All rights reserved.</p>
                  <p className="text-gray-400">Dirancang dengan pendekatan visual modern yang tetap simpel dan nyaman dibaca.</p>
              </div>
          </footer>
    </>
  );
}
