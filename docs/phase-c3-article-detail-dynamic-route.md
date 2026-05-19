# Phase C3 — Article Detail Dynamic Route

Dokumen ini membahas migrasi halaman detail artikel dari route statis lama ke route dynamic `/artikel/[slug]`.

Phase ini membangun fondasi article detail yang:

- scalable
- server-first
- tetap punya client island kecil untuk interaksi tambahan

## 1. Objective

Tujuan utama Phase C3:

- mengubah detail artikel ke route dynamic berbasis slug
- menarik seluruh konten artikel dari source domain `features/artikel/data.ts`
- memisahkan interaksi kecil seperti reading progress dan copy link dari body artikel

## 2. Scope

### Included

- route `/artikel/[slug]`
- hero/detail article sections
- reading progress client island
- copy link client island
- data by slug

### Excluded

- markdown/CMS integration
- related articles kompleks
- SEO lanjut seperti OG dinamis

## 3. Dependency

- `docs/phase-c1-article-domain-foundation.md`
- `docs/phase-c2-article-listing-refactor.md`

## 4. Current State

Current:

- `frontend/app/(public)/articles/detail/page.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-page-client.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-sections.tsx`

Masalah:

- route masih statis
- detail artikel hardcoded
- progress bar dan copy link membuat area terlalu client-heavy

## 5. Target State

```txt
src/
├─ app/
│  └─ artikel/
│     └─ [slug]/
│        └─ page.tsx
├─ components/
│  └─ sections/
│     └─ artikel/
│        ├─ ArticleHeroSection.tsx
│        ├─ ArticleContentSection.tsx
│        └─ ArticleBottomCTASection.tsx
└─ features/
   └─ artikel/
      └─ components/
         ├─ ReadingProgress.tsx
         └─ CopyArticleLink.tsx
```

## 6. Route Migration

Current:

- `/articles/detail`

Target:

- `/artikel/[slug]`

## 7. Server/Client Split

### Server-side

- page lookup by slug
- article hero content
- article body
- sidebar static blocks
- bottom CTA

### Client-side

- reading progress bar
- copy article link

## 8. Work Breakdown

### Step 1 — Create Dynamic Route

- [ ] Buat `app/artikel/[slug]/page.tsx`
- [ ] baca artikel via `getArticleBySlug`
- [ ] gunakan `notFound()` untuk slug invalid

### Step 2 — Split Sections

- [ ] `ArticleHeroSection`
- [ ] `ArticleContentSection`
- [ ] `ArticleBottomCTASection`

### Step 3 — Extract Client Islands

- [ ] `ReadingProgress.tsx`
- [ ] `CopyArticleLink.tsx`

### Step 4 — Update Links

- [ ] semua link artikel mengarah ke slug

## 9. Risks & Watchouts

- slug invalid handling
- hydration issue bila client island terlalu besar
- route lama harus dipensiunkan hati-hati

## 10. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] buka beberapa slug
- [ ] pastikan progress bar berjalan
- [ ] pastikan copy link berjalan

## 11. Acceptance Criteria

- [ ] detail artikel memakai route dynamic
- [ ] data detail berasal dari domain artikel
- [ ] client logic hanya kecil dan spesifik
- [ ] tidak ada perubahan visual yang tidak disetujui

## 12. Recommended Next Step

- `Phase C4` — Tentang Page Refactor

