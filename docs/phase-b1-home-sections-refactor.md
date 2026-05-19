# Phase B1 — Home Sections Refactor

Dokumen ini membahas refactor halaman beranda agar benar-benar mengikuti pola section-based architecture yang rapi, mudah dibaca, dan aman untuk dikembangkan.

Phase B1 adalah fase setelah fondasi layout bersama stabil. Fokus utamanya adalah menjadikan halaman home:

- lebih bersih di level `page.tsx`
- section-driven
- tetap 1:1 secara visual dengan versi yang disetujui
- siap untuk dibangun di atas struktur modern Next.js App Router

## 1. Objective

Tujuan utama Phase B1:

- memecah beranda menjadi section yang jelas dan konsisten
- memindahkan komponen home ke target final `components/sections/home/`
- memastikan `app/page.tsx` hanya menjadi komposer halaman
- mengurangi coupling antara route file dan implementasi visual detail

## 2. Scope

### Included

- refactor section home
- pemindahan komponen home ke folder target
- penyesuaian import page home
- audit wrapper image/hero/home spacing
- menjaga fidelity visual

### Excluded

- perubahan route
- perubahan copywriting
- perubahan urutan section
- perubahan warna/spacing yang tidak diminta
- ekstraksi feature domain portfolio/artikel
- ekstraksi UI primitives penuh

## 3. Dependency

Harus bergantung pada:

- `docs/phase-a1-migration-map.md`
- `docs/phase-a2-foundation-plan.md`
- `docs/phase-a3-shared-layout-migration.md`

## 4. Current State

Section home saat ini sudah terpisah, tetapi masih belum berada pada struktur final target.

Current home-specific files:

- `frontend/app/(public)/_components/home-hero-nav.tsx`
- `frontend/app/(public)/_components/home-clients.tsx`
- `frontend/app/(public)/_components/home-tools.tsx`
- `frontend/app/(public)/_components/home-portfolio.tsx`
- `frontend/app/(public)/_components/home-workflow.tsx`
- `frontend/app/(public)/_components/home-blog.tsx`
- `frontend/app/(public)/_components/home-cta.tsx`

Current route file:

- `frontend/app/page.tsx`

Masalah current state:

- lokasi file belum sesuai target final
- naming belum final
- masih ada nama seperti `home-hero-nav` yang mencampur “hero” dan “nav”, padahal di target nanti fokusnya adalah section ownership
- page home perlu menjadi lebih bersih dan eksplisit

## 5. Target State

Struktur target:

```txt
src/
├─ app/
│  └─ page.tsx
└─ components/
   └─ sections/
      └─ home/
         ├─ HeroSection.tsx
         ├─ ClientsSection.tsx
         ├─ ToolsSection.tsx
         ├─ FeaturedPortfolioSection.tsx
         ├─ WorkMethodSection.tsx
         ├─ LatestArticlesSection.tsx
         └─ CTASection.tsx
```

## 6. Migration Map

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/_components/home-hero-nav.tsx` | `src/components/sections/home/HeroSection.tsx` |
| `frontend/app/(public)/_components/home-clients.tsx` | `src/components/sections/home/ClientsSection.tsx` |
| `frontend/app/(public)/_components/home-tools.tsx` | `src/components/sections/home/ToolsSection.tsx` |
| `frontend/app/(public)/_components/home-portfolio.tsx` | `src/components/sections/home/FeaturedPortfolioSection.tsx` |
| `frontend/app/(public)/_components/home-workflow.tsx` | `src/components/sections/home/WorkMethodSection.tsx` |
| `frontend/app/(public)/_components/home-blog.tsx` | `src/components/sections/home/LatestArticlesSection.tsx` |
| `frontend/app/(public)/_components/home-cta.tsx` | `src/components/sections/home/CTASection.tsx` |

## 7. Final Naming Decisions

### Section Names

Gunakan nama final berikut:

- `HeroSection`
- `ClientsSection`
- `ToolsSection`
- `FeaturedPortfolioSection`
- `WorkMethodSection`
- `LatestArticlesSection`
- `CTASection`

### Kenapa naming ini dipilih

- eksplisit
- mudah dipahami developer lain
- tidak terikat ke istilah lama yang ambigu
- langsung menunjukkan peran section di page

## 8. `app/page.tsx` Responsibility

Setelah refactor, `app/page.tsx` hanya boleh:

- import section home
- menyusun urutan section
- memegang metadata route

`app/page.tsx` tidak boleh:

- mengandung detail visual besar
- menyimpan data section besar
- berisi logika DOM imperative

Target bentuk konseptual:

```tsx
export default function Page() {
  return (
    <>
      <Navbar />
      <MobileBottomBar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ToolsSection />
        <FeaturedPortfolioSection />
        <WorkMethodSection />
        <LatestArticlesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
```

Catatan:

- struktur final aktual harus mengikuti hasil stabil dari Phase A3
- jangan mengulang kesalahan hydration mismatch dengan conditional shell yang tidak stabil

## 9. Section-by-Section Notes

### 9.1 HeroSection

Poin penting:

- hero home harus identik dengan versi yang sudah disetujui
- jangan ubah komposisi visual hero
- jangan ubah urutan CTA
- jangan ubah spacing hero secara kreatif

Hal yang harus diawasi:

- sticky navbar offset
- mobile spacing
- interaksi antara hero dan shell layout

### 9.2 ClientsSection

Poin penting:

- logo client tetap 1:1 dengan source asset yang sudah dipakai
- animasi/marquee tidak boleh mengganggu flow layout
- tetap gunakan image handling yang aman

### 9.3 ToolsSection

Poin penting:

- stack/ekosistem tetap sama seperti keputusan user
- jangan improvisasi icon, warna, label, atau struktur tanpa persetujuan

### 9.4 FeaturedPortfolioSection

Poin penting:

- section ini nanti akan beririsan dengan `features/portfolio`
- untuk B1, cukup pindahkan sebagai section home
- belum perlu domain extraction penuh

### 9.5 WorkMethodSection

Poin penting:

- hanya refactor struktur
- jangan ubah isi atau copy

### 9.6 LatestArticlesSection

Poin penting:

- pastikan semua image `fill` punya parent `relative`
- section ini sebelumnya sempat memicu overlap image, jadi harus diaudit lagi setelah dipindah

### 9.7 CTASection

Poin penting:

- pertahankan CTA block persis seperti saat ini
- jangan ubah wording, hierarchy, atau alignment tanpa instruksi

## 10. Data Ownership Notes

Pada B1, data home masih boleh tetap berada dekat section bila memang masih statis.

Tetapi perlu dicatat:

- data portfolio teaser nantinya akan dipindah ke `features/portfolio`
- data artikel teaser nantinya akan dipindah ke `features/artikel`

Jadi B1 belum harus menyelesaikan problem domain data, hanya menyiapkan struktur section final.

## 11. Visual Fidelity Rules

Ini wajib dijaga selama B1:

- tidak mengubah hero
- tidak mengubah section order
- tidak mengubah palette
- tidak mengubah spacing tanpa alasan layout bug
- tidak mengubah copywriting
- tidak menambah section baru
- tidak menghapus section lama

Jika ada perubahan yang diperlukan untuk kestabilan teknis:

- perubahan harus seminimal mungkin
- hanya untuk menjaga output yang sama

## 12. Risks & Watchouts

### Hero Regression Risk

Ini risiko tertinggi untuk home.

Yang harus dicegah:

- hero berubah karena shell/layout berubah
- z-index berubah
- spacing top berubah
- posisi dekorasi absolute berubah

### Image Fill Risk

Yang harus dicegah:

- `next/image fill` tanpa parent `relative`
- image blog/portfolio overlap ke section lain

### Naming Drift Risk

Yang harus dicegah:

- mempertahankan nama lama setengah-setengah
- hasil campuran antara naming lama dan final naming

## 13. Work Breakdown

### Step 1 — Prepare Target Folder

Checklist:

- [ ] siapkan `components/sections/home/`
- [ ] pastikan ownership section home sudah final

### Step 2 — Move & Rename Files

Checklist:

- [ ] `home-hero-nav` → `HeroSection`
- [ ] `home-clients` → `ClientsSection`
- [ ] `home-tools` → `ToolsSection`
- [ ] `home-portfolio` → `FeaturedPortfolioSection`
- [ ] `home-workflow` → `WorkMethodSection`
- [ ] `home-blog` → `LatestArticlesSection`
- [ ] `home-cta` → `CTASection`

### Step 3 — Update `app/page.tsx`

Checklist:

- [ ] update import ke target final
- [ ] jadikan page sebagai komposer murni

### Step 4 — Visual Safety Audit

Checklist:

- [ ] cek hero desktop
- [ ] cek hero mobile
- [ ] cek overlap blog images
- [ ] cek section order
- [ ] cek footer/home shell consistency

## 14. Validation Plan

Teknis:

- [ ] `npm run lint`
- [ ] `npm run build`

Visual manual:

- [ ] hero desktop sesuai
- [ ] hero mobile sesuai
- [ ] clients section tetap aman
- [ ] tools section tetap aman
- [ ] featured portfolio tetap aman
- [ ] latest articles images tidak overlap
- [ ] CTA tetap identik

## 15. Deliverables

Phase B1 dianggap selesai jika:

- home sections sudah berada pada struktur target final
- page home bersih dan mudah dibaca
- tidak ada regresi hero
- tidak ada overlap image
- tidak ada perubahan visual yang tidak disetujui

## 16. Checklist

- [ ] Siapkan folder `components/sections/home/`
- [ ] Rename semua home section ke naming final
- [ ] Pindahkan file home section ke lokasi target
- [ ] Update `app/page.tsx`
- [ ] Audit hero regression
- [ ] Audit `Image fill` wrappers
- [ ] Lint hijau
- [ ] Build hijau

## 17. Acceptance Criteria

Phase B1 lulus bila:

- [ ] home page hanya menjadi komposer section
- [ ] semua section home berada di folder final yang benar
- [ ] hero tampil sama seperti versi yang disetujui
- [ ] tidak ada issue overlap image
- [ ] tidak ada hydration warning baru

## 18. Recommended Next Step

Setelah B1 selesai, fase paling logis berikutnya adalah:

- `Phase B2` — Domain Portfolio Foundation

Karena setelah featured portfolio section home stabil, domain `portfolio` bisa mulai dipisahkan dari presentational layer.

