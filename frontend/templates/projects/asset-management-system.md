---
title: "Asetku — Asset Management Platform"
slug: "asetku-asset-management-platform"
summary: "Platform manajemen aset multi-organisasi untuk registrasi, audit trail lifecycle, QR publik, maintenance, pelaporan, dan kontrol akses berbasis peran."
client_name: ""
client_website: ""
client_description: "Produk SaaS/internal platform untuk operasional manajemen aset lintas organisasi dalam satu aplikasi dengan isolasi data berbasis organisasi."
case_study_label: "Proyek Mandiri"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel 13
  - PHP 8.3
  - MySQL
  - Inertia.js v3
  - React 19
  - TypeScript
  - Tailwind CSS v4
  - Sanctum
  - Fortify
  - Horizon
  - Redis
categories:
  - laravel
  - fullstack
  - dashboard
  - integration
teaser_label: "Asset Operations Platform"
featured_image: "/assets/portfolio/asetku/cover.png"
featured_image_alt: "Dashboard Asetku untuk manajemen aset multi-organisasi"
demo_url: ""
repo_url: ""
start_date: "2026-04-13"
end_date: "2026-05-20"
is_featured: true
sort_order: 1
status: published
sidebar_title: "Konteks Implementasi"
sidebar_description: "Asetku dibangun untuk menangani operasional aset yang kompleks: multi-organisasi, lifecycle yang bisa diaudit, serta pengalaman admin yang tetap cepat dan rapi di satu codebase."
gallery:
  - src: "/assets/portfolio/asetku/gallery-dashboard.png"
    alt: "Ringkasan dashboard aset dan aktivitas organisasi"
    label: "Dashboard operasional dan KPI aset"
  - src: "/assets/portfolio/asetku/gallery-assets.png"
    alt: "Daftar aset dengan filter, status, dan aksi cepat"
    label: "Manajemen aset dan pencarian data"
  - src: "/assets/portfolio/asetku/gallery-lifecycle.png"
    alt: "Riwayat lifecycle aset dan audit trail immutable"
    label: "Lifecycle aset dan histori audit"
  - src: "/assets/portfolio/asetku/gallery-qr.png"
    alt: "Halaman publik detail aset dari QR code"
    label: "QR publik untuk akses cepat detail aset"
sidebar_points:
  - title: "Tipe produk:"
    description: "Platform operasional / asset management system"
  - title: "Periode:"
    description: "April 2026 — Mei 2026"
  - title: "Arsitektur:"
    description: "Laravel monolith + Inertia React SPA + API v1"
  - title: "Fokus utama:"
    description: "Multi-organization, audit trail immutable, QR publik, RBAC, dan reporting"
  - title: "Stack teknis:"
    description: "Laravel, React, TypeScript, Tailwind CSS, MySQL, Redis, Horizon"
---

# Asetku — Asset Management Platform

## Latar Belakang

Asetku adalah platform manajemen aset yang dirancang untuk kebutuhan operasional internal dengan struktur multi-organisasi dalam satu database. Sistem ini menangani proses yang biasanya tersebar di spreadsheet, chat, dan approval manual menjadi satu workflow terpusat yang lebih rapi, terlacak, dan mudah diaudit.

Target pengguna utamanya mencakup admin organisasi, tim operasional aset, auditor internal, PIC cabang, serta manajemen yang membutuhkan visibilitas terhadap kondisi, lokasi, dan histori aset. Karena satu user dapat bekerja di lebih dari satu organisasi, aplikasi juga perlu menyediakan pengalaman workspace yang fleksibel tanpa memecah codebase atau database per tenant.

## Tantangan Utama

Project ini memiliki kompleksitas yang cukup tinggi di sisi domain maupun implementasi.

- Data harus terisolasi per organisasi, tetapi tetap berada dalam satu database untuk efisiensi operasional dan maintenance.
- Riwayat lifecycle aset harus bersifat immutable agar perpindahan, peminjaman, pengembalian, maintenance, audit, hingga disposal tetap bisa ditelusuri secara akurat.
- Hak akses tidak cukup hanya level user biasa, karena ada kombinasi role, permission, organisasi aktif, impersonation, delegation, dan pembatasan akses tertentu.
- Aplikasi perlu melayani kebutuhan operasional harian sekaligus kebutuhan pelaporan, export, label QR/barcode, dan halaman publik read-only dari token QR.
- Experience admin harus tetap cepat walaupun modulnya banyak: organizations, branches, master data, assets, maintenance, audit, reports, settings, API, dan notifications.

## Solusi yang Diterapkan

Pendekatan yang dipilih adalah membangun Laravel monolith modern dengan Inertia.js v3 + React agar alur pengembangan backend dan frontend tetap terintegrasi rapi. Backend menangani domain logic, authorization, workflow, dan API, sedangkan frontend dibangun sebagai SPA dashboard yang responsif dan type-safe.

Beberapa keputusan implementasi utama:

- Multi-organization menggunakan `organization_id` dan global scope agar query domain otomatis mengikuti organisasi aktif.
- Workspace switcher memungkinkan satu akun berpindah organisasi tanpa perlu logout atau memisahkan akun.
- Lifecycle aset disimpan melalui `asset_histories` sebagai audit trail immutable untuk menjaga integritas histori operasional.
- Modul public QR dibuat terpisah dari dashboard login sehingga aset bisa dicek cepat di lapangan melalui secret token.
- Route frontend/backend dibuat konsisten dengan Wayfinder agar pemanggilan endpoint dari React tetap typed dan lebih aman saat refactor.

## Implementasi Teknis

### Backend

Backend dibangun di atas Laravel 13 dengan fokus pada domain operasional aset yang cukup luas.

- Modul inti mencakup organizations, branches, departments, categories, locations, asset registration, movement, maintenance, audits, depreciation, disposal, notifications, dan reporting.
- Authentication menggunakan Laravel Fortify, termasuk email verification dan 2FA TOTP. Sistem juga mendukung Socialite untuk SSO Google dan Microsoft 365.
- Authorization memakai kombinasi role/permission dan konteks organisasi aktif, sehingga akses menu maupun aksi sensitif bisa dibatasi dengan lebih presisi.
- API disediakan dalam versi `/api/v1/*` menggunakan Sanctum personal access token untuk kebutuhan integrasi eksternal dan akses terautentikasi.
- Queue dan background processing dipantau melalui Horizon, sementara observability development dibantu Telescope.
- Upload media mendukung chunked upload dan pengelolaan dokumen/foto aset melalui media layer yang terstruktur.

### Frontend

Frontend menggunakan Inertia.js v3, React 19, dan TypeScript untuk membangun dashboard SPA yang tetap dekat dengan pola routing Laravel.

- Halaman utama menyediakan dashboard KPI, recent activity, quick actions, dan ringkasan status aset per organisasi.
- Modul data-heavy seperti asset listing, user management, settings, dan reports memanfaatkan pola filter, tabel, dan aksi kontekstual yang konsisten.
- UI dibangun dengan Tailwind CSS v4 dan Radix UI primitives untuk menjaga konsistensi komponen sekaligus fleksibel untuk kebutuhan layout admin yang kompleks.
- Integrasi Wayfinder membantu frontend memanggil route/controller secara type-safe, sehingga risiko typo URL atau mismatch parameter lebih rendah.
- Fitur seperti QR scan, map view, label printing, dan reporting memperluas aplikasi dari sekadar dashboard CRUD menjadi tool operasional lapangan.

### Integrasi

Asetku juga memadukan beberapa layanan dan library pendukung yang relevan dengan use case aset.

- Leaflet digunakan untuk menampilkan aset berbasis koordinat pada map view.
- QRCode dan JsBarcode dipakai untuk identifikasi fisik aset dan pencetakan label.
- Excel export/import dan PDF generation membantu proses operasional yang masih membutuhkan dokumen atau pertukaran data offline.
- Horizon dan Redis dipakai untuk kebutuhan queue, cache, dan monitoring job.
- Scramble menyediakan dokumentasi OpenAPI UI untuk endpoint API yang tersedia.

## Fitur Kunci Produk

Beberapa fitur yang paling menonjol dari project ini:

- Multi-organization workspace dengan organization switcher dan onboarding organisasi.
- Registrasi aset lengkap dengan metadata, custom field, dokumen, foto, lokasi, dan status.
- Public QR page untuk melihat detail aset tanpa login menggunakan token rahasia.
- Asset lifecycle yang mencatat histori perpindahan, peminjaman, return, maintenance, audit, hingga disposal.
- User management modern: invitations, SSO, 2FA, impersonation, delegation, dan notification preferences.
- Reporting operasional untuk inventory, stocktake print, work order, dan maintenance cost.
- Settings dan feature flags yang dapat diatur dari aplikasi untuk mendukung fleksibilitas operasional.

## Hasil dan Dampak

Dengan cakupan modul yang cukup lengkap, Asetku berfungsi sebagai fondasi sistem operasional aset yang lebih matang dibanding pendekatan manual atau spreadsheet terpisah.

- Proses pencatatan aset menjadi lebih terstruktur sejak onboarding organisasi sampai aktivitas harian.
- Histori aset lebih dapat dipercaya karena perubahan penting direkam dalam audit trail yang tidak mudah dimanipulasi.
- Tim operasional mendapat akses data yang lebih cepat melalui dashboard, filter, export, QR scan, dan halaman publik read-only.
- Kontrol akses menjadi lebih aman berkat kombinasi RBAC, organisasi aktif, Fortify 2FA, serta dukungan SSO.
- Pengembangan produk lebih scalable karena backend, frontend, queue, API, dan dokumentasi berjalan di satu arsitektur yang konsisten.

## Catatan Tambahan

Project ini juga menunjukkan perhatian yang cukup kuat pada developer experience dan maintainability.

- Codebase sudah dilengkapi linting, formatting, type-checking, PHPStan, dan test suite berbasis Pest.
- Ada dukungan generator module, type-safe Inertia shared props, serta struktur route modular untuk menjaga codebase tetap rapi saat fitur bertambah.
- Horizon dan Telescope memberi nilai tambah untuk monitoring job dan debugging selama development.
- Arsitektur saat ini cocok untuk terus dikembangkan menjadi produk internal yang lebih besar atau diposisikan sebagai fondasi SaaS B2B di domain asset operations.
