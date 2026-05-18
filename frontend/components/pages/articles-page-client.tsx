"use client";

import { useEffect } from "react";
import Link from "next/link";

export function ArticlesPageClient() {
  useEffect(() => {
    
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('.article-filter');
    const articleCards = document.querySelectorAll<HTMLElement>('.article-card');
    const searchInput = document.getElementById('article-search') as HTMLInputElement | null;
    const emptyState = document.getElementById('article-empty');
    let activeFilter = 'all';
    const performFiltering = () => {
      const searchValue = searchInput?.value.toLowerCase() ?? '';
      let matchCount = 0;
      articleCards.forEach((card) => {
        const categories = card.dataset.category ?? '';
        const matchesCategory = activeFilter === 'all' || categories.includes(activeFilter);
        const titles = Array.from(card.querySelectorAll('h2,a')).map((item) => item.textContent?.toLowerCase() ?? '').join(' ');
        const descriptions = Array.from(card.querySelectorAll('p')).map((item) => item.textContent?.toLowerCase() ?? '').join(' ');
        const matchesSearch = titles.includes(searchValue) || descriptions.includes(searchValue);
        if (matchesCategory && matchesSearch) {
          card.classList.remove('is-hidden');
          matchCount += 1;
        } else {
          card.classList.add('is-hidden');
        }
      });
      if (emptyState) {
        emptyState.classList.toggle('hidden', matchCount !== 0);
      }
    };
    const buttonHandlers: Array<() => void> = [];
    filterButtons.forEach((button) => {
      const handler = () => {
        activeFilter = button.dataset.filter ?? 'all';
        filterButtons.forEach((item) => {
          item.classList.remove('bg-brand-dark', 'text-white', 'shadow-soft');
          item.classList.add('bg-white', 'text-brand-dark', 'border', 'border-brand-border');
        });
        button.classList.add('bg-brand-dark', 'text-white', 'shadow-soft');
        button.classList.remove('bg-white', 'text-brand-dark', 'border', 'border-brand-border');
        performFiltering();
      };
      button.addEventListener('click', handler);
      buttonHandlers.push(() => button.removeEventListener('click', handler));
    });
    const inputHandler = () => performFiltering();
    searchInput?.addEventListener('input', inputHandler);
    performFiltering();
    return () => {
      buttonHandlers.forEach((cleanup) => cleanup());
      searchInput?.removeEventListener('input', inputHandler);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-border hidden md:block">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark">
                      arya<span className="text-accent-purple">dwiputra</span>
                  </Link>
                  <nav className="flex items-center space-x-8">
                      <Link href="/" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link>
                      <Link href="/portfolio" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link>
                      <Link href="/" className="text-sm font-medium text-brand-dark hover:text-accent-purple transition-colors">Artikel</Link>
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
                  <Link href="/portfolio" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Portfolio</span>
                  </Link>
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-dark">
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
              
              <section className="border-b border-brand-border bg-white">
                  <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      
                      
                      <div className="lg:col-span-7 space-y-5">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/5 px-3 py-1 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span> Notes & Insights
                          </span>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-brand-dark">
                              Artikel tentang engineering, delivery produk, dan keputusan teknis harian.
                          </h1>
                          <p className="text-base md:text-lg text-brand-muted max-w-2xl leading-relaxed">
                              Dokumentasi empiris dari sudut pandang arsitektur sistem: mengupas optimasi performa Laravel, taktik normalisasi database, hingga manajemen ruang lingkup produk digital secara taktis.
                          </p>
                      </div>
      
                      
                      <div className="lg:col-span-5 w-full lg:mt-6">
                          <div className="bg-white rounded-card border border-brand-border p-6 shadow-soft space-y-5">
                              
                              
                              <div className="space-y-2">
                                  <label className="text-[11px] uppercase tracking-widest font-semibold text-brand-dark/50">Cari Artikel</label>
                                  <div className="relative">
                                      <input type="text" id="article-search" placeholder="Ketik kata kunci judul..." className="w-full h-10 px-3 pr-10 border border-brand-border rounded-button text-sm focus:border-brand-dark focus:ring-0 transition-colors placeholder:text-gray-400" />
                                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-brand-muted">
                                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                      </div>
                                  </div>
                              </div>
      
                              
                              <div className="space-y-2.5">
                                  <label className="text-[11px] uppercase tracking-widest font-semibold text-brand-dark/50 block">Kategori Topik</label>
                                  <div className="flex flex-wrap gap-1.5" id="filter-wrapper">
                                      <button data-filter="all" className="article-filter h-8 inline-flex items-center justify-center px-3.5 text-xs font-medium bg-brand-dark text-white rounded-button transition-all shadow-soft whitespace-nowrap">Semua</button>
                                      <button data-filter="laravel" className="article-filter h-8 inline-flex items-center justify-center px-3.5 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">Laravel</button>
                                      <button data-filter="database" className="article-filter h-8 inline-flex items-center justify-center px-3.5 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">Database</button>
                                      <button data-filter="architecture" className="article-filter h-8 inline-flex items-center justify-center px-3.5 bg-white text-brand-dark border border-brand-border text-xs font-medium rounded-button hover:border-brand-dark transition-all whitespace-nowrap">Architecture</button>
                                  </div>
                              </div>
      
                          </div>
                      </div>
      
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-6">
                      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12" id="articles-container">
                          
                          
                          <article data-category="laravel architecture" className="article-card group bg-white border border-brand-border rounded-card p-6 md:p-8 shadow-soft hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col justify-between">
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between text-xs">
                                      <span className="font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-0.5 rounded">Laravel &bull; 8 min baca</span>
                                      <time className="text-brand-muted font-mono" dateTime="2026-05-12">12 Mei 2026</time>
                                  </div>
                                  <h2 className="text-2xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-purple transition-colors">
                                      <Link href="/articles/detail">Merapikan Fondasi Laravel Sebelum Trafik Bertambah</Link>
                                  </h2>
                                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                                      Tanda-tanda awal aplikasi akan mulai kewalahan sering muncul jauh sebelum server benar-benar tumbang. Artikel ini membahas indikator praktis penanganan N+1 query, penyusunan Service Classes yang terisolasi, serta langkah stabilisasi arsitektur sejak dini.
                                  </p>
                              </div>
                              <div className="mt-6 pt-4 border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                  <div className="flex gap-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Refactoring</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Scale</span>
                                  </div>
                                  <Link href="/articles/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-purple transition-colors">
                                      Baca artikel <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article data-category="database" className="article-card group bg-white border border-brand-border rounded-card p-6 md:p-8 shadow-soft hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col justify-between">
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between text-xs">
                                      <span className="font-semibold uppercase tracking-widest text-accent-orange bg-accent-orange/5 px-2.5 py-0.5 rounded">Database &bull; 6 min baca</span>
                                      <time className="text-brand-muted font-mono" dateTime="2026-05-03">03 Mei 2026</time>
                                  </div>
                                  <h2 className="text-2xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-orange transition-colors">
                                      <Link href="/articles/detail">Mengurangi Query Mahal di Dashboard Operasional</Link>
                                  </h2>
                                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                                      Dashboard sering lambat bukan karena volume datanya yang terlalu besar secara mutlak, melainkan karena eksekusi sub-query agregasi berulang yang tidak terindeks. Kita bedah trik implementasi database view dan caching layer bermutu.
                                  </p>
                              </div>
                              <div className="mt-6 pt-4 border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                  <div className="flex gap-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Indexing</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">MySQL</span>
                                  </div>
                                  <Link href="/articles/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-orange transition-colors">
                                      Baca artikel <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article data-category="architecture" className="article-card group bg-white border border-brand-border rounded-card p-6 md:p-8 shadow-soft hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col justify-between">
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between text-xs">
                                      <span className="font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/5 px-2.5 py-0.5 rounded">Architecture &bull; 7 min baca</span>
                                      <time className="text-brand-muted font-mono" dateTime="2026-04-28">28 April 2026</time>
                                  </div>
                                  <h2 className="text-2xl font-semibold tracking-tight text-brand-dark text-brand-dark leading-snug group-hover:text-accent-blue transition-colors">
                                      <Link href="/articles/detail">Kapan Sebaiknya Memecah Modul Menjadi Service Terpisah?</Link>
                                  </h2>
                                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                                      Tidak semua problem perlu dipecah menjadi microservices. Pembahasan taktis mengenai batas konteks domain (*bounded contexts*), pola mutasi data, serta kalkulasi ongkos overhead infrastruktur sebelum melakukan split modul.
                                  </p>
                              </div>
                              <div className="mt-6 pt-4 border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                  <div className="flex gap-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Monolith</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">DDD</span>
                                  </div>
                                  <Link href="/articles/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-blue transition-colors">
                                      Baca artikel <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article data-category="laravel" className="article-card group bg-white border border-brand-border rounded-card p-6 md:p-8 shadow-soft hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col justify-between">
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between text-xs">
                                      <span className="font-semibold uppercase tracking-widest text-accent-green bg-accent-green/5 px-2.5 py-0.5 rounded">Laravel &bull; 5 min baca</span>
                                      <time className="text-brand-muted font-mono" dateTime="2026-04-17">17 April 2026</time>
                                  </div>
                                  <h2 className="text-2xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-green transition-colors">
                                      <Link href="/articles/detail">Strategi Queue untuk Proses Bisnis yang Tidak Boleh Menghambat User</Link>
                                  </h2>
                                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                                      Pengalaman pengguna akan melonjak drastis saat proses I/O berat dipindahkan dengan pas ke latar belakang. Memahami konfigurasi worker prioritas, penanganan *failed jobs*, dan sinkronisasi real-time status antrean.
                                  </p>
                              </div>
                              <div className="mt-6 pt-4 border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                  <div className="flex gap-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Redis</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Asynchronous</span>
                                  </div>
                                  <Link href="/articles/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-green transition-colors">
                                      Baca artikel <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article data-category="database architecture" className="article-card group bg-white border border-brand-border rounded-card p-6 md:p-8 shadow-soft hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col justify-between">
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between text-xs">
                                      <span className="font-semibold uppercase tracking-widest text-accent-pink bg-accent-pink/5 px-2.5 py-0.5 rounded">Data Model &bull; 9 min baca</span>
                                      <time className="text-brand-muted font-mono" dateTime="2026-04-10">10 April 2026</time>
                                  </div>
                                  <h2 className="text-2xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-pink transition-colors">
                                      <Link href="/articles/detail">Merancang Skema Data yang Tetap Enak Diubah Saat Produk Bertumbuh</Link>
                                  </h2>
                                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                                      Keputusan awal di level tabel, relasi polimorfik, serta status histori transaksi sangat memengaruhi kelincahan iterasi fitur kedepan. Artikel ini mengupas kaidah menjaga skalabilitas skema tanpa merusak integritas referensial.
                                  </p>
                              </div>
                              <div className="mt-6 pt-4 border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                  <div className="flex gap-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Schema Design</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Migrations</span>
                                  </div>
                                  <Link href="/articles/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-pink transition-colors">
                                      Baca artikel <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                          
                          <article data-category="architecture" className="article-card group bg-white border border-brand-border rounded-card p-6 md:p-8 shadow-soft hover:shadow-soft-hover hover:border-brand-dark/30 transition-all flex flex-col justify-between">
                              <div className="space-y-4">
                                  <div className="flex items-center justify-between text-xs">
                                      <span className="font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-0.5 rounded">Delivery &bull; 6 min baca</span>
                                      <time className="text-brand-muted font-mono" dateTime="2026-04-01">01 April 2026</time>
                                  </div>
                                  <h2 className="text-2xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-accent-purple transition-colors">
                                      <Link href="/articles/detail">Menyusun Scope MVP Tanpa Mengorbankan Fondasi Teknis</Link>
                                  </h2>
                                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                                      MVP yang sukses tidak sama dengan menulis kode asal jadi. Bagaimana membatasi ruang lingkup fitur di sisi bisnis sembari tetap menaruh pondasi unit testing dan pola arsitektur kode yang terukur sejak hari pertama.
                                  </p>
                              </div>
                              <div className="mt-6 pt-4 border-t border-dashed border-brand-border/60 flex items-center justify-between">
                                  <div className="flex gap-1.5">
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">MVP Scope</span>
                                      <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-brand-border rounded text-brand-dark">Product Engineering</span>
                                  </div>
                                  <Link href="/articles/detail" className="text-xs font-semibold text-brand-dark inline-flex items-center group-hover:text-accent-purple transition-colors">
                                      Baca artikel <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                                  </Link>
                              </div>
                          </article>
      
                      </div>
      
                      
                      <div id="articles-empty" className="hidden text-center py-20 border border-dashed border-brand-border rounded-card bg-gray-50/50">
                          <svg className="w-8 h-8 text-brand-muted/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <p className="text-sm text-brand-muted font-medium">Tidak ada artikel teknis yang cocok dengan kata kunci atau filter Anda.</p>
                      </div>
      
                  </div>
              </section>
      
              
              <section className="py-16 bg-white px-6 border-t border-brand-border">
                  <div className="max-w-7xl mx-auto bg-brand-dark rounded-card text-white p-8 md:p-12 relative overflow-hidden shadow-soft flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="absolute -top-24 -right-24 w-56 h-56 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none"></div>
                      
                      <div className="max-w-xl space-y-3 text-center md:text-left">
                          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-accent-green bg-accent-green/10 border border-accent-green/20 px-2.5 py-0.5 rounded">
                              Mailing List Teknis
                          </span>
                          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Dapatkan insight langsung ke inbox Anda</h2>
                          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                              Tulisan mendalam seputar studi kasus sistem enterprise, arsitektur backend, dan optimasi performa framework PHP/Laravel. Tanpa spam, dikirim berkala.
                          </p>
                      </div>
      
                      <div className="w-full md:max-w-md">
                          <form className="flex flex-col sm:flex-row gap-2">
                              <input type="email" required placeholder="Masukkan alamat email Anda" className="w-full h-11 px-4 bg-white/5 border border-gray-800 rounded-button text-sm text-white focus:outline-none focus:border-white focus:ring-0 placeholder:text-gray-500 transition-colors" />
                              <button type="submit" className="h-11 px-5 bg-white text-brand-dark text-xs font-semibold rounded-button hover:bg-gray-100 transition-all whitespace-nowrap">
                                  Langganan
                              </button>
                          </form>
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
                          <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link></li>
                          <li><Link href="/" className="text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link></li>
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
