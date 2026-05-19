# Phase C2 — Article Listing Refactor

Dokumen ini membahas refactor halaman listing artikel setelah domain `artikel` dibentuk pada `Phase C1`.

Fokus utamanya adalah:

- membersihkan halaman listing artikel
- memisahkan section presentational dari search/filter behavior
- memakai source of truth dari `features/artikel/data.ts`
- mengurangi file client besar yang masih memegang DOM imperative

## 1. Objective

Tujuan utama Phase C2:

- menjadikan halaman listing artikel lebih terstruktur
- mengubah route ke versi Indonesia final: `/artikel`
- memisahkan search/filter ke client island kecil
- menjaga hasil visual tetap 1:1

## 2. Scope

### Included

- refactor route listing artikel
- pemisahan hero, list, empty state, dan CTA
- migrasi search/filter ke komponen kecil berbasis React state
- penggunaan data dari domain `artikel`

### Excluded

- detail route `[slug]`
- perubahan copywriting
- perubahan visual card/listing
- UI primitive extraction global

## 3. Dependency

Harus mengacu pada:

- `docs/phase-c1-article-domain-foundation.md`
- `docs/phase-a3-shared-layout-migration.md`

## 4. Current State

Current files:

- `frontend/app/(public)/articles/page.tsx`
- `frontend/app/(public)/articles/_components/articles-page-client.tsx`
- `frontend/app/(public)/articles/_components/articles-page-sections.tsx`

Masalah current state:

- file client masih besar
- search/filter masih imperative
- data artikel belum sepenuhnya dibaca dari source tunggal
- route masih `articles`, belum `artikel`

## 5. Target State

```txt
src/
├─ app/
│  └─ artikel/
│     └─ page.tsx
├─ components/
│  └─ sections/
│     └─ artikel/
│        ├─ ArticlesHeroSection.tsx
│        ├─ ArticlesListSection.tsx
│        └─ ArticlesCTASection.tsx
└─ features/
   └─ artikel/
      ├─ components/
      │  └─ ArticlesFilterClient.tsx
      ├─ data.ts
      ├─ types.ts
      └─ utils.ts
```

## 6. Route Migration

Current:

- `/articles`

Target:

- `/artikel`

Checklist:

- [ ] update internal links
- [ ] update nav labels/paths
- [ ] update CTA links dari home dan area lain

## 7. Section Responsibilities

### `ArticlesHeroSection`

- header halaman artikel
- search/filter shell visual bila perlu
- presentational only

### `ArticlesListSection`

- render kartu artikel
- render empty state visual
- menerima data artikel yang sudah siap

### `ArticlesCTASection`

- render CTA bawah
- presentational only

## 8. Client Interaction Strategy

Target komponen interaktif:

- `features/artikel/components/ArticlesFilterClient.tsx`

Tanggung jawabnya:

- menyimpan `activeCategory`
- menyimpan `query`
- melakukan filter terhadap data serializable
- mengontrol list yang tampil tanpa manipulasi DOM manual

Yang harus dihindari:

- `querySelectorAll`
- `getElementById`
- `classList.add/remove`

## 9. Data Flow Direction

1. `features/artikel/data.ts` menyediakan artikel
2. `app/artikel/page.tsx` membaca data
3. section hero dan CTA dirender server-first
4. `ArticlesFilterClient` menerima:
   - artikel
   - category list
5. hasil filter diturunkan ke list render

## 10. Migration Map

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/articles/_components/articles-page-sections.tsx` | dipecah ke `src/components/sections/artikel/` |
| `frontend/app/(public)/articles/_components/articles-page-client.tsx` | dipecah ke `ArticlesListSection` + `ArticlesFilterClient` |
| `frontend/app/(public)/articles/page.tsx` | `src/app/artikel/page.tsx` |

## 11. Work Breakdown

### Step 1 — Prepare Route & Sections

- [ ] Buat route `app/artikel/page.tsx`
- [ ] Siapkan `ArticlesHeroSection`
- [ ] Siapkan `ArticlesListSection`
- [ ] Siapkan `ArticlesCTASection`

### Step 2 — Wire Domain Data

- [ ] baca artikel dari `features/artikel/data.ts`
- [ ] render kartu dari source data tunggal

### Step 3 — Build Filter Client Island

- [ ] buat `ArticlesFilterClient.tsx`
- [ ] pindahkan state search/filter ke React state
- [ ] pertahankan empty state

### Step 4 — Update Links

- [ ] update semua tautan menuju `/artikel`

## 12. Risks & Watchouts

- perubahan route bisa memutus link internal
- empty state bisa salah jika filter logic salah
- label category bisa drift jika type dan data tidak sinkron

## 13. Validation Plan

Teknis:

- [ ] `npm run lint`
- [ ] `npm run build`

Behavior:

- [ ] search bekerja
- [ ] filter category bekerja
- [ ] empty state benar

Visual:

- [ ] hero identik
- [ ] card grid/list identik
- [ ] CTA bawah identik

## 14. Acceptance Criteria

- [ ] route `/artikel` aktif
- [ ] listing membaca source data domain tunggal
- [ ] search/filter tidak lagi imperative
- [ ] tidak ada perubahan visual yang tidak disetujui

## 15. Recommended Next Step

- `Phase C3` — Article Detail Dynamic Route

