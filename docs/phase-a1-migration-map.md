# Phase A1 — Migration Map

Dokumen ini menjadi peta refactor awal sebelum implementasi besar dilakukan. Fokusnya adalah:

- memetakan route lama ke route target
- memetakan file lama ke lokasi baru
- membedakan komponen shared, section-specific, dan feature-specific
- mengidentifikasi area yang masih client-heavy

Tujuan akhirnya: refactor berjalan terarah, minim trial-error, dan tetap aman terhadap perubahan visual.

## 1. Prinsip Struktur Target

Struktur target yang dipakai:

- `app/` untuk route
- `components/layouts/` untuk shared layout shell
- `components/sections/` untuk section spesifik halaman
- `components/ui/` untuk primitive reusable
- `features/` untuk domain logic + domain data
- `lib/` untuk site config, metadata, constants, dan utility umum
- `hooks/` untuk custom hooks reusable
- `types/` untuk shared types global
- `styles/` untuk style global tambahan seperti animasi

## 2. Route Mapping

### Current → Target

| Current Route | Target Route | Notes |
| --- | --- | --- |
| `/` | `/` | Tetap sebagai beranda |
| `/portfolio` | `/portfolio` | Tetap |
| `/portfolio/detail` | `/portfolio/[slug]` | Perlu slug berbasis data |
| `/articles` | `/artikel` | Ubah ke bahasa Indonesia |
| `/articles/detail` | `/artikel/[slug]` | Perlu slug berbasis data |
| `/about` | `/tentang` | Ubah ke bahasa Indonesia |
| `/contact` | `/kontak` | Ubah ke bahasa Indonesia |

### Implikasi Route Rename

- semua `Link` internal harus diperbarui
- breadcrumb perlu disesuaikan
- metadata title/canonical nanti perlu mengikuti route baru
- data `portfolio` dan `artikel` wajib memiliki `slug`

## 3. Current File Inventory

### Current Route Files

- `frontend/app/page.tsx`
- `frontend/app/(public)/about/page.tsx`
- `frontend/app/(public)/portfolio/page.tsx`
- `frontend/app/(public)/portfolio/detail/page.tsx`
- `frontend/app/(public)/articles/page.tsx`
- `frontend/app/(public)/articles/detail/page.tsx`
- `frontend/app/(public)/contact/page.tsx`
- `frontend/app/(public)/layout.tsx`
- `frontend/app/layout.tsx`

### Current Shared Layout Files

- `frontend/components/layout/site-header.tsx`
- `frontend/components/layout/site-footer.tsx`
- `frontend/components/layout/mobile-bottom-nav.tsx`
- `frontend/components/layout/public-shell.tsx`
- `frontend/lib/site-nav.ts`

### Current Home-Specific Files

- `frontend/app/(public)/_components/home-hero-nav.tsx`
- `frontend/app/(public)/_components/home-clients.tsx`
- `frontend/app/(public)/_components/home-tools.tsx`
- `frontend/app/(public)/_components/home-portfolio.tsx`
- `frontend/app/(public)/_components/home-workflow.tsx`
- `frontend/app/(public)/_components/home-blog.tsx`
- `frontend/app/(public)/_components/home-cta.tsx`

### Current About-Specific Files

- `frontend/app/(public)/about/_components/about-page-sections.tsx`

### Current Portfolio-Specific Files

- `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx`
- `frontend/app/(public)/portfolio/_components/portfolio-page-sections.tsx`
- `frontend/app/(public)/portfolio/detail/_components/portfolio-detail-page-sections.tsx`

### Current Articles-Specific Files

- `frontend/app/(public)/articles/_components/articles-page-client.tsx`
- `frontend/app/(public)/articles/_components/articles-page-sections.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-page-client.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-sections.tsx`

### Current Contact-Specific Files

- `frontend/app/(public)/contact/_components/contact-page-client.tsx`
- `frontend/app/(public)/contact/_components/contact-page-sections.tsx`

## 4. File Migration Map

### 4.1 Route Files

| Current File | Target File |
| --- | --- |
| `frontend/app/page.tsx` | `src/app/page.tsx` |
| `frontend/app/(public)/portfolio/page.tsx` | `src/app/portfolio/page.tsx` |
| `frontend/app/(public)/portfolio/detail/page.tsx` | `src/app/portfolio/[slug]/page.tsx` |
| `frontend/app/(public)/articles/page.tsx` | `src/app/artikel/page.tsx` |
| `frontend/app/(public)/articles/detail/page.tsx` | `src/app/artikel/[slug]/page.tsx` |
| `frontend/app/(public)/about/page.tsx` | `src/app/tentang/page.tsx` |
| `frontend/app/(public)/contact/page.tsx` | `src/app/kontak/page.tsx` |
| `frontend/app/layout.tsx` | `src/app/layout.tsx` |
| `frontend/app/globals.css` | `src/app/globals.css` |

### 4.2 Shared Layout Files

| Current File | Target File |
| --- | --- |
| `frontend/components/layout/site-header.tsx` | `src/components/layouts/Navbar.tsx` |
| `frontend/components/layout/site-footer.tsx` | `src/components/layouts/Footer.tsx` |
| `frontend/components/layout/mobile-bottom-nav.tsx` | `src/components/layouts/MobileBottomBar.tsx` |
| `frontend/components/layout/public-shell.tsx` | ditiadakan sebagai nama ini, logic dibagi ke `src/app/layout.tsx` atau helper layout kecil |
| _none_ | `src/components/layouts/Container.tsx` |

### 4.3 Home Sections

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/_components/home-hero-nav.tsx` | `src/components/sections/home/HeroSection.tsx` |
| `frontend/app/(public)/_components/home-clients.tsx` | `src/components/sections/home/ClientsSection.tsx` |
| `frontend/app/(public)/_components/home-tools.tsx` | `src/components/sections/home/ToolsSection.tsx` |
| `frontend/app/(public)/_components/home-portfolio.tsx` | `src/components/sections/home/FeaturedPortfolioSection.tsx` |
| `frontend/app/(public)/_components/home-workflow.tsx` | `src/components/sections/home/WorkMethodSection.tsx` |
| `frontend/app/(public)/_components/home-blog.tsx` | `src/components/sections/home/LatestArticlesSection.tsx` |
| `frontend/app/(public)/_components/home-cta.tsx` | `src/components/sections/home/CTASection.tsx` |

### 4.4 Portfolio Sections & Feature

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/portfolio/_components/portfolio-page-sections.tsx` | dipecah ke `src/components/sections/portfolio/` |
| `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx` | dipecah; interaktif kecil ke `src/features/portfolio/components/` |
| `frontend/app/(public)/portfolio/detail/_components/portfolio-detail-page-sections.tsx` | dipecah ke `src/components/sections/portfolio/` |

Target detail:

- `src/components/sections/portfolio/PortfolioHeroSection.tsx`
- `src/components/sections/portfolio/PortfolioGridSection.tsx`
- `src/components/sections/portfolio/PortfolioCTASection.tsx`
- `src/components/sections/portfolio/PortfolioDetailHeroSection.tsx`
- `src/components/sections/portfolio/PortfolioDetailContentSection.tsx`
- `src/components/sections/portfolio/PortfolioDetailPagerSection.tsx`
- `src/features/portfolio/components/PortfolioFilterClient.tsx`
- `src/features/portfolio/data.ts`
- `src/features/portfolio/types.ts`
- `src/features/portfolio/utils.ts`

### 4.5 Artikel Sections & Feature

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/articles/_components/articles-page-sections.tsx` | dipecah ke `src/components/sections/artikel/` |
| `frontend/app/(public)/articles/_components/articles-page-client.tsx` | dipecah; interaktif kecil ke `src/features/artikel/components/` |
| `frontend/app/(public)/articles/detail/_components/article-detail-sections.tsx` | dipecah ke `src/components/sections/artikel/` |
| `frontend/app/(public)/articles/detail/_components/article-detail-page-client.tsx` | dipecah; interaktif kecil ke `src/features/artikel/components/` |

Target detail:

- `src/components/sections/artikel/ArticlesHeroSection.tsx`
- `src/components/sections/artikel/ArticlesListSection.tsx`
- `src/components/sections/artikel/ArticlesCTASection.tsx`
- `src/components/sections/artikel/ArticleHeroSection.tsx`
- `src/components/sections/artikel/ArticleContentSection.tsx`
- `src/components/sections/artikel/ArticleBottomCTASection.tsx`
- `src/features/artikel/components/ArticlesFilterClient.tsx`
- `src/features/artikel/components/ReadingProgress.tsx`
- `src/features/artikel/components/CopyArticleLink.tsx`
- `src/features/artikel/data.ts`
- `src/features/artikel/types.ts`
- `src/features/artikel/utils.ts`

### 4.6 Tentang Sections

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/about/_components/about-page-sections.tsx` | dipecah ke `src/components/sections/tentang/` |

Target detail:

- `src/components/sections/tentang/AboutHeroSection.tsx`
- `src/components/sections/tentang/AboutPhilosophySection.tsx`
- `src/components/sections/tentang/AboutCareerSection.tsx`
- `src/components/sections/tentang/AboutExpertiseSection.tsx`
- `src/components/sections/tentang/AboutCTASection.tsx`

### 4.7 Kontak Sections

| Current File | Target File |
| --- | --- |
| `frontend/app/(public)/contact/_components/contact-page-sections.tsx` | dipecah ke `src/components/sections/kontak/` |
| `frontend/app/(public)/contact/_components/contact-page-client.tsx` | dipecah; interaktif kecil ke `src/components/sections/kontak/` atau feature kecil |

Target detail:

- `src/components/sections/kontak/ContactHeroSection.tsx`
- `src/components/sections/kontak/ContactFormSection.tsx`
- `src/components/sections/kontak/ContactSidebarSection.tsx`
- `src/components/sections/kontak/ContactFormClient.tsx`

## 5. Shared vs Section vs Feature Classification

### Shared Layout Components

Masuk `components/layouts/`:

- Navbar
- Footer
- Mobile bottom bar
- Container

Kriteria:

- dipakai lintas banyak halaman
- tidak mengandung domain business logic

### Section Components

Masuk `components/sections/`:

- section yang spesifik ke halaman tertentu
- primarily presentational
- boleh menerima props data, tapi tidak menjadi source of truth domain

### Feature Components

Masuk `features/*/components/`:

- komponen yang punya interaksi/domain behavior
- filter, search, dynamic slug helpers, domain cards, local utilities
- membaca `data.ts`, `types.ts`, `utils.ts` domain terkait

## 6. Data & Domain Ownership Map

### Portfolio

Data yang harus dipindah ke `features/portfolio/data.ts`:

- daftar project
- slug project
- kategori project
- tech stack project
- hero/summary/detail content project
- prev/next relationship bila dipakai

Type yang harus dibuat di `features/portfolio/types.ts`:

- `PortfolioItem`
- `PortfolioCategory`
- `PortfolioMetric`

Utility yang harus dibuat di `features/portfolio/utils.ts`:

- `getPortfolioBySlug`
- `getPortfolioCategories`
- `getRelatedPortfolio`
- `filterPortfolioByCategory`

### Artikel

Data yang harus dipindah ke `features/artikel/data.ts`:

- daftar artikel
- slug artikel
- kategori artikel
- tanggal baca/publish
- konten body artikel

Type yang harus dibuat di `features/artikel/types.ts`:

- `ArticleItem`
- `ArticleCategory`

Utility yang harus dibuat di `features/artikel/utils.ts`:

- `getArticleBySlug`
- `filterArticles`
- `searchArticles`

## 7. Client Component Audit

### Current Client Components

- `frontend/components/layout/public-shell.tsx`
- `frontend/app/(public)/portfolio/_components/portfolio-page-client.tsx`
- `frontend/app/(public)/articles/_components/articles-page-client.tsx`
- `frontend/app/(public)/articles/detail/_components/article-detail-page-client.tsx`
- `frontend/app/(public)/contact/_components/contact-page-client.tsx`

### Desired End State

#### Tetap client, tapi diperkecil

- navbar active state jika memang masih butuh hook client
- portfolio filter
- article search/filter
- article reading progress
- article copy link
- contact form submit feedback

#### Harus diturunkan ke server

- hampir semua markup static page
- article body
- portfolio detail content
- hero/cta/list sections

## 8. Lib Migration Map

| Current File | Target File |
| --- | --- |
| `frontend/lib/site-nav.ts` | `src/lib/site.ts` |
| _none_ | `src/lib/metadata.ts` |
| _none_ | `src/lib/constants.ts` |
| _none_ | `src/lib/utils.ts` |

Isi yang cocok di `lib/site.ts`:

- nama site
- default metadata dasar
- nav items
- route labels
- helper active nav jika masih diperlukan

## 9. UI Primitive Candidates

Belum perlu langsung diekstrak semua, tapi kandidat awal:

- Button
- Card
- Badge
- SectionTitle

Kandidat pola yang terlihat berulang:

- tombol dark primary
- tombol light bordered
- card dengan `rounded-card border border-brand-border shadow-soft`
- label kecil uppercase berwarna
- blok heading section dengan subtitle kecil

## 10. Asset Mapping

### Current State

Asset masih dominan di:

- `frontend/public/assets/clients/`
- `frontend/public/assets/tech/`
- `frontend/public/assets/...`

### Target Thinking

- aset yang harus diakses langsung browser tetap bisa tinggal di `public/`
- grouping logical di roadmap target:
  - `assets/images/`
  - `assets/icons/`
  - `assets/logos/`

Catatan:

- untuk Next.js, secara runtime aset publik paling aman tetap diserve dari `public/`
- jadi target folder `assets/` bisa dipahami sebagai source organization, tapi implementasi akhir harus mempertimbangkan perilaku `public/`

## 11. Risks & Watchouts

### Route Rename Risk

- route rename akan memengaruhi seluruh internal links
- risiko broken navigation tinggi jika dilakukan terlalu awal

### Dynamic Route Risk

- `portfolio/[slug]` dan `artikel/[slug]` butuh data slug yang konsisten
- perlu strategi fallback `notFound()`

### Hydration Risk

- jangan gunakan branch render berbasis pathname di client shell seperti sebelumnya
- client island harus kecil dan deterministik

### Image Fill Risk

- semua `Image fill` wajib parent `relative`
- audit perlu dijalankan lagi setiap kali wrapper card dipindah

## 12. Phase A1 Checklist

- [x] Petakan route lama ke route target
- [x] Petakan file route saat ini
- [x] Petakan shared layout files
- [x] Petakan section-specific files
- [x] Petakan feature/domain candidates
- [x] Petakan client-heavy components
- [x] Identifikasi risk utama refactor

## 13. Recommended Next Step

Setelah dokumen A1 ini, langkah berikutnya adalah:

1. buat `Phase A2`
2. realisasikan struktur folder target dasar
3. putuskan alias import final menuju `src/*`
4. mulai refactor shared layout terlebih dahulu sebelum route rename

