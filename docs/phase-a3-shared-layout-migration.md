# Phase A3 — Shared Layout Migration

Dokumen ini fokus pada migrasi shared layout system ke bentuk yang lebih konsisten dan modern untuk Next.js App Router.

Phase A3 adalah jembatan antara:

- fondasi struktur folder yang sudah disiapkan di `Phase A2`
- refactor section/feature pada fase-fase berikutnya

Tujuan utamanya adalah memastikan seluruh halaman publik memakai shell yang stabil, reusable, dan mudah dipelihara.

## 1. Objective

Phase A3 bertujuan untuk:

- memusatkan seluruh shared layout component
- menyatukan aturan kepemilikan navbar/footer/mobile navigation
- menyederhanakan page agar hanya fokus ke konten
- menghilangkan redundansi wrapper layout di banyak halaman
- menjaga agar arsitektur layout aman terhadap hydration mismatch

## 2. Scope

### Included

- migrasi `SiteHeader` → `Navbar`
- migrasi `SiteFooter` → `Footer`
- migrasi `MobileBottomNav` → `MobileBottomBar`
- pembentukan `Container`
- penyederhanaan layout shell publik
- konsolidasi konfigurasi navigasi
- audit active-nav handling

### Excluded

- rename route publik ke bahasa Indonesia final
- migrasi besar section per halaman
- dynamic route `[slug]`
- ekstraksi UI primitives
- refactor feature domain besar

## 3. Dependency

Harus mengacu pada:

- `docs/phase-a1-migration-map.md`
- `docs/phase-a2-foundation-plan.md`

## 4. Current Layout State

Saat ini shared layout tersebar di:

- `frontend/components/layout/site-header.tsx`
- `frontend/components/layout/site-footer.tsx`
- `frontend/components/layout/mobile-bottom-nav.tsx`
- `frontend/components/layout/public-shell.tsx`
- `frontend/lib/site-nav.ts`

Masalah dari kondisi saat ini:

- naming belum final (`site-header`, bukan `Navbar`)
- logic shell publik masih terpisah dari target structure `components/layouts`
- konfigurasi navigasi masih belum digabung ke arah `lib/site.ts`
- perlu menjaga agar home route dan public route lain tidak lagi memicu mismatch hydration

## 5. Target Layout Architecture

Target phase ini:

```txt
components/
└─ layouts/
   ├─ Navbar.tsx
   ├─ Footer.tsx
   ├─ MobileBottomBar.tsx
   └─ Container.tsx
```

Pendukung:

```txt
lib/
├─ site.ts
└─ metadata.ts
```

Dan route shell:

```txt
app/
├─ layout.tsx
└─ ...
```

## 6. Ownership Rules

### `components/layouts/*`

Hanya untuk:

- shared shell lintas halaman
- structural layout helpers
- bukan tempat logic domain

Isi yang cocok:

- navbar
- footer
- mobile bottom bar
- generic content container

### `lib/site.ts`

Harus menjadi source of truth untuk:

- site title dasar
- nav items
- route labels
- helper active route
- shared path constants jika perlu

### `app/layout.tsx`

Bertugas untuk:

- HTML root
- body wrapper
- global CSS
- komposisi layout global tingkat atas

Tidak boleh terlalu banyak berisi domain/page-specific logic.

## 7. Migration Map

### File Rename / Move

| Current File | Target File |
| --- | --- |
| `frontend/components/layout/site-header.tsx` | `src/components/layouts/Navbar.tsx` |
| `frontend/components/layout/site-footer.tsx` | `src/components/layouts/Footer.tsx` |
| `frontend/components/layout/mobile-bottom-nav.tsx` | `src/components/layouts/MobileBottomBar.tsx` |
| `frontend/components/layout/public-shell.tsx` | logic disederhanakan, lalu dipindah/diintegrasikan ke pattern final |
| `frontend/lib/site-nav.ts` | `src/lib/site.ts` |

### File To Be Created

| New File | Purpose |
| --- | --- |
| `src/components/layouts/Container.tsx` | shared width/padding wrapper |
| `src/lib/site.ts` | site config + nav config |

## 8. Component Responsibilities

### 8.1 Navbar

Tanggung jawab:

- menampilkan brand/site logo text
- menampilkan desktop navigation
- menampilkan CTA utama di area header
- menerima informasi active state atau menghitungnya dari helper yang aman

Tidak boleh:

- memegang logic domain page
- memegang interaksi non-layout yang tidak relevan

### 8.2 Footer

Tanggung jawab:

- menampilkan footer info global
- menampilkan navigasi/footer links bersama
- menampilkan info layanan/site summary

Tidak boleh:

- mengandung data page-specific

### 8.3 MobileBottomBar

Tanggung jawab:

- menampilkan navigasi bawah untuk mobile
- menyorot active route

Hal yang harus dijaga:

- aman terhadap layout overlap
- konsisten dengan safe area mobile

### 8.4 Container

Tanggung jawab:

- menjadi wrapper lebar maksimum bersama
- mengurangi pengulangan class seperti:
  - `max-w-7xl`
  - `mx-auto`
  - `px-6`

Catatan:

- jangan over-abstraction
- `Container` cukup untuk pattern paling sering dipakai

## 9. Active Navigation Strategy

Ini bagian penting karena sebelumnya sempat menyebabkan masalah hydration.

### Masalah yang Harus Dihindari

- branch render besar di Client Component berdasarkan `usePathname()`
- render shell berbeda antara SSR dan client hydration

### Strategi yang Direkomendasikan

Pilihan aman:

- active state dihitung dengan pola yang deterministik
- jangan gunakan client-side branch untuk “menghilangkan shell” pada route tertentu

Pendekatan yang disarankan:

- home route dan public routes memiliki komposisi layout yang eksplisit
- `Navbar` dan `MobileBottomBar` hanya menggunakan active state untuk styling, bukan untuk membentuk tree yang berbeda secara drastis

### Decision

Phase A3 harus mengunci aturan:

- active route boleh dipakai untuk highlight
- active route **tidak boleh** dipakai untuk memunculkan/menyembunyikan shell global secara kondisional di Client Component

## 10. Public Layout Strategy

Ada dua pola yang mungkin:

### Opsi A — Root Layout Universal

- semua halaman memakai shell yang sama di `app/layout.tsx`

Kelemahan:

- sulit jika home butuh perlakuan berbeda
- rawan conditional branch jika tidak hati-hati

### Opsi B — Explicit Layout Composition per Group/Route

- home bisa dirakit eksplisit
- halaman publik lain bisa memakai layout group yang konsisten

### Recommendation

Untuk kondisi project ini:

- pilih strategi yang **tidak** memaksa conditional branch client
- lebih baik sedikit eksplisit tetapi stabil, daripada terlalu pintar tapi rawan hydration issue

## 11. Work Breakdown

### Step 1 — Normalize Layout Naming

- rename file shared layout ke naming final
- update semua import

Checklist:

- [ ] `site-header` → `Navbar`
- [ ] `site-footer` → `Footer`
- [ ] `mobile-bottom-nav` → `MobileBottomBar`

### Step 2 — Build `Container`

Checklist:

- [ ] buat `Container.tsx`
- [ ] tentukan API sederhana
- [ ] gunakan hanya untuk wrapper yang memang konsisten

### Step 3 — Consolidate Navigation Config

Checklist:

- [ ] pindahkan config dari `site-nav.ts` ke `lib/site.ts`
- [ ] rapikan label route
- [ ] buat helper active nav

### Step 4 — Simplify Public Shell

Checklist:

- [ ] evaluasi apakah `public-shell` masih perlu sebagai file terpisah
- [ ] jika tetap perlu, buat dia stabil dan deterministik
- [ ] hapus pola conditional render yang bisa memicu hydration mismatch

### Step 5 — Clean Page Ownership

Checklist:

- [ ] page tidak lagi merakit layout secara redundant
- [ ] layout ownership jelas: shell di `components/layouts`

## 12. Risks & Watchouts

### Hydration Risk

Paling penting di phase ini.

Jangan:

- menyembunyikan layout global berdasarkan `usePathname()` di Client Component bila itu mengubah tree besar

### Visual Regression Risk

Kemungkinan terdampak:

- sticky header offset
- mobile bottom spacing
- footer order
- hero home jika shell berubah

### Import Breakage Risk

Karena file layout dipindah/rename, semua import harus diperbarui sekaligus.

## 13. Validation Plan

Setelah setiap sub-step:

- [ ] cek import path
- [ ] jalankan `npm run lint`
- [ ] jalankan `npm run build`

Manual visual verification minimal:

- [ ] home
- [ ] portfolio listing
- [ ] portfolio detail
- [ ] artikel listing
- [ ] artikel detail
- [ ] tentang
- [ ] kontak
- [ ] mobile navbar
- [ ] sticky desktop navbar

## 14. Deliverables

Phase A3 dianggap selesai jika:

- shared layout sudah terkonsolidasi
- naming layout sudah final
- nav config sudah jelas ownership-nya
- page tidak lagi redundant dalam merakit shell
- tidak ada hydration warning baru

## 15. Checklist

- [ ] Rename dan pindahkan shared layout files
- [ ] Buat `Container.tsx`
- [ ] Konsolidasikan nav config ke `lib/site.ts`
- [ ] Stabilkan public shell strategy
- [ ] Audit home route agar tidak regress
- [ ] Update seluruh import
- [ ] Lint hijau
- [ ] Build hijau

## 16. Acceptance Criteria

Phase A3 lulus bila:

- [ ] `Navbar`, `Footer`, `MobileBottomBar`, `Container` punya ownership jelas
- [ ] tidak ada wrapper shell redundant di banyak page
- [ ] active nav bekerja konsisten
- [ ] tidak ada hydration mismatch dari shell
- [ ] tidak ada perubahan visual yang tidak disetujui

## 17. Recommended Next Step

Setelah A3 selesai, fase paling tepat berikutnya adalah:

- `Phase B1` — Home Sections Refactor

Karena setelah shared layout stabil, page home bisa dibersihkan ke struktur final:

- `components/sections/home/*`

