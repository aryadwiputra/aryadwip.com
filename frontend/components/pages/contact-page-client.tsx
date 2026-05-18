"use client";

import { useEffect } from "react";
import Link from "next/link";

export function ContactPageClient() {
  useEffect(() => {
    
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    const statusBox = document.getElementById('form-status-box');
    const statusText = document.getElementById('form-status-text');
    const submitHandler = (event: Event) => {
      event.preventDefault();
      if (statusBox && statusText && form) {
        statusBox.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'text-red-700');
        statusBox.classList.add('block', 'bg-green-50', 'border-green-200', 'text-green-800');
        statusText.innerHTML = '<strong>Inquiry berhasil disimulasikan!</strong> Struktur parameter input form (Nama, Email, Perusahaan, Budget, Tag Minat, & Pesan) sudah valid sesuai standar data transfer. Anda tinggal memetakannya ke \`ContactController\` di backend Laravel nanti.';
        form.reset();
      }
    };
    form?.addEventListener('submit', submitHandler);
    return () => form?.removeEventListener('submit', submitHandler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-border hidden md:block">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark hover:opacity-80 transition-opacity">arya<span className="text-accent-purple">dwiputra</span></Link>
                  <nav className="flex items-center space-x-8">
                      <Link href="/" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Beranda</Link>
                      <Link href="/portfolio" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Portfolio</Link>
                      <Link href="/articles" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Artikel</Link>
                      <Link href="/about" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Tentang</Link>
                      <Link href="/" className="text-sm font-medium text-brand-dark hover:text-accent-purple transition-colors">Kontak</Link>
                  </nav>
                  <a href="mailto:hello@aryadwiputra.com" className="inline-flex items-center justify-center px-4 py-2 bg-brand-dark text-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all shadow-soft">Yuk Ngobrol</a>
              </div>
          </header>
      
          
          <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-border px-4 py-2.5 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-4 justify-items-center items-center">
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg><span className="text-[10px] font-medium tracking-wide">Beranda</span></Link>
                  <Link href="/portfolio" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg><span className="text-[10px] font-medium tracking-wide">Portfolio</span></Link>
                  <Link href="/articles" className="flex flex-col items-center space-y-1 text-brand-muted hover:text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg><span className="text-[10px] font-medium tracking-wide">Artikel</span></Link>
                  <Link href="/" className="flex flex-col items-center space-y-1 text-brand-dark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg><span className="text-[10px] font-medium tracking-wide">Kontak</span></Link>
              </div>
          </nav>
      
          
          
          
          <main>
              
              <section className="border-b border-brand-border bg-white">
                  <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      
                      
                      <div className="lg:col-span-8 space-y-5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-green bg-accent-green/5 px-2.5 py-1 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span> Mari Terhubung
                          </span>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-brand-dark">
                              Mari bangun arsitektur sistem digital yang andal & tepat guna.
                          </h1>
                          <p className="text-base md:text-lg text-brand-muted max-w-2xl leading-relaxed">
                              Terbuka untuk kolaborasi pengerjaan proyek baru, peninjauan performa kueri (*database audit*), stabilisasi sistem monolitik legacy, ataupun sekadar sesi konsultasi pemetaan ruang lingkup kerja MVP.
                          </p>
                      </div>
      
                      
                      <div className="lg:col-span-4 w-full lg:mt-6">
                          <div className="bg-gray-50 border border-brand-border p-6 rounded-card shadow-soft grid grid-cols-2 gap-x-4 gap-y-5">
                              <div className="col-span-2 border-b border-brand-border/60 pb-2">
                                  <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-dark/40">Ketersediaan Kerja</span>
                              </div>
                              <div>
                                  <span className="block text-xl font-semibold text-brand-dark tracking-tight">24-48 Jam</span>
                                  <span className="text-[11px] text-brand-muted mt-0.5 block leading-tight">Estimasi tanggapan awal</span>
                              </div>
                              <div>
                                  <span className="block text-xl font-semibold text-brand-dark tracking-tight">Jarak Jauh</span>
                                  <span className="text-[11px] text-brand-muted mt-0.5 block leading-tight">Kolaborasi lintas batas zona</span>
                              </div>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              
              <section className="py-16 md:py-24 bg-white">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      
                      
                      <div className="lg:col-span-7">
                          <form id="contact-form" className="space-y-6">
                              
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                  <div className="space-y-2">
                                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Nama Lengkap <span className="text-accent-pink">*</span></label>
                                      <input id="name" required name="name" type="text" className="form-input-premium" placeholder="Nama Anda" />
                                  </div>
                                  <div className="space-y-2">
                                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Alamat Email <span className="text-accent-pink">*</span></label>
                                      <input id="email" required name="email" type="email" className="form-input-premium" placeholder="email@perusahaan.com" />
                                  </div>
                              </div>
      
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                  <div className="space-y-2">
                                      <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Perusahaan / Tim</label>
                                      <input id="company" name="company" type="text" className="form-input-premium" placeholder="Nama instansi (opsional)" />
                                  </div>
                                  <div className="space-y-2">
                                      <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Estimasi Skala Budget</label>
                                      <select id="budget" name="budget" className="form-input-premium bg-white">
                                          <option value="">Pilih rentang kisaran budget</option>
                                          <option value="small">&lt; Rp15 Juta</option>
                                          <option value="medium">Rp15 – Rp35 Juta</option>
                                          <option value="large">Rp35 – Rp75 Juta</option>
                                          <option value="enterprise">&gt; Rp75 Juta</option>
                                      </select>
                                  </div>
                              </div>
      
                              
                              <div className="space-y-2.5">
                                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70 block">Jenis Kebutuhan Sistem</label>
                                  <div className="flex flex-wrap gap-2">
                                      <label className="cursor-pointer">
                                          <input type="checkbox" name="interest" value="audit" className="peer sr-only" />
                                          <span className="inline-flex h-9 items-center px-4 rounded-button border border-brand-border text-xs font-medium text-brand-dark bg-white peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark transition-all">Audit Backend & Query</span>
                                      </label>
                                      <label className="cursor-pointer">
                                          <input type="checkbox" name="interest" value="dashboard" className="peer sr-only" />
                                          <span className="inline-flex h-9 items-center px-4 rounded-button border border-brand-border text-xs font-medium text-brand-dark bg-white peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark transition-all">Aplikasi Dashboard Internal</span>
                                      </label>
                                      <label className="cursor-pointer">
                                          <input type="checkbox" name="interest" value="api" className="peer sr-only" />
                                          <span className="inline-flex h-9 items-center px-4 rounded-button border border-brand-border text-xs font-medium text-brand-dark bg-white peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark transition-all">Integrasi API Hub</span>
                                      </label>
                                      <label className="cursor-pointer">
                                          <input type="checkbox" name="interest" value="fullstack" className="peer sr-only" />
                                          <span className="inline-flex h-9 items-center px-4 rounded-button border border-brand-border text-xs font-medium text-brand-dark bg-white peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark transition-all">Fullstack SaaS Architecture</span>
                                      </label>
                                  </div>
                              </div>
      
                              
                              <div className="space-y-2">
                                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70 block">Detail Singkat Proyek</label>
                                  <textarea id="message" required name="message" rows={5} className="form-textarea-premium" placeholder="Ceritakan deskripsi tantangan teknis, tenggat waktu (*deadline*), atau hasil akhir sistem yang ingin Anda capai bersama saya..."></textarea>
                              </div>
      
                              
                              <div className="pt-2 space-y-4">
                                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 bg-brand-dark text-white text-xs font-semibold rounded-button hover:bg-opacity-90 transition-all shadow-soft cursor-pointer">
                                      Kirim Inquiry Project
                                  </button>
                                  
                                  
                                  <div id="form-status-box" className="hidden p-4 rounded-button border text-xs transition-all duration-300">
                                      <p id="form-status-text"></p>
                                  </div>
                              </div>
      
                          </form>
                      </div>
      
                      
                      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 w-full">
                          
                          
                          <div className="border border-brand-border p-6 rounded-card bg-white space-y-5 shadow-soft">
                              <h3 className="text-sm font-semibold text-brand-dark border-b border-brand-border pb-3">Saluran Komunikasi Langsung</h3>
                              
                              <div className="space-y-3.5 text-xs">
                                  <div>
                                      <span className="block text-[10px] uppercase tracking-widest text-brand-muted font-medium">Korespondensi Email Utama</span>
                                      <a href="mailto:hello@aryadwiputra.com" className="text-brand-dark font-medium text-sm hover:text-accent-purple transition-colors block mt-0.5">hello@aryadwiputra.com</a>
                                  </div>
                                  <div>
                                      <span className="block text-[10px] uppercase tracking-widest text-brand-muted font-medium">Lokasi Kerja</span>
                                      <span className="text-brand-dark font-medium block mt-0.5">Indonesia &bull; Global Jarak Jauh Coordination Ready</span>
                                  </div>
                                  <div>
                                      <span className="block text-[10px] uppercase tracking-widest text-brand-muted font-medium">Jam Koordinasi Efektif</span>
                                      <span className="text-brand-dark font-medium block mt-0.5">Senin – Jumat, 09.00 – 18.00 WIB</span>
                                  </div>
                              </div>
                          </div>
      
                          
                          <div className="rounded-card border border-brand-border overflow-hidden shadow-soft aspect-[4/3] w-full bg-gray-50 relative group">
                              <iframe title="Lokasi Arya Dwi Putra" src="https://www.google.com/maps?q=Jakarta%20Indonesia&z=10&output=embed" width="100%" height="100%" style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.85)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
      
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
