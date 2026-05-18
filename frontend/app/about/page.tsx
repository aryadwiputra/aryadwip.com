/* eslint-disable */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Tentang Saya — Arya Dwi Putra" };

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-border hidden md:block">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark hover:opacity-80 transition-opacity">
                      arya<span className="text-accent-purple">dwiputra</span>
                  </Link>
                  <nav className="flex items-center space-x-8">
                      <Link href="/" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link>
                      <Link href="/portfolio" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link>
                      <Link href="/articles" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link>
                      <Link href="/" className="text-sm font-medium text-brand-dark hover:text-accent-purple transition-colors">Tentang</Link>
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
                  <Link href="/articles" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Artikel</span>
                  </Link>
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                      <span className="text-[10px] font-medium tracking-wide">Kontak</span>
                  </Link>
              </div>
          </nav>
      
          
          
          
          <main>
              
              <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-brand-border">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                      
                      
                      <div className="lg:col-span-7 space-y-6">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-3 py-1 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span> About Me
                          </span>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-brand-dark">
                              Saya membantu bisnis merapikan arsitektur sistem digital agar siap bertumbuh secara massal.
                          </h1>
                          <p className="text-base md:text-lg text-brand-muted max-w-2xl leading-relaxed">
                              Fokus utama saya bertumpu pada *backend engineering* tangguh berbasis **Laravel**, manajemen performa data relasional, serta pengiriman solusi *end-to-end* pragmatis yang menjembatani kebutuhan logis bisnis dengan operasional harian tim.
                          </p>
                      </div>
      
                      
                      <div className="lg:col-span-5 flex justify-center lg:justify-end">
                          <div className="bg-white p-4 rounded-card border border-brand-border shadow-soft max-w-[320px] md:max-w-sm w-full animate-drift">
                              <div className="aspect-square w-full bg-gray-50 rounded-card overflow-hidden border border-brand-border/60 relative">
                                  <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20 text-xs font-mono">Profile Placeholder</div>
                                  <img src="/assets/arya-dwi-putra.png" alt="Arya Dwi Putra" className="w-full h-full object-cover mix-blend-multiply filter grayscale opacity-95 relative z-10" />
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                  <div>
                                      <h2 className="text-base font-semibold text-brand-dark">Arya Dwi Putra</h2>
                                      <p className="text-xs text-brand-muted mt-0.5">Senior Laravel Engineer &bull; Fullstack Delivery</p>
                                  </div>
                                  <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                              </div>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      
                      
                      <div className="lg:col-span-7 space-y-6">
                          <div className="space-y-2">
                              <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider block">Filosofi Kerja</span>
                              <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Pragmatisme terstruktur untuk ketahanan software</h2>
                          </div>
                          <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                              Saya percaya kode yang baik bukan sekadar baris pemrograman yang cepat selesai dibangun, melainkan ekosistem logic yang mudah dipahami tim, terdokumentasi dengan jernih, serta memiliki kelenturan arsitektur saat skala bisnis berkembang pesat.
                          </p>
                          <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                              Menjaga kenyamanan bekerja di persimpangan alur operasional *stakeholder*, kedalaman optimasi *database indexing*, hingga kerapian performa rendering client-side adalah komitmen utama saya. Pendekatan saya murni berbasis solusi nyata: menghindari *over-engineering* yang melelahkan namun tetap memprioritaskan keamanan serta kecepatan siklus rilis.
                          </p>
                      </div>
      
                      
                      <div className="lg:col-span-5 w-full">
                          <div className="bg-gray-50/60 rounded-card border border-brand-border p-6 md:p-8 space-y-6 shadow-soft">
                              <h3 className="text-xs uppercase tracking-widest font-semibold text-brand-dark/40 border-b border-brand-border pb-3">Prinsip Rekayasa</h3>
                              
                              <div className="space-y-4">
                                  
                                  <div className="flex gap-3 items-start">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 shrink-0"></span>
                                      <p className="text-sm text-brand-muted leading-normal">
                                          <strong className="text-brand-dark font-medium">Domain-Driven Orientation:</strong> Memetakan logika pemrograman dari fondasi proses bisnis nyata, bukan sekadar pelunasan daftar fitur.
                                      </p>
                                  </div>
                                  
                                  <div className="flex gap-3 items-start">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent-pink mt-2 shrink-0"></span>
                                      <p className="text-sm text-brand-muted leading-normal">
                                          <strong className="text-brand-dark font-medium">Maintainability First:</strong> Mengedepankan struktur rancangan modular dan penulisan kode yang mudah didelegasikan antartim.
                                      </p>
                                  </div>
                                  
                                  <div className="flex gap-3 items-start">
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 shrink-0"></span>
                                      <p className="text-sm text-brand-muted leading-normal">
                                          <strong className="text-brand-dark font-medium">Clear Communication:</strong> Memecahkan kebuntuan teknis yang rumit menjadi opsi solusi taktis yang mudah dipahami manajerial.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 border-y border-brand-border bg-white">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="max-w-3xl mb-12 space-y-3">
                          <span className="inline-flex items-center justify-center px-2.5 py-1 bg-accent-blue/5 text-accent-blue text-xs font-semibold uppercase tracking-widest rounded">
                              Riwayat Karir
                          </span>
                          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark">
                              Jalur rekam jejak profesional dalam industri rekayasa perangkat lunak
                          </h2>
                      </div>
      
                      
                      <div className="space-y-5 relative pl-4 md:pl-0">
                          
                          
                          <div className="bg-white border border-brand-border p-6 md:p-8 rounded-card hover:shadow-soft hover:border-brand-dark/20 transition-all group relative">
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                  <div className="flex gap-4 items-start">
                                      
                                      <div className="w-10 h-10 rounded border border-brand-border bg-gray-50 flex items-center justify-center text-xs font-mono font-semibold tracking-wider text-brand-muted shrink-0">B2B</div>
                                      <div>
                                          <h3 className="text-xl font-semibold text-brand-dark leading-tight group-hover:text-accent-purple transition-colors">Senior Backend Engineer</h3>
                                          <p className="text-xs text-brand-muted mt-1 font-medium">Perusahaan Teknologi B2B Hub &bull; Kontrak Enterprise</p>
                                      </div>
                                  </div>
                                  <span className="text-xs font-mono font-semibold tracking-wider text-brand-muted bg-gray-50 border border-brand-border/60 px-2.5 py-1 rounded w-fit h-fit md:order-2">
                                      2024 — Sekarang
                                  </span>
                              </div>
                              <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-4xl">
                                  Memimpin tim rekayasa untuk inisiasi stabilisasi core platform internal, melakukan arsitektur ulang skema modul Laravel masif yang rentan kolaps, mengoptimalkan pipeline redis queue, serta mengamankan sinkronisasi database mutasi data lintas divisi operasional.
                              </p>
                          </div>
      
                          
                          <div className="bg-white border border-brand-border p-6 md:p-8 rounded-card hover:shadow-soft hover:border-brand-dark/20 transition-all group relative">
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                  <div className="flex gap-4 items-start">
                                      <div className="w-10 h-10 rounded border border-brand-border bg-gray-50 flex items-center justify-center text-xs font-mono font-semibold tracking-wider text-brand-muted">DSG</div>
                                      <div>
                                          <h3 className="text-xl font-semibold text-brand-dark leading-tight group-hover:text-accent-blue transition-colors">Fullstack Engineer</h3>
                                          <p className="text-xs text-brand-muted mt-1 font-medium">Digital Agency & Software House Studio</p>
                                      </div>
                                  </div>
                                  <span className="text-xs font-mono font-semibold tracking-wider text-brand-muted bg-gray-50 border border-brand-border/60 px-2.5 py-1 rounded w-fit h-fit md:order-2">
                                      2021 — 2024
                                  </span>
                              </div>
                              <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-4xl">
                                  Bertanggung jawab penuh dalam delivery dashboard analitik interaktif, integrasi eksternal RESTful API pihak ketiga, penanganan webhook, serta merancang antarmuka kustom web aplikasi dengan performa retensi memori ringan.
                              </p>
                          </div>
      
                          
                          <div className="bg-white border border-brand-border p-6 md:p-8 rounded-card hover:shadow-soft hover:border-brand-dark/20 transition-all group relative">
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                  <div className="flex gap-4 items-start">
                                      <div className="w-10 h-10 rounded border border-brand-border bg-gray-50 flex items-center justify-center text-xs font-mono font-semibold tracking-wider text-brand-muted">AGC</div>
                                      <div>
                                          <h3 className="text-xl font-semibold text-brand-dark leading-tight group-hover:text-accent-pink transition-colors">Web Developer</h3>
                                          <p className="text-xs text-brand-muted mt-1 font-medium">Digital Solution Agency & Product Team</p>
                                      </div>
                                  </div>
                                  <span className="text-xs font-mono font-semibold tracking-wider text-brand-muted bg-gray-50 border border-brand-border/60 px-2.5 py-1 rounded w-fit h-fit md:order-2">
                                      2019 — 2021
                                  </span>
                              </div>
                              <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-4xl">
                                  Membangun fondasi aplikasi berbasis web, modul CMS kustom, dan optimalisasi kerangka fungsional dasar database relasional sembari memperdalam implementasi bersih antarmuka administrasi internal.
                              </p>
                          </div>
      
                      </div>
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          
                          
                          <div className="rounded-card border border-brand-border p-6 md:p-8 hover:border-brand-dark transition-colors flex flex-col justify-between group">
                              <div className="space-y-4">
                                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-1 rounded w-fit block">
                                      Inti Stack
                                  </span>
                                  <h3 className="text-xl font-semibold tracking-tight text-brand-dark group-hover:text-accent-purple transition-colors">Laravel Ecosystem</h3>
                                  <p className="text-xs leading-relaxed text-brand-muted">
                                      Penguasaan ekosistem penuh framework Laravel: RESTful/GraphQL API Architecture, optimalisasi Task Scheduling, Redis Queue Processing, Event Listeners, Enforce Form Requests, serta unit testing solid memakai PHPUnit/Pest.
                                  </p>
                              </div>
                          </div>
      
                          
                          <div className="rounded-card border border-brand-border p-6 md:p-8 hover:border-brand-dark transition-colors flex flex-col justify-between group">
                              <div className="space-y-4">
                                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/5 px-2.5 py-1 rounded w-fit block">
                                      Data Thinking
                                  </span>
                                  <h3 className="text-xl font-semibold tracking-tight text-brand-dark group-hover:text-accent-blue transition-colors">Relational Database Hub</h3>
                                  <p className="text-xs leading-relaxed text-brand-muted">
                                      Perancangan database ERD yang clean melalui kaidah normalisasi ketat, eliminasi bottleneck performa query N+1 via Eager Loading terarah, optimasi komposit indeks MySQL/PostgreSQL, serta isolasi arsitektur log mutasi data transaksi.
                                  </p>
                              </div>
                          </div>
      
                          
                          <div className="rounded-card border border-brand-border p-6 md:p-8 hover:border-brand-dark transition-colors flex flex-col justify-between group">
                              <div className="space-y-4">
                                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-green bg-accent-green/5 px-2.5 py-1 rounded w-fit block">
                                      Working Style
                                  </span>
                                  <h3 className="text-xl font-semibold tracking-tight text-brand-dark group-hover:text-accent-green transition-colors">Pragmatic Delivery</h3>
                                  <p className="text-xs leading-relaxed text-brand-muted">
                                      Saya menerapkan ritme kerja terukur yang tenang, komunikatif, transparan, serta mengutamakan dokumentasi modular komprehensif agar siklus maintenance sistem pasca-release tetap stabil dan minim kejutan teknis.
                                  </p>
                              </div>
                          </div>
      
                      </div>
                  </div>
              </section>
      
              
              <section className="py-16 md:py-20 bg-brand-dark text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
                  
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8 space-y-3">
                          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-accent-green bg-accent-green/10 border border-accent-green/20 px-2.5 py-0.5 rounded">
                              Terbuka untuk peran engineering
                          </span>
                          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-[1.2]">
                              Mencari engineer komunikatif yang andal menangani sistem digital kompleks?
                          </h2>
                          <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">
                              Mari diskusikan rencana penambahan modul backend baru, audit optimasi performa server, pengembangan sistem informasi pergudangan, atau kustomisasi arsitektur software Anda secara matang.
                          </p>
                      </div>
                      <div className="lg:col-span-4 flex lg:justify-end">
                          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 bg-white text-brand-dark text-xs font-semibold rounded-button hover:bg-gray-50 transition-all shadow-soft">
                              Mulai Diskusi Teknis
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
                          <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link></li>
                          <li><Link href="/articles" className="text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link></li>
                          <li><Link href="/" className="text-brand-muted hover:text-brand-dark transition-colors">Tentang</Link></li>
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
