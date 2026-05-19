# Phase B3 — Portfolio Listing Refactor

Dokumen ini membahas refactor halaman listing `portfolio` setelah fondasi domain `portfolio` dibentuk pada `Phase B2`.

Fokus utamanya adalah:

- membersihkan halaman `/portfolio`
- memisahkan markup section dari domain behavior
- mengurangi file client besar yang terlalu banyak memegang DOM imperative
- menyiapkan listing portfolio agar lebih server-first dan lebih mudah dikembangkan

## 1. Objective

Tujuan utama Phase B3:

- menjadikan halaman listing portfolio lebih terstruktur
- memisahkan section presentational dari client interaction
- memakai source of truth dari `features/portfolio/data.ts`
- mengurangi ketergantungan pada `querySelectorAll`, `data-category`, dan manipulasi `classList`

## 2. Scope

### Included

- refactor route `/portfolio`
- pemisahan section hero, grid, dan CTA
- refactor filter behavior ke client island/domain component kecil
- penggunaan data dari domain portfolio

### Excluded

- implementasi detail route `[slug]`
- perubahan visual kartu/listing yang tidak diminta
- perubahan copywriting
- dynamic search kompleks
- UI primitive extraction umum

## 3. Dependency

Harus mengacu pada:

- `docs/phase-a1-migration-map.md`
- `docs/phase-a2-foundation-plan.md`
- `docs/phase-a3-shared-layout-migration.md`
- `docs/phase-b1-home-sections-refactor.md`
- `docs/phase-b2-portfolio-domain-foundation.md`

## 4. Current State

Saat ini listing portfolio terutama berada di:

- `frontend/app/(public)/portfolio/page.tsx`
- `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx`
- `frontend/app/(public)/portfolio/_components/portfolio-page-sections.tsx`

Masalah current state:

- file client terlalu besar
- markup list + filter behavior masih bercampur
- filtering masih imperative:
  - `querySelectorAll`
  - `data-filter`
  - `data-category`
  - `classList.add/remove`
- kartu project belum sepenuhnya membaca dari source of truth domain

## 5. Target State

Struktur target konseptual:

```txt
src/
├─ app/
│  └─ portfolio/
│     └─ page.tsx
├─ components/
│  └─ sections/
│     └─ portfolio/
│        ├─ PortfolioHeroSection.tsx
│        ├─ PortfolioGridSection.tsx
│        └─ PortfolioCTASection.tsx
└─ features/
   └─ portfolio/
      ├─ components/
      │  └─ PortfolioFilterClient.tsx
      ├─ data.ts
      ├─ types.ts
      └─ utils.ts
```

## 6. Page Responsibility

### `app/portfolio/page.tsx`

Setelah B3, route file hanya boleh:

- mengimpor section-level component
- membaca data dari domain portfolio
- menyusun halaman secara server-first

Tidak boleh:

- berisi logika DOM imperative
- memegang filter logic langsung
- menyimpan data project hardcoded

## 7. Section Responsibilities

### 7.1 `PortfolioHeroSection`

Tanggung jawab:

- menampilkan hero listing portfolio
- menampilkan statistik/summary jika memang ada
- murni presentational

Tidak boleh:

- mengandung logic filtering

### 7.2 `PortfolioGridSection`

Tanggung jawab:

- merender daftar project dari data domain
- menerima data yang sudah rapi
- bisa menampilkan empty state bila diperlukan

Catatan:

- section ini bisa tetap server component jika state filter dipisahkan dengan benar
- bila state filter memengaruhi render client-side, pertimbangkan split:
  - server section untuk initial render
  - client island untuk kontrol interaktif

### 7.3 `PortfolioCTASection`

Tanggung jawab:

- menampilkan CTA bawah
- tetap murni presentational

## 8. Client Interaction Strategy

Ini bagian paling penting di B3.

### Masalah Saat Ini

Filter portfolio sekarang di-handle dengan:

- listener manual
- DOM traversal manual
- toggling class langsung

Kekurangan pola ini:

- sulit ditest
- sulit dipelihara
- membuat file client terlalu besar
- tidak idiomatik untuk React/Next

### Target Strategy

Pisahkan filter menjadi client island kecil:

- `features/portfolio/components/PortfolioFilterClient.tsx`

Komponen ini bertanggung jawab untuk:

- menyimpan state filter aktif
- mengontrol dataset/filtering di level React
- bukan memanipulasi DOM secara manual

### Recommended State Model

State minimum:

- `activeCategory`

Optional:

- `visibleItems`

### Recommended Render Model

Pilihan ideal:

- page/server component membaca seluruh data portfolio
- client island menerima data serializable
- grid dirender berdasarkan state React, bukan `classList`

## 9. Data Flow Direction

Target flow:

1. `features/portfolio/data.ts` menjadi source of truth
2. `app/portfolio/page.tsx` membaca data portfolio
3. `PortfolioHeroSection` menerima props jika perlu
4. `PortfolioFilterClient` menerima:
   - daftar category
   - daftar item portfolio
5. `PortfolioGridSection` dirender dari item yang sudah difilter

## 10. Migration Map

### Current Files → Target Files

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/portfolio/_components/portfolio-page-sections.tsx` | dipecah ke `src/components/sections/portfolio/PortfolioHeroSection.tsx`, `PortfolioCTASection.tsx`, dan kemungkinan section lain |
| `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx` | dipecah ke `src/components/sections/portfolio/PortfolioGridSection.tsx` + `src/features/portfolio/components/PortfolioFilterClient.tsx` |
| `frontend/app/(public)/portfolio/page.tsx` | `src/app/portfolio/page.tsx` |

## 11. Presentational vs Domain Split

### Masuk `components/sections/portfolio`

- hero listing
- CTA bawah
- grid container
- empty state visual

### Masuk `features/portfolio/components`

- filter controller
- logic-driven portfolio card jika dipakai lintas home/listing/detail
- komponen yang sangat tergantung pada type/data portfolio

### Tetap di `features/portfolio/*`

- types
- data
- util

## 12. Empty State Strategy

Saat ini ada empty state jika filter tidak cocok.

Target:

- empty state tetap dipertahankan
- tapi render condition ditentukan oleh React state/data, bukan DOM class toggling langsung

Checklist:

- [ ] empty state tetap 1:1 secara visual
- [ ] trigger berasal dari hasil filter React

## 13. Risks & Watchouts

### Visual Regression Risk

Yang harus dijaga:

- layout kartu 3 kolom tidak berubah
- spacing vertical tidak berubah
- hover effect tidak berubah
- CTA bawah tidak berubah

### Behavioral Regression Risk

Yang harus dijaga:

- filter category tetap bekerja seperti sekarang
- empty state tetap muncul saat perlu
- tidak ada project card yang hilang karena mapping data salah

### Client Boundary Risk

Yang harus dijaga:

- jangan pindahkan seluruh listing menjadi client-only besar lagi
- client island harus kecil dan spesifik

## 14. Work Breakdown

### Step 1 — Prepare Section Files

Checklist:

- [ ] siapkan `PortfolioHeroSection.tsx`
- [ ] siapkan `PortfolioGridSection.tsx`
- [ ] siapkan `PortfolioCTASection.tsx`

### Step 2 — Wire to Portfolio Domain

Checklist:

- [ ] listing membaca data dari `features/portfolio/data.ts`
- [ ] category membaca data dari domain util/type
- [ ] card content tidak lagi hardcoded acak di file client lama

### Step 3 — Build Filter Client Island

Checklist:

- [ ] buat `PortfolioFilterClient.tsx`
- [ ] pindahkan state filter ke React state
- [ ] hilangkan listener DOM manual
- [ ] hilangkan `classList` imperative

### Step 4 — Compose Final Page

Checklist:

- [ ] `app/portfolio/page.tsx` jadi komposer server-first
- [ ] section + domain components terhubung dengan jelas

## 15. Validation Plan

Teknis:

- [ ] `npm run lint`
- [ ] `npm run build`

Visual/manual:

- [ ] hero portfolio identik
- [ ] grid kartu identik
- [ ] filter aktif terlihat benar
- [ ] empty state tampil benar
- [ ] CTA bawah identik

Behavioral:

- [ ] filter `all` berjalan
- [ ] filter per category berjalan
- [ ] jumlah item tampil konsisten

## 16. Deliverables

Phase B3 dianggap selesai bila:

- listing portfolio sudah memakai domain portfolio sebagai source data
- filter logic tidak lagi imperative
- file client besar berkurang
- page listing lebih dekat ke server-first architecture

## 17. Checklist

- [ ] Siapkan sections portfolio listing
- [ ] Hubungkan ke `features/portfolio/data.ts`
- [ ] Buat `PortfolioFilterClient.tsx`
- [ ] Pindahkan filter ke React state
- [ ] Pertahankan empty state
- [ ] Lint hijau
- [ ] Build hijau

## 18. Acceptance Criteria

Phase B3 lulus bila:

- [ ] `/portfolio` lebih bersih secara arsitektur
- [ ] data source tunggal dipakai oleh listing
- [ ] filtering tetap bekerja
- [ ] tidak ada perubahan visual yang tidak disetujui
- [ ] siap melanjutkan ke detail dynamic route

## 19. Recommended Next Step

Setelah B3 selesai, fase paling logis berikutnya adalah:

- `Phase B4` — Portfolio Detail Dynamic Route

Karena setelah listing dan domain portfolio stabil, detail page bisa dipindahkan dari route statis lama ke `/portfolio/[slug]`.

