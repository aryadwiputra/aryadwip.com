# Portfolio Template

Gunakan file ini sebagai template sumber konten untuk 1 portfolio/project.

## Cara pakai
- 1 file Markdown = 1 project
- Isi bagian `Frontmatter` untuk metadata utama
- Isi bagian `Content` untuk deskripsi panjang project
- Bagian `Gallery` dipakai untuk daftar screenshot/preview
- Bagian `Sidebar Points` dipakai untuk poin konteks implementasi yang ingin ditampilkan di sidebar

---

## Frontmatter

```yaml
title: ""
slug: ""
summary: ""
client_name: ""
client_website: ""
client_description: ""
case_study_label: "Proyek Klien"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel
  - MySQL
  - Tailwind CSS
categories:
  - laravel
  - dashboard
teaser_label: ""
featured_image: "/assets/portfolio/your-project/cover.png"
featured_image_alt: ""
demo_url: ""
repo_url: ""
start_date: "2025-01-01"
end_date: "2025-03-30"
is_featured: true
sort_order: 1
status: published
sidebar_title: "Konteks Implementasi"
sidebar_description: "Project ini dibangun untuk menjawab kebutuhan bisnis yang spesifik, lalu dirancang supaya tetap nyaman dikembangkan ke depannya."
```

### Catatan field
- `title` — judul project
- `slug` — URL portfolio, contoh: `sistem-manajemen-aset`
- `summary` — ringkasan pendek untuk card/listing
- `client_name` — nama klien, boleh kosong kalau project mandiri
- `client_website` — website klien, opsional
- `client_description` — deskripsi singkat konteks klien / bisnis
- `case_study_label` — contoh: `Proyek Klien` atau `Proyek Mandiri`
- `role` — peran kamu di project
- `tech_stack` — daftar stack utama
- `categories` — gunakan kombinasi dari:
  - `laravel`
  - `fullstack`
  - `dashboard`
  - `integration`
- `teaser_label` — label kecil di card, contoh: `Sistem Operasional`
- `featured_image` — gambar cover utama
- `featured_image_alt` — alt text cover utama
- `demo_url` — link demo/live, opsional
- `repo_url` — link repository, opsional
- `start_date` / `end_date` — format `YYYY-MM-DD`
- `is_featured` — `true` atau `false`
- `sort_order` — urutan tampil
- `status` — untuk sekarang gunakan `published`
- `sidebar_title` / `sidebar_description` — isi panel kanan detail project

---

## Content

> Bagian ini akan menjadi isi utama `detail.content`.
> Boleh pakai heading Markdown, bullet list, dan paragraf biasa.

## Latar Belakang

Jelaskan project ini dibuat untuk kebutuhan apa, siapa penggunanya, dan problem utama apa yang ingin diselesaikan.

## Tantangan Utama

Jelaskan bottleneck, kendala teknis, keterbatasan sistem lama, atau kompleksitas bisnis yang perlu dihadapi.

## Solusi yang Diterapkan

Jelaskan pendekatan implementasi yang dipilih.

- bagaimana arsitektur disusun
- modul apa yang paling penting
- bagaimana data mengalir
- bagaimana validasi / otorisasi / integrasi dijalankan

## Implementasi Teknis

Tuliskan detail teknis yang cukup penting untuk dipublikasikan.

### Backend

Jelaskan struktur backend, service, queue, API, auth, atau database.

### Frontend

Jelaskan dashboard, halaman user, UX flow, atau state management jika relevan.

### Integrasi

Jelaskan integrasi pihak ketiga, webhook, payment, email, storage, atau layanan lain.

## Hasil dan Dampak

Jelaskan hasil nyata setelah project selesai.

- proses bisnis jadi lebih rapi
- waktu input atau approval lebih singkat
- data lebih akurat
- maintenance lebih mudah

## Catatan Tambahan

Tambahkan hal penting lain bila perlu, misalnya deployment, keamanan, audit trail, testing, atau roadmap pengembangan.

---

## Gallery

Gunakan list YAML ini untuk screenshot tambahan.

```yaml
gallery:
  - src: "/assets/portfolio/your-project/gallery-01.png"
    alt: "Dashboard overview"
    label: "Dashboard utama"
  - src: "/assets/portfolio/your-project/gallery-02.png"
    alt: "Approval workflow"
    label: "Alur approval"
  - src: "/assets/portfolio/your-project/gallery-03.png"
    alt: "Reporting module"
    label: "Laporan dan analitik"
```

---

## Sidebar Points

Gunakan list YAML ini untuk poin sidebar detail project.

```yaml
sidebar_points:
  - title: "Klien:"
    description: "Nama klien atau unit bisnis"
  - title: "Periode:"
    description: "Januari 2025 — Maret 2025"
  - title: "Stack teknis:"
    description: "Laravel, MySQL, Tailwind CSS"
  - title: "Demo:"
    description: "https://example.com"
```

---

## Contoh singkat

```yaml
title: "Sistem Manajemen Gudang"
slug: "sistem-manajemen-gudang"
summary: "Platform internal untuk mengelola stok, approval, dan pelaporan gudang multi-lokasi."
client_name: "PT Contoh Distribusi"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel
  - MySQL
  - Tailwind CSS
categories:
  - laravel
  - dashboard
  - integration
featured_image: "/assets/portfolio/sistem-manajemen-gudang/cover.png"
featured_image_alt: "Tampilan dashboard sistem manajemen gudang"
start_date: "2025-01-01"
end_date: "2025-04-15"
is_featured: true
sort_order: 2
status: published
```

## Latar Belakang

Sistem ini dibuat untuk membantu tim operasional memantau pergerakan stok dan mempercepat alur approval antar divisi.
