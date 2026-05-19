# Phase A2 — Foundation Plan

Dokumen ini menjabarkan fase fondasi setelah `Phase A1` selesai dipetakan. Fokus Phase A2 adalah:

- membentuk struktur folder target
- menyiapkan file dasar yang akan menjadi fondasi arsitektur baru
- menjaga agar aplikasi tetap stabil sebelum route rename besar dilakukan

Phase ini **belum** bertujuan menyelesaikan seluruh refactor. Tujuan utamanya adalah membuat “kerangka rumah”-nya dulu.

## 1. Objective

Tujuan utama Phase A2:

- membangun struktur target yang konsisten
- memisahkan shared layout, sections, features, dan utilities
- menyiapkan file dasar agar fase-fase berikutnya tinggal memindahkan logika, bukan meraba-raba struktur

## 2. Scope

### Included

- pembuatan folder target
- pembuatan file fondasi di `lib/`, `types/`, `styles/`, `hooks/`
- normalisasi naming direction
- persiapan shared layout target
- persiapan alias dan struktur `src/` secara konseptual

### Excluded

- belum rename route besar (`articles` → `artikel`, dst)
- belum pindah semua komponen section
- belum memecah domain `portfolio` / `artikel` secara penuh
- belum final move ke `src/`
- belum memecah client island secara mendalam

## 3. Dependency

Dokumen/fase yang harus dianggap selesai terlebih dahulu:

- `docs/phase-a1-migration-map.md`

## 4. Target Foundation Structure

Struktur target akhir yang dipersiapkan pada fase ini:

```txt
src/
├─ app/
├─ components/
│  ├─ layouts/
│  ├─ sections/
│  └─ ui/
├─ features/
├─ lib/
├─ hooks/
├─ types/
├─ assets/
└─ styles/
```

Karena implementasi penuh ke `src/` lebih aman dilakukan di fase akhir, pada A2 kita bisa memakai dua pendekatan:

### Pendekatan Aman

- bangun dulu folder final di root project frontend:
  - `app/`
  - `components/layouts/`
  - `components/sections/`
  - `components/ui/`
  - `features/`
  - `lib/`
  - `hooks/`
  - `types/`
  - `styles/`
- pindah ke `src/` pada fase akhir

### Pendekatan Langsung

- langsung bentuk `src/app`, `src/components`, dst

### Rekomendasi

Untuk keamanan refactor:

- gunakan **pendekatan aman**
- `src/` dipindahkan belakangan setelah struktur final stabil

## 5. Folder Creation Plan

### 5.1 Shared Layout Layer

Folder yang harus tersedia:

- `components/layouts/`

File target yang dipersiapkan:

- `components/layouts/Navbar.tsx`
- `components/layouts/Footer.tsx`
- `components/layouts/MobileBottomBar.tsx`
- `components/layouts/Container.tsx`

Catatan:

- Pada A2, file-file ini belum harus final 100%
- Yang penting struktur dan ownership-nya sudah ditetapkan

### 5.2 Section Layer

Folder yang harus tersedia:

- `components/sections/home/`
- `components/sections/portfolio/`
- `components/sections/artikel/`
- `components/sections/tentang/`
- `components/sections/kontak/`

Tujuan:

- memberi “rumah” yang jelas bagi komponen section-specific
- menghindari pencampuran page-specific component dengan shared layout

### 5.3 UI Layer

Folder yang harus tersedia:

- `components/ui/`

File yang boleh disiapkan sebagai placeholder atau baseline:

- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/ui/Badge.tsx`
- `components/ui/SectionTitle.tsx`

Catatan:

- jika belum dipakai langsung, file boleh ditunda implementasinya
- tetapi struktur target tetap perlu disepakati sejak awal

### 5.4 Feature Layer

Folder yang harus tersedia:

- `features/portfolio/`
- `features/artikel/`

Struktur minimum:

- `features/portfolio/components/`
- `features/portfolio/data.ts`
- `features/portfolio/types.ts`
- `features/portfolio/utils.ts`
- `features/artikel/components/`
- `features/artikel/data.ts`
- `features/artikel/types.ts`
- `features/artikel/utils.ts`

Tujuan:

- memisahkan domain logic dari presentational sections

### 5.5 Lib Layer

Folder:

- `lib/`

File target:

- `lib/site.ts`
- `lib/metadata.ts`
- `lib/constants.ts`
- `lib/utils.ts`

### 5.6 Hooks Layer

Folder:

- `hooks/`

Target awal:

- `hooks/useMediaQuery.ts`

Catatan:

- kalau belum dipakai, file ini tidak wajib diimplementasikan penuh pada A2
- cukup tetapkan ownership dan naming direction

### 5.7 Types Layer

Folder:

- `types/`

Target awal:

- `types/index.ts`

Tujuan:

- shared type generik yang lintas fitur

### 5.8 Styles Layer

Folder:

- `styles/`

Target awal:

- `styles/animations.css`

Tujuan:

- memindahkan animasi global reusable dari `globals.css` secara bertahap

## 6. File Preparation Plan

### 6.1 `lib/site.ts`

Harus menampung:

- nama site
- daftar nav items
- label route
- helper active nav bila tetap dibutuhkan
- konstanta public path bila perlu

### 6.2 `lib/metadata.ts`

Harus menampung:

- helper metadata standar
- metadata per page builder
- default title/description policy

### 6.3 `lib/constants.ts`

Harus menampung:

- constant string global
- angka/statik global yang bukan domain-specific
- kategori global jika memang lintas fitur

### 6.4 `lib/utils.ts`

Harus menampung:

- helper generik non-domain
- formatter universal
- class helper bila dibutuhkan

### 6.5 `types/index.ts`

Isi kandidat:

- shared utility types
- common props helper
- type yang dipakai lintas feature

## 7. Naming Convention Decisions

Phase A2 harus mengunci naming convention berikut:

### 7.1 Route Naming

Target final:

- `portfolio`
- `artikel`
- `tentang`
- `kontak`

### 7.2 Component Naming

Gunakan PascalCase:

- `Navbar.tsx`
- `HeroSection.tsx`
- `PortfolioFilterClient.tsx`

### 7.3 Folder Naming

Gunakan lowercase:

- `components/sections/home`
- `features/portfolio`
- `features/artikel`

### 7.4 File Ownership Naming

- layout shared → `components/layouts`
- page sections → `components/sections`
- domain behavior/data → `features/*`
- global helpers → `lib`

## 8. Import Alias Direction

Phase A2 harus menetapkan keputusan alias berikut:

### Current Practical State

- project saat ini memakai alias `@/...`

### Target Direction

- tetap gunakan alias `@/`
- nanti saat pindah ke `src/`, alias diarahkan ke root source final

### Recommendation

- jangan ubah gaya alias lagi di tengah-tengah fase
- cukup pertahankan `@/` dan geser base path pada fase `src`

## 9. Migration Safety Rules

Selama Phase A2, aturan berikut wajib dijaga:

- jangan rename route publik dulu
- jangan campur refactor struktur dengan perubahan visual
- jangan ubah copywriting, warna, atau urutan section
- jangan gabungkan pemindahan folder dengan optimasi client/server boundary sekaligus
- setiap langkah harus tetap lolos:
  - `lint`
  - `build`

## 10. Suggested Work Order

Urutan kerja A2 yang direkomendasikan:

1. buat folder target
2. buat file dasar di `lib/`, `types/`, `styles/`, `hooks/`
3. siapkan `components/layouts/`
4. siapkan `components/sections/*`
5. siapkan `features/portfolio` dan `features/artikel`
6. putuskan import ownership baru
7. validasi tidak ada collision nama/path

## 11. Deliverables

Phase A2 dianggap selesai jika tersedia:

- struktur folder fondasi target
- file dasar `lib` siap pakai
- folder `layouts`, `sections`, `features`, `ui` sudah terbentuk
- naming convention sudah dikunci
- tidak ada ambiguity tentang lokasi file baru ke depannya

## 12. Checklist

### Folder Checklist

- [ ] Buat `components/layouts/`
- [ ] Buat `components/sections/home/`
- [ ] Buat `components/sections/portfolio/`
- [ ] Buat `components/sections/artikel/`
- [ ] Buat `components/sections/tentang/`
- [ ] Buat `components/sections/kontak/`
- [ ] Buat `components/ui/`
- [ ] Buat `features/portfolio/`
- [ ] Buat `features/artikel/`
- [ ] Buat `hooks/`
- [ ] Buat `types/`
- [ ] Buat `styles/`

### File Checklist

- [ ] Siapkan `lib/site.ts`
- [ ] Siapkan `lib/metadata.ts`
- [ ] Siapkan `lib/constants.ts`
- [ ] Siapkan `lib/utils.ts`
- [ ] Siapkan `types/index.ts`
- [ ] Siapkan `styles/animations.css`
- [ ] Siapkan `hooks/useMediaQuery.ts` bila diperlukan

### Decision Checklist

- [ ] Kunci naming convention route
- [ ] Kunci naming convention component
- [ ] Kunci ownership `layouts` vs `sections` vs `features`
- [ ] Kunci direction alias import `@/`

## 13. Acceptance Criteria

Phase A2 lulus bila:

- [ ] struktur fondasi target sudah ada
- [ ] tim bisa menentukan lokasi file baru tanpa kebingungan
- [ ] belum ada perubahan visual yang tidak disengaja
- [ ] aplikasi tetap buildable setelah pembentukan fondasi
- [ ] semua fase berikutnya bisa langsung memakai struktur baru ini

## 14. Recommended Next Step

Setelah A2 siap, langkah paling tepat adalah:

- `Phase A3` — mulai shared layout migration

Karena setelah fondasi tersedia, komponen paling aman untuk dipindahkan terlebih dahulu adalah:

- navbar
- footer
- mobile bottom bar
- container

Lalu baru menyusul:

- `Phase B1` — home sections

