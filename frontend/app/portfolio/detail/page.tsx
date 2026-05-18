import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Detail Portofolio — Arya Dwi Putra" };

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-border hidden md:block">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark hover:opacity-80 transition-opacity">arya<span className="text-accent-purple">dwiputra</span></Link>
                  <nav className="flex items-center space-x-8">
                      <Link href="/" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link>
                      <Link href="/" className="text-sm font-medium text-brand-dark hover:text-accent-purple transition-colors">Portfolio</Link>
                      <Link href="/articles" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link>
                      <Link href="/about" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Tentang</Link>
                      <Link href="/contact" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Kontak</Link>
                  </nav>
                  <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 bg-brand-dark text-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all shadow-soft">Yuk Ngobrol</Link>
              </div>
          </header>
      
          
          <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-border px-4 py-2.5 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-4 justify-items-center items-center">
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg><span className="text-[10px] font-medium tracking-wide">Beranda</span></Link>
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg><span className="text-[10px] font-medium tracking-wide">Portfolio</span></Link>
                  <Link href="/articles" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg><span className="text-[10px] font-medium tracking-wide">Artikel</span></Link>
                  <Link href="/contact" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg><span className="text-[10px] font-medium tracking-wide">Kontak</span></Link>
              </div>
          </nav>
      
          
          
          
          <main>
              
              <section className="border-b border-brand-border bg-white">
                  <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                      
                      <nav className="text-[11px] font-medium uppercase tracking-widest text-brand-muted flex items-center gap-2">
                          <Link href="/" className="hover:text-brand-dark transition-colors">Beranda</Link> 
                          <span className="text-brand-border">/</span> 
                          <Link href="/" className="hover:text-brand-dark transition-colors">Portfolio</Link> 
                          <span className="text-brand-border">/</span> 
                          <span className="text-brand-dark">Case Study</span>
                      </nav>
                      
                      
                      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                          <div className="lg:col-span-8 space-y-5">
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-1 rounded">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span> Studi Kasus Enterprise
                              </span>
                              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-brand-dark">
                                  Platform Operasional untuk Distributor Multi Gudang
                              </h1>
                              <p className="text-base md:text-lg text-brand-muted max-w-3xl leading-relaxed">
                                  Mendesain ulang arsitektur sistem manajemen pergudangan legacy menjadi platform modern berbasis domain terisolasi untuk mengamankan akurasi mutasi stok, otomatisasi purchasing order, dan transparansi approval internal.
                              </p>
                          </div>
                          
                          
                          <aside className="lg:col-span-4 bg-gray-50 border border-brand-border p-6 rounded-card space-y-4 shadow-soft w-full">
                              <h3 className="text-xs uppercase tracking-widest font-semibold text-brand-dark/40 border-b border-brand-border pb-2.5">Arsitektur Informasi</h3>
                              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                                  <div>
                                      <p className="text-brand-muted uppercase tracking-wider text-[10px]">Peran Utama</p>
                                      <p className="mt-0.5 font-semibold text-brand-dark">Lead Laravel Engineer</p>
                                  </div>
                                  <div>
                                      <p className="text-brand-muted uppercase tracking-wider text-[10px]">Durasi</p>
                                      <p className="mt-0.5 font-semibold text-brand-dark">4 Bulan Delivery</p>
                                  </div>
                                  <div className="col-span-2">
                                      <p className="text-brand-muted uppercase tracking-wider text-[10px]">Inti Tech Stack</p>
                                      <p className="mt-0.5 font-semibold text-brand-dark font-mono text-[11px]">Laravel 11, Octane, MySQL, Redis</p>
                                  </div>
                                  <div className="col-span-2">
                                      <p className="text-brand-muted uppercase tracking-wider text-[10px]">Cakupan Domain Backend</p>
                                      <p className="mt-0.5 font-semibold text-brand-dark">Multi-warehouse Stock Logic, Advanced RBAC, Auditable Workflow</p>
                                  </div>
                              </div>
                              <div className="pt-2">
                                  <Link href="/contact" className="inline-flex w-full h-10 items-center justify-center px-4 bg-brand-dark text-white text-xs font-semibold rounded-button hover:bg-opacity-90 transition-all text-center shadow-soft">
                                      Konsultasikan Kebutuhan Serupa
                                  </Link>
                              </div>
                          </aside>
                      </div>
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                      
                      
                      <div className="lg:col-span-8 space-y-16">
                          
                          
                          <div className="aspect-[16/9] rounded-card border border-brand-border bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-soft relative overflow-hidden group flex items-center justify-center">
                              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e8e8_1px,transparent_1px),linear-gradient(to_bottom,#e8e8e8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
                              <div className="text-center z-10 space-y-2">
                                  <span className="text-xs font-mono text-brand-muted/40">Dashboard Preview Placeholder [800x450]</span>
                              </div>
                          </div>
      
                          
                          <article className="space-y-4">
                              <div className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-pink"></span>
                                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-brand-dark">Konteks & Bottleneck Sistem Lama</h2>
                              </div>
                              <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                                  Seiring pertumbuhan volume transaksi B2B, arsitektur database monolitik lama mengalami *race condition* parah pada pencatatan stok opname lintas cabang. Sinkronisasi data mutasi pergudangan sering kali tertunda hingga berjam-jam akibat penguncian tabel (*table locking*) yang tidak efisien. Di sisi operasional, alur peninjauan nota pembelian (*purchasing order approval*) masih tersebar di banyak kanal komunikasi manual, memicu kerentanan manipulasi serta hilangnya jejak audit log.
                              </p>
                          </article>
      
                          
                          <article className="space-y-4">
                              <div className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-brand-dark">Desain Solusi & Pemisahan Domain</h2>
                              </div>
                              <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                                  Pendekatan utama difokuskan pada pemisahan konteks domain secara rigid menggunakan pola *Service Repository*. Logika mutasi stok diisolasi penuh dari penanganan order penjualan untuk meminimalkan ketergantungan model data. 
                              </p>
                              <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                                  Saya merancang ulang skema relasi tabel, menerapkan teknik database transaction isolation level (`REPEATABLE READ`), serta mengimplementasikan **Atomic Locks** berbasis Redis untuk menjamin integritas kuantitas produk saat ratusan request checkout gudang terjadi dalam milidetik yang sama.
                              </p>
                          </article>
      
                          
                          <article className="space-y-5">
                              <div className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span>
                                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-brand-dark">Tahapan Eksekusi Teknis</h2>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="rounded-card border border-brand-border p-5 bg-white space-y-2 hover:border-brand-dark transition-colors">
                                      <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent-purple">01 / Database Re-Modeling</p>
                                      <h4 className="text-sm font-semibold text-brand-dark">Normalisasi & Indeks</h4>
                                      <p className="text-xs text-brand-muted leading-relaxed">Restrukturisasi schema ERD, pembuatan composite index pada kolom filter pencarian kueri, dan penataan foreign key cascade.</p>
                                  </div>
                                  <div className="rounded-card border border-brand-border p-5 bg-white space-y-2 hover:border-brand-dark transition-colors">
                                      <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent-blue">02 / Async Job Pipeline</p>
                                      <h4 className="text-sm font-semibold text-brand-dark">Otomasi Queue</h4>
                                      <p className="text-xs text-brand-muted leading-relaxed">Memindahkan engine agregasi laporan bulanan dan kalkulasi profit margin yang berat ke latar belakang via Redis Queue Jobs.</p>
                                  </div>
                                  <div className="rounded-card border border-brand-border p-5 bg-white space-y-2 hover:border-brand-dark transition-colors">
                                      <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent-green">03 / State Rigidity & UAT</p>
                                      <h4 className="text-sm font-semibold text-brand-dark">Jejak Audit Berbasis State</h4>
                                      <p className="text-xs text-brand-muted leading-relaxed">Menerapkan State Pattern untuk mengunci log status dokumen approval, menjamin rekonsiliasi histori tidak bisa dimanipulasi.</p>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article className="space-y-5">
                              <div className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
                                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-brand-dark">Dampak & Metrik Pasca Rilis</h2>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  <div className="rounded-card border border-brand-border p-5 bg-gray-50/50">
                                      <p className="text-3xl font-semibold text-brand-dark tracking-tight">-40%</p>
                                      <p className="mt-1.5 text-xs text-brand-muted font-medium uppercase tracking-wide">Query Latency</p>
                                      <p className="mt-1 text-xs text-brand-muted leading-normal">Eager loading mengeliminasi isu N+1 kueri pada pemuatan log inventory.</p>
                                  </div>
                                  <div className="rounded-card border border-brand-border p-5 bg-gray-50/50">
                                      <p className="text-3xl font-semibold text-brand-dark tracking-tight">100%</p>
                                      <p className="mt-1.5 text-xs text-brand-muted font-medium uppercase tracking-wide">Data Accuracy</p>
                                      <p className="mt-1 text-xs text-brand-muted leading-normal">Mekanisme Redis lock sukses memangkas angka selisih stok menjadi nol.</p>
                                  </div>
                                  <div className="rounded-card border border-brand-border p-5 bg-gray-50/50">
                                      <p className="text-3xl font-semibold text-brand-dark tracking-tight">Real-time</p>
                                      <p className="mt-1.5 text-xs text-brand-muted font-medium uppercase tracking-wide">Audit Trail</p>
                                      <p className="mt-1 text-xs text-brand-muted leading-normal">Setiap perpindahan status PO tercatat mutlak beserta payload user id.</p>
                                  </div>
                              </div>
                          </article>
      
                          
                          <article className="space-y-4">
                              <div className="flex items-center gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
                                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-brand-dark">Dokumentasi Skema Arsitektur</h2>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="aspect-[4/3] rounded-card border border-brand-border bg-gray-50 flex items-center justify-center text-[10px] font-mono text-brand-muted/40 p-4 text-center">
                                      ERD Database Schema Blueprint [Placeholder]
                                  </div>
                                  <div className="aspect-[4/3] rounded-card border border-brand-border bg-gray-50 flex items-center justify-center text-[10px] font-mono text-brand-muted/40 p-4 text-center">
                                      Caching & Queue Flow Diagram [Placeholder]
                                  </div>
                              </div>
                          </article>
      
                      </div>
                      
                      
                      <div className="lg:col-span-4 space-y-6">
                          <div className="rounded-card border border-brand-border p-6 bg-gray-50 space-y-4 sticky top-24">
                              <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-dark/40 border-b border-brand-border pb-2.5">Orientasi Struktur Data</h4>
                              <p className="text-xs text-brand-muted leading-relaxed">
                                  Halaman studi kasus ini sengaja distrukturkan secara modular agar skema database relasional di backend dapat dipetakan dengan bersih:
                              </p>
                              <ul className="space-y-2.5 text-xs text-brand-muted pt-2">
                                  <li className="flex items-start gap-2">
                                      <span className="text-accent-purple font-mono shrink-0">&bull;</span>
                                      <span><strong className="text-brand-dark font-medium">Model Entity Relasi:</strong> Memudahkan integrasi tabel `warehouses`, `stocks`, `purchases`, dan `approval_logs`.</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                      <span className="text-accent-blue font-mono shrink-0">&bull;</span>
                                      <span><strong className="text-brand-dark font-medium">Beban Kueri Terukur:</strong> Setiap metrik dampak di sebelah kiri berkorelasi langsung dengan optimasi query Eloquent scopes di database.</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                      <span className="text-accent-green font-mono shrink-0">&bull;</span>
                                      <span><strong className="text-brand-dark font-medium">Mudah Diganti:</strong> Blade loop Anda nantinya cukup memetakan array data dari controller untuk mengisi setiap pas kartu infografis di atas.</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              
              <section className="py-12 border-y border-brand-border bg-white">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-muted hover:text-brand-dark transition-colors inline-flex items-center gap-1 group">
                          <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> Project Sebelumnya
                      </Link>
                      <Link href="/contact" className="w-full sm:w-auto h-11 inline-flex items-center justify-center px-6 bg-brand-dark text-white text-xs font-semibold rounded-button hover:bg-opacity-90 transition-all text-center shadow-soft">
                          Butuh Solusi Arsitektur Serupa? Mari Berdiskusi
                      </Link>
                      <Link href="/portfolio/detail" className="text-xs font-semibold text-brand-muted hover:text-brand-dark transition-colors inline-flex items-center gap-1 group">
                          Project Berikutnya <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </Link>
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
    </>
  );
}
