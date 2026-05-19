# Master Refactor Roadmap

Dokumen ini adalah roadmap induk untuk refactor struktur frontend agar bergerak menuju arsitektur yang:

- mudah dipahami
- mudah dikembangkan
- cocok untuk Next.js App Router modern
- aman secara bertahap tanpa merusak output visual yang sudah disetujui

Roadmap ini merangkum seluruh phase dari:

- A1
- A2
- A3
- B1
- B2
- B3
- B4
- C1
- C2
- C3
- C4
- C5
- D1
- D2
- D3
- D4
- D5

## 1. Vision Target

Target akhir struktur project adalah mengarah ke bentuk seperti:

```txt
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css
│  ├─ portfolio/
│  │  ├─ page.tsx
│  │  └─ [slug]/
│  │     └─ page.tsx
│  ├─ artikel/
│  │  ├─ page.tsx
│  │  └─ [slug]/
│  │     └─ page.tsx
│  ├─ tentang/
│  │  └─ page.tsx
│  └─ kontak/
│     └─ page.tsx
│
├─ components/
│  ├─ layouts/
│  ├─ sections/
│  └─ ui/
│
├─ features/
│  ├─ portfolio/
│  └─ artikel/
│
├─ lib/
├─ hooks/
├─ types/
├─ assets/
└─ styles/
```

## 2. Core Refactor Principles

Semua phase dalam roadmap ini harus mengikuti prinsip berikut:

- jangan ubah output visual tanpa kebutuhan jelas
- jangan ubah copywriting, warna, atau section order tanpa persetujuan
- pindahkan struktur secara bertahap
- domain data harus dipisah dari presentational sections
- shared layout harus dipisah dari page-specific components
- Client Component harus sekecil mungkin
- setiap phase harus ditutup dengan:
  - `npm run lint`
  - `npm run build`

## 3. Global Phase List

### Phase A — Foundation

- A1 — Migration Map
- A2 — Foundation Plan
- A3 — Shared Layout Migration

### Phase B — Home + Portfolio

- B1 — Home Sections Refactor
- B2 — Portfolio Domain Foundation
- B3 — Portfolio Listing Refactor
- B4 — Portfolio Detail Dynamic Route

### Phase C — Artikel + Tentang + Kontak

- C1 — Article Domain Foundation
- C2 — Article Listing Refactor
- C3 — Article Detail Dynamic Route
- C4 — Tentang Page Refactor
- C5 — Kontak Page Refactor

### Phase D — Final Architecture Cleanup

- D1 — UI Primitives
- D2 — Client/Server Boundary Cleanup
- D3 — Styles & Assets Organization
- D4 — Move to `src/`
- D5 — Final Cleanup

## 4. Linked Phase Documents

### Foundation

- `docs/phase-a1-migration-map.md`
- `docs/phase-a2-foundation-plan.md`
- `docs/phase-a3-shared-layout-migration.md`

### Home + Portfolio

- `docs/phase-b1-home-sections-refactor.md`
- `docs/phase-b2-portfolio-domain-foundation.md`
- `docs/phase-b3-portfolio-listing-refactor.md`

### Artikel + Tentang + Kontak

- `docs/phase-c1-article-domain-foundation.md`
- `docs/phase-c2-article-listing-refactor.md`
- `docs/phase-c3-article-detail-dynamic-route.md`
- `docs/phase-c4-about-page-refactor.md`
- `docs/phase-c5-contact-page-refactor.md`

### Final Cleanup & Hardening

- `docs/phase-d1-ui-primitives.md`
- `docs/phase-d2-client-server-boundary-cleanup.md`
- `docs/phase-d3-styles-assets-organization.md`
- `docs/phase-d4-move-to-src.md`
- `docs/phase-d5-final-cleanup.md`

## 5. Recommended Sprint Order

Berikut adalah urutan sprint yang direkomendasikan.

Ini mengikuti prinsip:

- fondasi dulu
- home dan portfolio berikutnya
- artikel/tentang/kontak setelah domain utama mulai stabil
- boundary cleanup dan `src/` dipindah belakangan saat struktur sudah settle

### Sprint 1

Fokus:

- audit
- mapping
- fondasi folder

Phase:

- A1 — Migration Map
- A2 — Foundation Plan

Goal Sprint:

- struktur target sudah jelas
- ownership file tidak ambigu
- fondasi folder siap

### Sprint 2

Fokus:

- shared layout
- kestabilan shell publik

Phase:

- A3 — Shared Layout Migration

Goal Sprint:

- layout bersama stabil
- navbar/footer/mobile bottom bar punya ownership jelas
- tidak ada hydration mismatch dari shell

### Sprint 3

Fokus:

- beranda
- fondasi domain portfolio

Phase:

- B1 — Home Sections Refactor
- B2 — Portfolio Domain Foundation

Goal Sprint:

- home section-based dan rapi
- domain `portfolio` punya source of truth

### Sprint 4

Fokus:

- listing portfolio
- detail portfolio berbasis slug

Phase:

- B3 — Portfolio Listing Refactor
- B4 — Portfolio Detail Dynamic Route

Goal Sprint:

- `/portfolio` lebih bersih dan server-first friendly
- `/portfolio/[slug]` siap menggantikan route detail lama

### Sprint 5

Fokus:

- fondasi domain artikel
- listing artikel

Phase:

- C1 — Article Domain Foundation
- C2 — Article Listing Refactor

Goal Sprint:

- domain `artikel` punya source of truth
- route `/artikel` siap dan listing lebih bersih

### Sprint 6

Fokus:

- detail artikel
- halaman tentang
- halaman kontak

Phase:

- C3 — Article Detail Dynamic Route
- C4 — Tentang Page Refactor
- C5 — Kontak Page Refactor

Goal Sprint:

- `/artikel/[slug]` aktif
- `/tentang` aktif
- `/kontak` aktif

### Sprint 7

Fokus:

- UI primitives
- boundary client/server

Phase:

- D1 — UI Primitives
- D2 — Client/Server Boundary Cleanup

Goal Sprint:

- pola UI berulang mulai konsisten
- area `use client` menyusut
- hydration risk ditekan

### Sprint 8

Fokus:

- styles/assets cleanup
- pindah ke `src`
- final cleanup

Phase:

- D3 — Styles & Assets Organization
- D4 — Move to `src/`
- D5 — Final Cleanup

Goal Sprint:

- struktur akhir mendekati target final
- tidak ada legacy structure yang membingungkan

## 6. Why This Sprint Order

Urutan sprint di atas dipilih karena:

### Foundation first

- kalau struktur dasar belum disepakati, semua refactor berikutnya akan mahal

### Layout before sections

- home dan page-specific sections akan lebih aman di-refactor setelah shared shell stabil

### Domain before dynamic routes

- `portfolio/[slug]` dan `artikel/[slug]` tidak sebaiknya dibuat sebelum source data tunggal siap

### Boundary cleanup after structure stabilizes

- kalau `use client` dibersihkan terlalu awal, kita berisiko membuang effort saat struktur folder masih berubah

### `src/` move near the end

- pindah ke `src/` terlalu awal hanya akan memperbesar risiko import breakage

## 7. Validation Rule Per Sprint

Setiap sprint minimal harus ditutup dengan:

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] visual smoke test pada route utama

Visual smoke test minimal:

- [ ] home
- [ ] portfolio listing
- [ ] portfolio detail / slug target
- [ ] artikel listing
- [ ] artikel detail / slug target
- [ ] tentang
- [ ] kontak
- [ ] mobile navbar
- [ ] sticky desktop navbar

## 8. Route Evolution Plan

### Current → Final

| Current | Final |
| --- | --- |
| `/` | `/` |
| `/portfolio` | `/portfolio` |
| `/portfolio/detail` | `/portfolio/[slug]` |
| `/articles` | `/artikel` |
| `/articles/detail` | `/artikel/[slug]` |
| `/about` | `/tentang` |
| `/contact` | `/kontak` |

### Suggested Timing

- `/portfolio/detail` → `/portfolio/[slug]` di Sprint 4
- `/articles` → `/artikel` di Sprint 5
- `/articles/detail` → `/artikel/[slug]` di Sprint 6
- `/about` → `/tentang` di Sprint 6
- `/contact` → `/kontak` di Sprint 6

## 9. Architecture End State

Setelah seluruh roadmap selesai, pembagian tanggung jawab harus jelas:

### `app/`

- hanya route dan layout

### `components/layouts/`

- navbar
- footer
- mobile bottom bar
- container

### `components/sections/`

- section spesifik halaman
- terutama presentational

### `components/ui/`

- primitive reusable

### `features/`

- domain data
- domain type
- domain util
- domain interactive components

### `lib/`

- global constants
- site config
- metadata helpers
- generic utils

## 10. Master Checklist

### Foundation

- [ ] A1 selesai
- [ ] A2 selesai
- [ ] A3 selesai

### Home + Portfolio

- [ ] B1 selesai
- [ ] B2 selesai
- [ ] B3 selesai
- [ ] B4 selesai

### Artikel + Tentang + Kontak

- [ ] C1 selesai
- [ ] C2 selesai
- [ ] C3 selesai
- [ ] C4 selesai
- [ ] C5 selesai

### Final Cleanup

- [ ] D1 selesai
- [ ] D2 selesai
- [ ] D3 selesai
- [ ] D4 selesai
- [ ] D5 selesai

## 11. High-Risk Areas

Area yang paling harus diawasi sepanjang roadmap:

- home hero regression
- hydration mismatch dari shell/layout
- `next/image fill` tanpa parent `relative`
- broken links akibat route rename
- filter/search behavior regress
- duplicate data antara teaser/list/detail
- import alias breakage saat move ke `src`

## 12. Definition of Done

Roadmap dianggap selesai jika:

- [ ] struktur folder sesuai target besar
- [ ] route final aktif
- [ ] shared layout konsisten
- [ ] section ownership jelas
- [ ] domain `portfolio` dan `artikel` punya source of truth
- [ ] client islands kecil dan terkontrol
- [ ] `src/` migration selesai
- [ ] tidak ada hydration warning baru
- [ ] `npm run lint` hijau
- [ ] `npm run build` hijau

## 13. Recommended Next Operational Step

Kalau dokumen roadmap ini sudah disetujui, pilihan langkah berikutnya ada dua:

### Opsi 1 — Eksekusi berurutan dari awal

Mulai dari:

- A2 atau A3 tergantung kondisi terkini implementasi

### Opsi 2 — Sinkronkan dokumen dengan kondisi repo saat ini

Karena sebagian refactor sudah pernah dikerjakan, langkah yang paling aman adalah:

- audit posisi repo sekarang terhadap roadmap
- tandai phase mana yang sudah parsial selesai
- lalu lanjut dari phase paling relevan berikutnya

Untuk kondisi repo saat ini, pendekatan kedua biasanya lebih aman.

