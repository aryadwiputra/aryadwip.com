# Phase C1 — Article Domain Foundation

Dokumen ini membahas pembentukan fondasi domain `artikel` agar data, type, utilitas, dan komponen interaktif terkait artikel tidak lagi tersebar di section/page secara acak.

Phase C1 adalah langkah awal sebelum:

- refactor halaman listing artikel
- migrasi detail artikel ke route dynamic `[slug]`
- pemisahan client island seperti progress bar, copy link, filter, dan search

## 1. Objective

Tujuan utama Phase C1:

- memisahkan domain `artikel` dari presentational layer
- menjadikan data artikel sebagai source of truth tunggal
- membentuk type dan utility yang konsisten
- menyiapkan domain agar siap dipakai oleh:
  - home latest articles teaser
  - halaman `/artikel`
  - halaman `/artikel/[slug]`

## 2. Scope

### Included

- pembentukan `features/artikel/`
- ekstraksi data statis artikel
- pembuatan type domain artikel
- pembuatan util dasar artikel
- identifikasi komponen interaktif domain artikel

### Excluded

- implementasi penuh halaman listing artikel
- implementasi route detail `[slug]`
- perubahan visual kartu artikel
- perubahan copywriting artikel
- refactor client/server boundary artikel secara penuh

## 3. Dependency

Harus mengacu pada:

- `docs/phase-a1-migration-map.md`
- `docs/phase-a2-foundation-plan.md`
- `docs/phase-a3-shared-layout-migration.md`

## 4. Current State

Saat ini area artikel masih tersebar di:

### Home Teaser

- `frontend/app/(public)/_components/home-blog.tsx`

### Articles Listing

- `frontend/app/(public)/articles/_components/articles-page-client.tsx`
- `frontend/app/(public)/articles/_components/articles-page-sections.tsx`

### Article Detail

- `frontend/app/(public)/articles/detail/_components/article-detail-page-client.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-sections.tsx`

Masalah current state:

- data artikel masih tercampur dengan markup
- belum ada slug formal per artikel
- detail artikel masih hardcoded
- filter/search belum bertumpu pada domain data tunggal
- belum ada helper terpusat untuk pencarian, filter, atau pengambilan artikel by slug

## 5. Target State

Struktur target fondasi domain:

```txt
src/
└─ features/
   └─ artikel/
      ├─ components/
      ├─ data.ts
      ├─ types.ts
      └─ utils.ts
```

## 6. Ownership Rules

### `features/artikel/data.ts`

Harus menjadi source of truth untuk:

- daftar artikel
- slug
- title
- excerpt
- publish date
- reading time
- category
- teaser data
- detail content data

### `features/artikel/types.ts`

Harus berisi kontrak type konsisten untuk:

- article list item
- article detail body/content
- article category

### `features/artikel/utils.ts`

Harus berisi helper domain artikel, bukan helper UI umum.

### `features/artikel/components/`

Hanya untuk komponen interaktif atau komponen domain-driven, seperti:

- filter client
- reading progress
- copy link

## 7. Data Model Direction

### Minimum Required Fields

Setiap item artikel minimal perlu memiliki:

- `slug`
- `title`
- `excerpt`
- `category`
- `publishedAt`
- `readingTime`
- `coverImage`
- `coverAlt`

### Additional Detail Fields

Untuk detail page, item perlu mendukung:

- `heroLabel`
- `heroTitle`
- `heroSummary`
- `author`
- `contentSections`
- `quote`
- `toc` bila nanti dibutuhkan

### Optional Enhancements

- `featured`
- `tags`
- `seoTitle`
- `seoDescription`

## 8. Proposed Type Candidates

```ts
type ArticleCategory =
  | "laravel"
  | "architecture"
  | "database"
  | "security"
  | "scaling";
```

```ts
type ArticleContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "quote"; content: string }
  | { type: "list"; items: string[] }
  | { type: "code"; content: string; language?: string };
```

```ts
type ArticleItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingTime: string;
  coverImage?: string;
  coverAlt?: string;
  heroLabel?: string;
  heroTitle?: string;
  heroSummary?: string;
  author?: string;
  contentBlocks?: ArticleContentBlock[];
};
```

## 9. Utility Plan

Utility minimum yang disarankan:

- `getArticleList()`
- `getArticleBySlug(slug)`
- `getArticleCategories()`
- `filterArticlesByCategory(category)`
- `searchArticles(query)`
- `getRelatedArticles(currentSlug)`

## 10. Migration Map

### Data Sources yang Harus Diekstrak

Saat ini tersebar di:

- `frontend/app/(public)/_components/home-blog.tsx`
- `frontend/app/(public)/articles/_components/articles-page-client.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-page-client.tsx`

Target:

- seluruh data artikel pindah ke `src/features/artikel/data.ts`

### Type Ownership

Target:

- type artikel berada di `src/features/artikel/types.ts`

## 11. Risks & Watchouts

### Duplicate Data Risk

Jika teaser home, list artikel, dan detail artikel punya data terpisah:

- rawan mismatch title
- rawan mismatch category
- rawan route slug tidak sinkron

### Search/Filter Drift Risk

Kalau search/filter tidak bertumpu pada domain data:

- hasil pencarian bisa tidak konsisten
- empty state bisa salah

### Detail Hardcoding Risk

Kalau detail artikel masih hardcoded:

- migrasi ke `[slug]` jadi mahal
- nambah artikel baru jadi tidak scalable

## 12. Work Breakdown

### Step 1 — Create Domain Folder

- [ ] Buat `features/artikel/`
- [ ] Buat `features/artikel/components/`
- [ ] Buat `features/artikel/data.ts`
- [ ] Buat `features/artikel/types.ts`
- [ ] Buat `features/artikel/utils.ts`

### Step 2 — Define Types

- [ ] Bentuk `ArticleCategory`
- [ ] Bentuk `ArticleContentBlock`
- [ ] Bentuk `ArticleItem`

### Step 3 — Extract Data

- [ ] Kumpulkan artikel yang ada sekarang
- [ ] Tambahkan slug unik
- [ ] Satukan kategori, tanggal, reading time, excerpt
- [ ] Satukan data detail artikel

### Step 4 — Implement Utilities

- [ ] `getArticleList`
- [ ] `getArticleBySlug`
- [ ] `getArticleCategories`
- [ ] `filterArticlesByCategory`
- [ ] `searchArticles`

## 13. Validation Plan

Validasi logis:

- [ ] semua artikel punya slug unik
- [ ] semua category valid menurut type
- [ ] home/list/detail bisa membaca dari source data yang sama

Validasi teknis:

- [ ] import baru resolve dengan benar
- [ ] lint hijau
- [ ] build hijau

## 14. Deliverables

Phase C1 dianggap selesai bila:

- domain `artikel` punya folder sendiri
- data artikel tidak lagi tercecer
- type dan util dasar tersedia
- listing/detail/home teaser siap memakai source data yang sama

## 15. Acceptance Criteria

- [ ] satu artikel cukup didefinisikan di satu tempat
- [ ] listing, detail, dan teaser home bisa membaca data yang sama
- [ ] domain `artikel` siap dipakai dynamic route di fase berikutnya
- [ ] tidak ada perubahan visual yang tidak disetujui

## 16. Recommended Next Step

Setelah C1 selesai, fase paling logis berikutnya adalah:

- `Phase C2` — Article Listing Refactor

