# Phase B2 — Portfolio Domain Foundation

Dokumen ini fokus pada pembentukan fondasi domain `portfolio` agar data, type, utilitas, dan komponen interaktif terkait portfolio tidak lagi tersebar di section/page secara acak.

Phase B2 adalah langkah setelah:

- shared layout stabil
- home sections rapi

Tujuannya adalah membuat `portfolio` punya source of truth yang jelas sebelum masuk ke:

- listing page final
- dynamic route `[slug]`
- filter interaktif yang lebih bersih

## 1. Objective

Tujuan utama Phase B2:

- memisahkan domain `portfolio` dari presentational layer
- menjadikan data project sebagai source of truth tunggal
- menyiapkan type, util, dan komponen domain agar siap dipakai lintas:
  - home featured portfolio
  - halaman `/portfolio`
  - halaman detail project

## 2. Scope

### Included

- pembentukan `features/portfolio/`
- ekstraksi data statis portfolio
- pembuatan type domain portfolio
- pembuatan util domain dasar
- identifikasi komponen interaktif yang masuk domain portfolio

### Excluded

- implementasi final `/portfolio/[slug]`
- refactor penuh section listing page
- route rename besar
- perubahan visual kartu portfolio
- perubahan copywriting portfolio

## 3. Dependency

Harus mengacu pada:

- `docs/phase-a1-migration-map.md`
- `docs/phase-a2-foundation-plan.md`
- `docs/phase-a3-shared-layout-migration.md`
- `docs/phase-b1-home-sections-refactor.md`

## 4. Current State

Saat ini area portfolio masih tersebar di beberapa tempat:

### Home Teaser

- `frontend/app/(public)/_components/home-portfolio.tsx`

### Portfolio Listing

- `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx`
- `frontend/app/(public)/portfolio/_components/portfolio-page-sections.tsx`

### Portfolio Detail

- `frontend/app/(public)/portfolio/detail/_components/portfolio-detail-page-sections.tsx`
- `frontend/app/(public)/portfolio/detail/page.tsx`

Masalah dari current state:

- data project masih bercampur dengan markup
- belum ada slug formal per project
- belum ada type domain portfolio yang menjadi kontrak tunggal
- filter category masih bergantung pada markup/data attribute
- belum ada util terpusat untuk:
  - get by slug
  - get categories
  - filtering
  - prev/next project

## 5. Target State

Struktur target untuk fondasi domain:

```txt
src/
└─ features/
   └─ portfolio/
      ├─ components/
      ├─ data.ts
      ├─ types.ts
      └─ utils.ts
```

## 6. Ownership Rules

### `features/portfolio/data.ts`

Harus menjadi source of truth untuk:

- daftar project
- slug
- title
- summary
- category
- stack tags
- tahun
- teaser data
- detail data
- metrics/detail-specific content

### `features/portfolio/types.ts`

Harus berisi kontrak type yang konsisten untuk:

- project list
- project detail
- category/filter
- navigation relations

### `features/portfolio/utils.ts`

Harus berisi helper domain, bukan helper UI umum.

### `features/portfolio/components/`

Hanya untuk komponen interaktif atau domain-driven yang spesifik ke portfolio, misalnya:

- filter controller
- reusable portfolio domain card jika benar-benar lintas route portfolio

## 7. Data Model Direction

### Minimum Required Fields

Setiap item portfolio minimal perlu memiliki:

- `slug`
- `title`
- `summary`
- `year`
- `categories`
- `stack`
- `coverImage`
- `coverAlt`
- `teaserLabel`
- `detailLabel`

### Additional Detail Fields

Untuk kebutuhan detail page, item juga perlu mendukung:

- `heroTitle`
- `heroDescription`
- `role`
- `duration`
- `primaryStack`
- `domainScope`
- `problemStatement`
- `solutionApproach`
- `executionSteps`
- `impactMetrics`
- `schemaAssets`

### Relationship Fields

Agar page detail bisa punya prev/next:

- index-based ordering atau explicit relation

## 8. Proposed Type Candidates

Type candidate awal:

```ts
type PortfolioCategory =
  | "laravel"
  | "fullstack"
  | "dashboard"
  | "integration";
```

```ts
type PortfolioMetric = {
  value: string;
  label: string;
  description: string;
};
```

```ts
type PortfolioExecutionStep = {
  eyebrow: string;
  title: string;
  description: string;
  accent: "purple" | "blue" | "green" | "orange" | "pink";
};
```

```ts
type PortfolioItem = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  categories: PortfolioCategory[];
  stack: string[];
  teaserLabel: string;
  coverImage: string;
  coverAlt: string;
  heroTitle?: string;
  heroDescription?: string;
  role?: string;
  duration?: string;
  primaryStack?: string;
  domainScope?: string;
  problemStatement?: string;
  solutionApproach?: string[];
  executionSteps?: PortfolioExecutionStep[];
  impactMetrics?: PortfolioMetric[];
};
```

Catatan:

- type final boleh berkembang
- tapi Phase B2 harus mengunci baseline contract

## 9. Utility Plan

File:

- `features/portfolio/utils.ts`

Utility minimum yang disarankan:

- `getPortfolioCategories()`
- `getPortfolioBySlug(slug)`
- `getPortfolioList()`
- `filterPortfolioByCategory(category)`
- `getRelatedPortfolio(currentSlug)`
- `getPrevNextPortfolio(currentSlug)`

Tujuan:

- jangan lagi membuat logika domain langsung di page/client file

## 10. Component Plan

Folder:

- `features/portfolio/components/`

Kandidat komponen yang masuk domain:

- `PortfolioFilterClient.tsx`
- `PortfolioCard.tsx` jika nantinya benar-benar dipakai lintas home + portfolio listing
- `PortfolioTagList.tsx` bila dipakai berulang secara domain-specific

Catatan:

- jangan buru-buru memasukkan semua ke `features/components`
- hanya masukkan yang memang domain-specific dan reuseable

## 11. Migration Map

### Data Sources yang Harus Diekstrak

Saat ini tersebar di:

- `frontend/app/(public)/_components/home-portfolio.tsx`
- `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx`
- `frontend/app/(public)/portfolio/detail/_components/portfolio-detail-page-sections.tsx`

Target:

- semua data project pindah ke `src/features/portfolio/data.ts`

### Type Ownership

Target:

- semua type terkait project berada di `src/features/portfolio/types.ts`

### Filter Ownership

Current:

- filter logic masih di `portfolio-page-client.tsx`
- filter bergantung pada:
  - `data-filter`
  - `data-category`
  - `querySelectorAll`
  - `classList`

Target:

- logic filter dipusatkan ke domain layer/client island yang lebih kecil

## 12. Current Risks

### Duplicate Data Risk

Jika home portfolio dan portfolio listing masing-masing menyimpan data sendiri:

- rawan mismatch konten
- rawan slug/detail tidak sinkron

### Filter Drift Risk

Kalau category tidak dibakukan di type/domain:

- label filter bisa beda dengan data category
- satu perubahan kecil bisa merusak filter

### Detail Page Fragility

Kalau detail page masih hardcoded:

- sulit diubah ke `[slug]`
- sulit menambah project baru

## 13. Work Breakdown

### Step 1 — Create Domain Folder

Checklist:

- [ ] buat `features/portfolio/`
- [ ] buat `features/portfolio/components/`
- [ ] buat `features/portfolio/data.ts`
- [ ] buat `features/portfolio/types.ts`
- [ ] buat `features/portfolio/utils.ts`

### Step 2 — Define Types

Checklist:

- [ ] buat `PortfolioCategory`
- [ ] buat `PortfolioMetric`
- [ ] buat `PortfolioExecutionStep`
- [ ] buat `PortfolioItem`

### Step 3 — Extract Data

Checklist:

- [ ] kumpulkan semua project yang sekarang ada
- [ ] tambahkan slug untuk masing-masing
- [ ] satukan label/category/stack/year/summary
- [ ] satukan data detail yang sekarang hardcoded

### Step 4 — Implement Utilities

Checklist:

- [ ] `getPortfolioList`
- [ ] `getPortfolioBySlug`
- [ ] `getPortfolioCategories`
- [ ] `filterPortfolioByCategory`
- [ ] `getPrevNextPortfolio`

### Step 5 — Prepare Domain Components

Checklist:

- [ ] tentukan komponen domain mana yang perlu hidup di `features/portfolio/components/`
- [ ] jangan pindahkan yang masih murni section presentational

## 14. Validation Plan

Validasi logis:

- [ ] semua project punya slug unik
- [ ] semua category valid menurut type
- [ ] semua detail page data bisa diturunkan dari source of truth tunggal

Validasi teknis:

- [ ] import baru resolve dengan benar
- [ ] lint hijau
- [ ] build hijau

## 15. Deliverables

Phase B2 dianggap selesai bila:

- domain `portfolio` punya folder sendiri
- data portfolio tidak lagi tercecer
- type dan util dasar sudah tersedia
- listing/detail/home teaser siap memakai source data yang sama

## 16. Checklist

- [ ] Buat `features/portfolio/`
- [ ] Buat `data.ts`
- [ ] Buat `types.ts`
- [ ] Buat `utils.ts`
- [ ] Bentuk source of truth project data
- [ ] Tambahkan slug unik
- [ ] Definisikan category type
- [ ] Siapkan helper prev/next
- [ ] Lint hijau
- [ ] Build hijau

## 17. Acceptance Criteria

Phase B2 lulus bila:

- [ ] satu project cukup didefinisikan di satu tempat
- [ ] home featured portfolio, listing, dan detail bisa membaca data yang sama
- [ ] domain `portfolio` siap untuk dipakai dynamic route di fase berikutnya
- [ ] tidak ada perubahan visual yang tidak disetujui

## 18. Recommended Next Step

Setelah B2 selesai, fase paling logis berikutnya adalah:

- `Phase B3` — Portfolio Listing Refactor

Karena setelah domain `portfolio` punya source of truth, listing page bisa dibersihkan dari markup + logic campur aduk dan mulai bergerak ke server-first structure.

