# Phase C4 — Tentang Page Refactor

Dokumen ini membahas refactor halaman `tentang` agar mengikuti struktur final section-based dan route berbahasa Indonesia.

## 1. Objective

Tujuan utama:

- mengubah route `/about` menjadi `/tentang`
- memecah halaman tentang ke section final
- menjaga seluruh tampilan tetap identik

## 2. Scope

### Included

- route `/tentang`
- pemecahan section tentang ke folder final
- update internal links

### Excluded

- perubahan copy
- perubahan visual
- perubahan domain logic besar

## 3. Dependency

- `docs/phase-a1-migration-map.md`
- `docs/phase-b1-home-sections-refactor.md`

## 4. Current State

Current:

- `frontend/app/(public)/about/page.tsx`
- `frontend/app/(public)/about/_components/about-page-sections.tsx`

Masalah:

- route masih `about`
- file sections masih belum di final location/naming

## 5. Target State

```txt
src/
├─ app/
│  └─ tentang/
│     └─ page.tsx
└─ components/
   └─ sections/
      └─ tentang/
         ├─ AboutHeroSection.tsx
         ├─ AboutPhilosophySection.tsx
         ├─ AboutCareerSection.tsx
         ├─ AboutExpertiseSection.tsx
         └─ AboutCTASection.tsx
```

## 6. Migration Map

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/about/page.tsx` | `src/app/tentang/page.tsx` |
| `frontend/app/(public)/about/_components/about-page-sections.tsx` | dipecah ke `src/components/sections/tentang/` |

## 7. Work Breakdown

### Step 1 — Create New Route

- [ ] Buat `app/tentang/page.tsx`
- [ ] update nav dan link

### Step 2 — Split Sections

- [ ] `AboutHeroSection`
- [ ] `AboutPhilosophySection`
- [ ] `AboutCareerSection`
- [ ] `AboutExpertiseSection`
- [ ] `AboutCTASection`

### Step 3 — Compose Final Page

- [ ] page hanya jadi komposer section

## 8. Risks & Watchouts

- broken links ke `/about`
- perubahan spacing section bila split tidak hati-hati

## 9. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] visual check desktop/mobile

## 10. Acceptance Criteria

- [ ] route `/tentang` aktif
- [ ] internal links sudah mengikuti route baru
- [ ] section tentang berada di folder final
- [ ] tidak ada perubahan visual yang tidak disetujui

## 11. Recommended Next Step

- `Phase C5` — Kontak Page Refactor

