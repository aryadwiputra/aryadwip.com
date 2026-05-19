# Phase C5 — Kontak Page Refactor

Dokumen ini membahas refactor halaman `kontak` agar mengikuti route Indonesia final dan struktur section-based yang lebih rapi.

## 1. Objective

Tujuan utama:

- mengubah route `/contact` menjadi `/kontak`
- memecah halaman kontak ke section final
- memisahkan static layout dan form behavior

## 2. Scope

### Included

- route `/kontak`
- section hero/form/sidebar
- client island kecil untuk feedback submit
- update seluruh internal link terkait

### Excluded

- integrasi submit backend final
- perubahan copywriting
- perubahan visual

## 3. Dependency

- `docs/phase-a1-migration-map.md`
- `docs/phase-a3-shared-layout-migration.md`

## 4. Current State

Current:

- `frontend/app/(public)/contact/page.tsx`
- `frontend/app/(public)/contact/_components/contact-page-client.tsx`
- `frontend/app/(public)/contact/_components/contact-page-sections.tsx`

Masalah:

- route masih `contact`
- file client masih besar
- form behavior dan static layout masih terlalu menyatu

## 5. Target State

```txt
src/
├─ app/
│  └─ kontak/
│     └─ page.tsx
└─ components/
   └─ sections/
      └─ kontak/
         ├─ ContactHeroSection.tsx
         ├─ ContactFormSection.tsx
         ├─ ContactSidebarSection.tsx
         └─ ContactFormClient.tsx
```

## 6. Server/Client Split

### Server-side

- hero
- form layout
- sidebar kontak
- map embed

### Client-side

- simulated submit feedback
- future-ready form interaction

## 7. Work Breakdown

### Step 1 — Create New Route

- [ ] Buat `app/kontak/page.tsx`
- [ ] update seluruh link `/contact` → `/kontak`

### Step 2 — Split Sections

- [ ] `ContactHeroSection`
- [ ] `ContactFormSection`
- [ ] `ContactSidebarSection`

### Step 3 — Extract Form Client Logic

- [ ] `ContactFormClient.tsx`
- [ ] pindahkan feedback submit ke client island kecil

## 8. Risks & Watchouts

- broken link ke `/contact`
- form layout regress
- sticky sidebar berubah perilaku

## 9. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] manual test submit feedback
- [ ] visual check desktop/mobile

## 10. Acceptance Criteria

- [ ] route `/kontak` aktif
- [ ] layout form tetap sama
- [ ] feedback submit tetap berjalan
- [ ] tidak ada perubahan visual yang tidak disetujui

## 11. Recommended Next Step

- `Phase D1` — UI Primitives

