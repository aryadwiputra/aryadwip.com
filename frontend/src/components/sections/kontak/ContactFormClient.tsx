"use client";

import { useState } from "react";

export function ContactFormClient() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Inquiry berhasil disimulasikan! Struktur parameter input form (Nama, Email, Perusahaan, Budget, Tag Minat, & Pesan) sudah valid sesuai standar data transfer. Anda tinggal memetakannya ke `ContactController` di backend Laravel nanti.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Nama Lengkap <span className="text-accent-pink">*</span></label>
          <input id="name" required name="name" type="text" className="form-input-premium" placeholder="Nama Anda" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Alamat Email <span className="text-accent-pink">*</span></label>
          <input id="email" required name="email" type="email" className="form-input-premium" placeholder="email@perusahaan.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Jenis Kebutuhan Sistem</label>
        <div className="flex flex-wrap gap-2">
          {[
            ["audit", "Audit Stabilitas Sistem"],
            ["dashboard", "Dashboard Admin Internal"],
            ["api", "Integrasi API Hub"],
            ["fullstack", "Fullstack SaaS Architecture"],
          ].map(([value, label]) => (
            <label key={value} className="cursor-pointer">
              <input type="checkbox" name="interest" value={value} className="peer sr-only" />
              <span className="inline-flex h-9 items-center rounded-button border border-brand-border bg-white px-4 text-xs font-medium text-brand-dark transition-all peer-checked:border-brand-dark peer-checked:bg-brand-dark peer-checked:text-white">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/70">Detail Singkat Proyek</label>
        <textarea id="message" required name="message" rows={5} className="form-textarea-premium" placeholder="Ceritakan deskripsi tantangan teknis, tenggat waktu (*deadline*), atau hasil akhir sistem yang ingin Anda capai bersama saya..."></textarea>
      </div>

      <div className="space-y-4 pt-2">
        <button type="submit" className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-button bg-brand-dark px-6 text-xs font-semibold text-white shadow-soft transition-all hover:bg-opacity-90 sm:w-auto">
          Kirim Inquiry Project
        </button>

        {status ? (
          <div className="rounded-button border border-green-200 bg-green-50 p-4 text-xs text-green-800 transition-all duration-300">
            <p><strong>Inquiry berhasil disimulasikan!</strong> {status.replace("Inquiry berhasil disimulasikan! ", "")}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
