/* eslint-disable */
"use client";

import { useEffect } from "react";
import Link from "next/link";

export function PortfolioPageClient() {
  useEffect(() => {
    
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
    const emptyState = document.getElementById('portfolio-empty');
    const handlers: Array<() => void> = [];
    filterButtons.forEach((button) => {
      const handler = () => {
        const currentFilter = button.dataset.filter ?? 'all';
        filterButtons.forEach((item) => {
          item.classList.remove('bg-brand-dark', 'text-white', 'shadow-soft');
          item.classList.add('bg-white', 'text-brand-dark', 'border', 'border-brand-border');
        });
        button.classList.add('bg-brand-dark', 'text-white', 'shadow-soft');
        button.classList.remove('bg-white', 'text-brand-dark', 'border', 'border-brand-border');
        let visibleCount = 0;
        projectCards.forEach((card) => {
          const categories = card.dataset.category ?? '';
          const isVisible = currentFilter === 'all' || categories.includes(currentFilter);
          if (isVisible) {
            card.classList.remove('is-hidden');
            visibleCount += 1;
          } else {
            card.classList.add('is-hidden');
          }
        });
        if (emptyState) {
          emptyState.classList.toggle('hidden', visibleCount !== 0);
        }
      };
      button.addEventListener('click', handler);
      handlers.push(() => button.removeEventListener('click', handler));
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  return (
    <>
      <div className="portfolio-floating">
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-border hidden md:block">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark hover:opacity-80 transition-opacity">
                      arya<span className="text-accent-purple">dwiputra</span>
                  </Link>
                  <nav className="flex items-center space-x-8">
                      <Link href="/" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link>
                      <Link href="/" className="text-sm font-medium text-brand-dark hover:text-accent-purple transition-colors">Portfolio</Link>
                      <Link href="/articles" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link>
                      <Link href="/about" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Tentang</Link>
                      <Link href="/contact" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Kontak</Link>
                  </nav>
                  <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 bg-brand-dark text-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all shadow-soft">
                      Yuk Ngobrol
                  </Link>
              </div>
          </header>
      
          
          <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-border px-4 py-2.5 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-4 justify-items-center items-center">
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Beranda</span>
                  </Link>
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-dark">
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
              
              <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-brand-border">
                  
                  <div className="absolute top-16 left-12 w-10 h-10 rounded-full border-[3px] border-accent-purple/20 animate-float-1 hidden sm:block"></div>
                  <div className="absolute bottom-12 right-16 w-6 h-6 bg-accent-blue/5 border border-accent-blue/20 rounded-card animate-float-2 hidden sm:block"></div>
                  
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                      <div className="lg:col-span-8 space-y-6">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-3 py-1 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span> Selected Works
                          </span>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-brand-dark">
                              Studi kasus produk digital, arsitektur data, dan integrasi skala enterprise.
                          </h1>
                          <p className="text-base md:text-lg text-brand-muted max-w-3xl leading-relaxed">
                              Kumpulan proyek representatif yang menguji kapabilitas saya dalam memecahkan masalah bisnis nyata melalui ekosistem **Laravel**, optimasi query kompleks, serta pengiriman kode yang *clean* dan terstruktur.
                          </p>
                      </div>
                      
                      
                      <div className="lg:col-span-4 w-full">
                          <div className="bg-white rounded-card border border-brand-border p-6 shadow-soft relative overflow-hidden group">
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent -z-10 rounded-bl-full"></div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40 border-b border-brand-border pb-3">Konteks Produksi</p>
                              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
                                  <div>
                                      <span className="block text-3xl font-semibold text-brand-dark tracking-tight">06</span>
                                      <span className="text-xs text-brand-muted mt-0.5 block">Sistem Aktif</span>
                                  </div>
                                  <div>
                                      <span className="block text-3xl font-semibold text-brand-dark tracking-tight">4+</span>
                                      <span className="text-xs text-brand-muted mt-0.5 block">Domain Industri</span>
                                  </div>
                                  <div>
                                      <span className="block text-xs font-semibold text-accent-purple bg-accent-purple/5 px-2 py-0.5 rounded w-fit mt-1">Laravel 11+</span>
                                      <span className="text-[11px] text-brand-muted mt-1 block">Backend Inti</span>
                                  </div>
                                  <div>
                                      <span className="block text-xs font-semibold text-accent-green bg-accent-green/5 px-2 py-0.5 rounded w-fit mt-1">Robust</span>
                                      <span className="text-[11px] text-brand-muted mt-1 block">End-to-End Delivery</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
      
              
              <section className="sticky top-16 z-40 py-4 bg-white/80 backdrop-blur-md border-b border-brand-border transition-all">
                  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between overflow-x-auto no-scrollbar gap-4" id="portfolio-filters">
                      <div className="flex items-center gap-2">
                          <button data-filter="all" className="filter-btn h-9 inline-flex items-center justify-center px-4 text-xs font-medium bg-brand-dark text-white rounded-button transition-all shadow-soft whitespace-nowrap">
                              All Projects
                          </button>
                          <button data-filter="laravel" className="filter-btn h-9 inline-flex items-center justify-center px-4 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">
                              Laravel Ecosystem
                          </button>
                          <button data-filter="fullstack" className="filter-btn h-9 inline-flex items-center justify-center px-4 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">
                              Fullstack (Inertia/Vue)
                          </button>
                          <button data-filter="dashboard" className="filter-btn h-9 inline-flex items-center justify-center px-4 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">
                              Dashboard Internal
                          </button>
                          <button data-filter="integration" className="filter-btn h-9 inline-flex items-center justify-center px-4 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">
                              API & Integration
                          </button>
                      </div>
                      <div className="text-[11px] text-brand-muted font-medium hidden sm:block whitespace-nowrap bg-gray-50 px-2.5 py-1 rounded border border-brand-border">
                          Showing <span id="project-count" className="text-brand-dark font-semibold">6</span> projects
                      </div>
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" id="project-grid">
                          
                          
                          <article data-category="laravel fullstack dashboard" className="project-card group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-[16/10] w-full bg-gray-50 relative overflow-hidden border-b border-brand-border">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Placeholder Gambar [600x375]</div>
                                  <img src="https://picsum.photos/600/375?random=1" alt="Asset Management System" className="w-full h-full object-cover opacity-90 filter grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300 mix-blend-multiply" />
                              </div>
                              <div className="p-6 flex flex-col flex-grow space-y-3.5">
                                  <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-0.5 rounded">Logistics & Asset</span>
                                      <span className="text-xs font-mono text-brand-muted">2026</span>
                                  </div>
                                  <h2 className="text-xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-purple transition-colors">
                                      Asset Management System (shelf.nu Model)
                                  </h2>
                                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                                      Sistem kustom pelacakan aset internal, depresiasi nilai otomatis barang penyusutan, alur persetujuan bertingkat (*multi-level approval*), dan manajemen multi-gudang.
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Laravel 11</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">InertiaJS</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">React</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Tailwind</span>
                                  </div>
                                  <div className="pt-4 mt-auto border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-purple transition-colors">
                                          Lihat Studi Kasus <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                      </Link>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article data-category="laravel dashboard" className="project-card group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-[16/10] w-full bg-gray-50 relative overflow-hidden border-b border-brand-border">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Placeholder Gambar [600x375]</div>
                                  <img src="https://picsum.photos/600/375?random=2" alt="Inventory Dashboard" className="w-full h-full object-cover opacity-90 filter grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300 mix-blend-multiply" />
                              </div>
                              <div className="p-6 flex flex-col flex-grow space-y-3.5">
                                  <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/5 px-2.5 py-0.5 rounded">Distributor ERP</span>
                                      <span className="text-xs font-mono text-brand-muted">2026</span>
                                  </div>
                                  <h2 className="text-xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-blue transition-colors">
                                      Dashboard Inventaris Gudang Real-time
                                  </h2>
                                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                                      Modernisasi sistem legacy menjadi dashboard manajemen inventaris multi-gudang terpusat untuk monitoring stok, manajemen purchasing order, dan tracking manifest barang.
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Laravel Octane</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">MySQL</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Redis Cache</span>
                                  </div>
                                  <div className="pt-4 mt-auto border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-blue transition-colors">
                                          Lihat Studi Kasus <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                      </Link>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article data-category="fullstack dashboard" className="project-card group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-[16/10] w-full bg-gray-50 relative overflow-hidden border-b border-brand-border">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Placeholder Gambar [600x375]</div>
                                  <img src="https://picsum.photos/600/375?random=3" alt="HRIS Platform" className="w-full h-full object-cover opacity-90 filter grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300 mix-blend-multiply" />
                              </div>
                              <div className="p-6 flex flex-col flex-grow space-y-3.5">
                                  <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-pink bg-accent-pink/5 px-2.5 py-0.5 rounded">SaaS Platform</span>
                                      <span className="text-xs font-mono text-brand-muted">2025</span>
                                  </div>
                                  <h2 className="text-xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-pink transition-colors">
                                      Enterprise SaaS HRIS & Automated Payroll Hub
                                  </h2>
                                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                                      Portal manajemen internal SDM, pencatatan absensi berbasis geofencing, kalkulasi komponen *payroll* otomatis berstandar perpajakan lokal, dan SLA KPI.
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Filament v3</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">AlpineJS</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">PostgreSQL</span>
                                  </div>
                                  <div className="pt-4 mt-auto border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-pink transition-colors">
                                          Lihat Studi Kasus <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                      </Link>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article data-category="laravel integration" className="project-card group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-[16/10] w-full bg-gray-50 relative overflow-hidden border-b border-brand-border">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Placeholder Gambar [600x375]</div>
                                  <img src="https://picsum.photos/600/375?random=4" alt="Finance Reporting App" className="w-full h-full object-cover opacity-90 filter grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300 mix-blend-multiply" />
                              </div>
                              <div className="p-6 flex flex-col flex-grow space-y-3.5">
                                  <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-orange bg-accent-orange/5 px-2.5 py-0.5 rounded">Fintech Inti</span>
                                      <span className="text-xs font-mono text-brand-muted">2025</span>
                                  </div>
                                  <h2 className="text-xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-orange transition-colors">
                                      Pusat Rekonsiliasi dan Audit Keuangan
                                  </h2>
                                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                                      Engine background processor untuk sinkronisasi, validasi kepatuhan aturan bisnis keuangan, enkripsi data transaksi tinggi, dan pencatatan audit log mutasi saldo masif.
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">PHP 8.3 Enforce</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Sanctum</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Queue Scheduler</span>
                                  </div>
                                  <div className="pt-4 mt-auto border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-orange transition-colors">
                                          Lihat Studi Kasus <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                      </Link>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article data-category="laravel fullstack" className="project-card group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-[16/10] w-full bg-gray-50 relative overflow-hidden border-b border-brand-border">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Placeholder Gambar [600x375]</div>
                                  <img src="https://picsum.photos/600/375?random=5" alt="Omnichannel Multichat Platform" className="w-full h-full object-cover opacity-90 filter grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300 mix-blend-multiply" />
                              </div>
                              <div className="p-6 flex flex-col flex-grow space-y-3.5">
                                  <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-green bg-accent-green/5 px-2.5 py-0.5 rounded">Omnichannel Hub</span>
                                      <span className="text-xs font-mono text-brand-muted">2026</span>
                                  </div>
                                  <h2 className="text-xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-green transition-colors">
                                      Datakelola Omnichannel Multichat Platform
                                  </h2>
                                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                                      Pembangunan arsitektur perpesanan tersentralisasi yang menghubungkan berbagai API chat stream masuk ke satu dasbor manajemen agen terpadu dengan respon latensi rendah.
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Laravel API</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">VueJS 3</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Webhooks Hub</span>
                                  </div>
                                  <div className="pt-4 mt-auto border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-green transition-colors">
                                          Lihat Studi Kasus <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                      </Link>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article data-category="integration fullstack" className="project-card group bg-white border border-brand-border rounded-card overflow-hidden hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col">
                              <div className="aspect-[16/10] w-full bg-gray-50 relative overflow-hidden border-b border-brand-border">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Placeholder Gambar [600x375]</div>
                                  <img src="https://picsum.photos/600/375?random=6" alt="Online Travel Agent Komodo Voyage" className="w-full h-full object-cover opacity-90 filter grayscale group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300 mix-blend-multiply" />
                              </div>
                              <div className="p-6 flex flex-col flex-grow space-y-3.5">
                                  <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-0.5 rounded">Mesin Booking</span>
                                      <span className="text-xs font-mono text-brand-muted">2026</span>
                                  </div>
                                  <h2 className="text-xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-purple transition-colors">
                                      Komodo Voyage — Online Travel Mesin Booking
                                  </h2>
                                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                                      Platform OTA kustom berskala komersial tinggi. Mengintegrasikan pemesanan tiket, sinkronisasi manifes perjalanan kapal otomatis, sistem invoice otomatis, dan *payment gateway hub*.
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Laravel Inti</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Blade Component</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark font-medium">Third Party API</span>
                                  </div>
                                  <div className="pt-4 mt-auto border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-purple transition-colors">
                                          Lihat Studi Kasus <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                      </Link>
                                  </div>
                              </div>
                          </article>
      
                      </div>
                      
                      
                      <div id="portfolio-empty" className="hidden text-center py-20 border border-dashed border-brand-border rounded-card bg-gray-50/50">
                          <p className="text-sm text-brand-muted font-medium">Tidak ada proyek yang sesuai dengan kategori filter terpilih.</p>
                      </div>
                  </div>
              </section>
      
              
              <section className="py-20 border-y border-brand-border bg-brand-dark text-white relative overflow-hidden">
                  
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
                  
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      <div className="lg:col-span-8 space-y-4">
                          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent-green bg-accent-green/10 border border-accent-green/20 px-2.5 py-1 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span> Open for collaboration
                          </span>
                          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2]">
                              Mencari partner teknis berpengalaman untuk mengamankan backend platform Anda?
                          </h2>
                          <p className="text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed">
                              Saya terbiasa bergabung sejak tahap inisiasi arsitektur (*discovery phase*), stabilisasi sistem *legacy* yang rentan kolaps, hingga implementasi modul kritis yang membutuhkan *delivery* cepat namun tetap *maintainable*.
                          </p>
                      </div>
                      <div className="lg:col-span-4 flex lg:justify-end">
                          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 bg-white text-brand-dark text-sm font-semibold rounded-button hover:bg-gray-50 transition-all shadow-soft group">
                              Diskusikan Proyek <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                      </div>
                  </div>
              </section>
          </main>
          
      
          
          <footer className="bg-white border-t border-brand-border py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-4 space-y-4">
                      <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark">arya<span className="text-accent-purple">dwiputra</span></Link>
                      <p className="text-xs text-brand-muted leading-relaxed max-w-xs">Senior Laravel Engineer yang berfokus membangun produk digital berkualitas tinggi berbasis arsitektur server-side handal dan antarmuka interaktif modern.</p>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Navigasi</h4>
                      <ul className="space-y-2 text-xs">
                          <li><Link href="/" className="text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link></li>
                          <li><Link href="/" className="text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link></li>
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
      </div>
    </>
  );
}
