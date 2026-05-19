-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 18 Bulan Mei 2026 pada 22.13
-- Versi server: 10.11.17-MariaDB
-- Versi PHP: 8.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homecare_aryadp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `status` enum('draft','published','archived') NOT NULL DEFAULT 'draft',
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `published_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `articles`
--

INSERT INTO `articles` (`id`, `user_id`, `category_id`, `title`, `slug`, `excerpt`, `content`, `featured_image`, `status`, `is_featured`, `published_at`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Struktur Service Layer yang Enak Dirawat di Laravel', 'struktur-service-layer-yang-enak-dirawat-di-laravel', 'Cara membagi Action/Service/Repository tanpa overengineering. Fokus pada maintainability.', '\n## Introduction\n\nCara membagi Action/Service/Repository tanpa overengineering. Fokus pada maintainability.\n\n## Kenapa Ini Penting?\n\nDalam pengembangan aplikasi modern, kita sering menghadapi tantangan dalam membangun sistem yang maintainable dan scalable. Artikel ini akan membahas best practices yang bisa langsung diterapkan di project kamu.\n\n## Langkah-langkah Implementasi\n\n### 1. Persiapan Awal\n\nPastikan kamu sudah memiliki environment yang proper. Ini termasuk:\n- PHP 8.2+\n- Composer\n- Node.js & npm\n- Database (MySQL/PostgreSQL)\n\n### 2. Konfigurasi\n\nBerikut contoh konfigurasi yang direkomendasikan:\n\n```php\n// config/app.php\nreturn [\n    \'name\' => env(\'APP_NAME\', \'Laravel\'),\n    // ... konfigurasi lainnya\n];\n```\n\n### 3. Implementasi\n\nSekarang kita bisa mulai implementasi fitur utama. Fokus pada clean code dan separation of concerns.\n\n## Tips Tambahan\n\n- Selalu tulis test untuk fitur critical\n- Gunakan caching untuk data yang jarang berubah\n- Monitor performance secara regular\n\n## Kesimpulan\n\nDengan mengikuti panduan di atas, kamu akan memiliki codebase yang lebih maintainable dan siap untuk scale. Jangan ragu untuk eksperimen dan sesuaikan dengan kebutuhan project kamu.\n\n---\n\nAda pertanyaan? Silahkan hubungi saya via email atau DM di Twitter!\n        ', NULL, 'published', 1, '2025-11-29 19:18:54', 'Struktur Service Layer yang Enak Dirawat di Laravel', 'Cara membagi Action/Service/Repository tanpa overengineering. Fokus pada maintainability.', '2025-12-21 19:18:54', '2025-12-21 19:18:54'),
(2, 1, 2, 'Form UX yang Bagus dengan Inertia.js', 'form-ux-yang-bagus-dengan-inertiajs', 'Validasi, error state, dan loading state yang terasa profesional di React/Vue.', '\n## Introduction\n\nValidasi, error state, dan loading state yang terasa profesional di React/Vue.\n\n## Kenapa Ini Penting?\n\nDalam pengembangan aplikasi modern, kita sering menghadapi tantangan dalam membangun sistem yang maintainable dan scalable. Artikel ini akan membahas best practices yang bisa langsung diterapkan di project kamu.\n\n## Langkah-langkah Implementasi\n\n### 1. Persiapan Awal\n\nPastikan kamu sudah memiliki environment yang proper. Ini termasuk:\n- PHP 8.2+\n- Composer\n- Node.js & npm\n- Database (MySQL/PostgreSQL)\n\n### 2. Konfigurasi\n\nBerikut contoh konfigurasi yang direkomendasikan:\n\n```php\n// config/app.php\nreturn [\n    \'name\' => env(\'APP_NAME\', \'Laravel\'),\n    // ... konfigurasi lainnya\n];\n```\n\n### 3. Implementasi\n\nSekarang kita bisa mulai implementasi fitur utama. Fokus pada clean code dan separation of concerns.\n\n## Tips Tambahan\n\n- Selalu tulis test untuk fitur critical\n- Gunakan caching untuk data yang jarang berubah\n- Monitor performance secara regular\n\n## Kesimpulan\n\nDengan mengikuti panduan di atas, kamu akan memiliki codebase yang lebih maintainable dan siap untuk scale. Jangan ragu untuk eksperimen dan sesuaikan dengan kebutuhan project kamu.\n\n---\n\nAda pertanyaan? Silahkan hubungi saya via email atau DM di Twitter!\n        ', NULL, 'published', 1, '2025-12-09 19:18:55', 'Form UX yang Bagus dengan Inertia.js', 'Validasi, error state, dan loading state yang terasa profesional di React/Vue.', '2025-12-21 19:18:55', '2025-12-21 19:18:55'),
(3, 1, 4, 'Optimasi Query MySQL untuk Listing Besar', 'optimasi-query-mysql-untuk-listing-besar', 'Indexing, pagination yang aman, dan caching yang tepat untuk performa maksimal.', '\n## Introduction\n\nIndexing, pagination yang aman, dan caching yang tepat untuk performa maksimal.\n\n## Kenapa Ini Penting?\n\nDalam pengembangan aplikasi modern, kita sering menghadapi tantangan dalam membangun sistem yang maintainable dan scalable. Artikel ini akan membahas best practices yang bisa langsung diterapkan di project kamu.\n\n## Langkah-langkah Implementasi\n\n### 1. Persiapan Awal\n\nPastikan kamu sudah memiliki environment yang proper. Ini termasuk:\n- PHP 8.2+\n- Composer\n- Node.js & npm\n- Database (MySQL/PostgreSQL)\n\n### 2. Konfigurasi\n\nBerikut contoh konfigurasi yang direkomendasikan:\n\n```php\n// config/app.php\nreturn [\n    \'name\' => env(\'APP_NAME\', \'Laravel\'),\n    // ... konfigurasi lainnya\n];\n```\n\n### 3. Implementasi\n\nSekarang kita bisa mulai implementasi fitur utama. Fokus pada clean code dan separation of concerns.\n\n## Tips Tambahan\n\n- Selalu tulis test untuk fitur critical\n- Gunakan caching untuk data yang jarang berubah\n- Monitor performance secara regular\n\n## Kesimpulan\n\nDengan mengikuti panduan di atas, kamu akan memiliki codebase yang lebih maintainable dan siap untuk scale. Jangan ragu untuk eksperimen dan sesuaikan dengan kebutuhan project kamu.\n\n---\n\nAda pertanyaan? Silahkan hubungi saya via email atau DM di Twitter!\n        ', NULL, 'published', 1, '2025-12-12 19:18:56', 'Optimasi Query MySQL untuk Listing Besar', 'Indexing, pagination yang aman, dan caching yang tepat untuk performa maksimal.', '2025-12-21 19:18:56', '2025-12-21 19:18:56'),
(4, 1, 1, 'Authentication Best Practices di Laravel', 'authentication-best-practices-di-laravel', 'Implementasi auth yang aman dengan Laravel Sanctum dan best practices security.', '\n## Introduction\n\nImplementasi auth yang aman dengan Laravel Sanctum dan best practices security.\n\n## Kenapa Ini Penting?\n\nDalam pengembangan aplikasi modern, kita sering menghadapi tantangan dalam membangun sistem yang maintainable dan scalable. Artikel ini akan membahas best practices yang bisa langsung diterapkan di project kamu.\n\n## Langkah-langkah Implementasi\n\n### 1. Persiapan Awal\n\nPastikan kamu sudah memiliki environment yang proper. Ini termasuk:\n- PHP 8.2+\n- Composer\n- Node.js & npm\n- Database (MySQL/PostgreSQL)\n\n### 2. Konfigurasi\n\nBerikut contoh konfigurasi yang direkomendasikan:\n\n```php\n// config/app.php\nreturn [\n    \'name\' => env(\'APP_NAME\', \'Laravel\'),\n    // ... konfigurasi lainnya\n];\n```\n\n### 3. Implementasi\n\nSekarang kita bisa mulai implementasi fitur utama. Fokus pada clean code dan separation of concerns.\n\n## Tips Tambahan\n\n- Selalu tulis test untuk fitur critical\n- Gunakan caching untuk data yang jarang berubah\n- Monitor performance secara regular\n\n## Kesimpulan\n\nDengan mengikuti panduan di atas, kamu akan memiliki codebase yang lebih maintainable dan siap untuk scale. Jangan ragu untuk eksperimen dan sesuaikan dengan kebutuhan project kamu.\n\n---\n\nAda pertanyaan? Silahkan hubungi saya via email atau DM di Twitter!\n        ', NULL, 'published', 0, '2025-12-05 19:18:57', 'Authentication Best Practices di Laravel', 'Implementasi auth yang aman dengan Laravel Sanctum dan best practices security.', '2025-12-21 19:18:57', '2025-12-21 19:18:57'),
(5, 1, 5, 'Deploy Laravel ke Production dengan Docker', 'deploy-laravel-ke-production-dengan-docker', 'Step-by-step deploy aplikasi Laravel menggunakan Docker dan CI/CD pipeline.', '\n## Introduction\n\nStep-by-step deploy aplikasi Laravel menggunakan Docker dan CI/CD pipeline.\n\n## Kenapa Ini Penting?\n\nDalam pengembangan aplikasi modern, kita sering menghadapi tantangan dalam membangun sistem yang maintainable dan scalable. Artikel ini akan membahas best practices yang bisa langsung diterapkan di project kamu.\n\n## Langkah-langkah Implementasi\n\n### 1. Persiapan Awal\n\nPastikan kamu sudah memiliki environment yang proper. Ini termasuk:\n- PHP 8.2+\n- Composer\n- Node.js & npm\n- Database (MySQL/PostgreSQL)\n\n### 2. Konfigurasi\n\nBerikut contoh konfigurasi yang direkomendasikan:\n\n```php\n// config/app.php\nreturn [\n    \'name\' => env(\'APP_NAME\', \'Laravel\'),\n    // ... konfigurasi lainnya\n];\n```\n\n### 3. Implementasi\n\nSekarang kita bisa mulai implementasi fitur utama. Fokus pada clean code dan separation of concerns.\n\n## Tips Tambahan\n\n- Selalu tulis test untuk fitur critical\n- Gunakan caching untuk data yang jarang berubah\n- Monitor performance secara regular\n\n## Kesimpulan\n\nDengan mengikuti panduan di atas, kamu akan memiliki codebase yang lebih maintainable dan siap untuk scale. Jangan ragu untuk eksperimen dan sesuaikan dengan kebutuhan project kamu.\n\n---\n\nAda pertanyaan? Silahkan hubungi saya via email atau DM di Twitter!\n        ', NULL, 'published', 0, '2025-11-26 19:18:57', 'Deploy Laravel ke Production dengan Docker', 'Step-by-step deploy aplikasi Laravel menggunakan Docker dan CI/CD pipeline.', '2025-12-21 19:18:57', '2025-12-21 19:18:57'),
(6, 1, 2, 'State Management di React dengan Zustand', 'state-management-di-react-dengan-zustand', 'Alternatif Redux yang lebih simple dan powerful untuk mengelola state aplikasi.', '\n## Introduction\n\nAlternatif Redux yang lebih simple dan powerful untuk mengelola state aplikasi.\n\n## Kenapa Ini Penting?\n\nDalam pengembangan aplikasi modern, kita sering menghadapi tantangan dalam membangun sistem yang maintainable dan scalable. Artikel ini akan membahas best practices yang bisa langsung diterapkan di project kamu.\n\n## Langkah-langkah Implementasi\n\n### 1. Persiapan Awal\n\nPastikan kamu sudah memiliki environment yang proper. Ini termasuk:\n- PHP 8.2+\n- Composer\n- Node.js & npm\n- Database (MySQL/PostgreSQL)\n\n### 2. Konfigurasi\n\nBerikut contoh konfigurasi yang direkomendasikan:\n\n```php\n// config/app.php\nreturn [\n    \'name\' => env(\'APP_NAME\', \'Laravel\'),\n    // ... konfigurasi lainnya\n];\n```\n\n### 3. Implementasi\n\nSekarang kita bisa mulai implementasi fitur utama. Fokus pada clean code dan separation of concerns.\n\n## Tips Tambahan\n\n- Selalu tulis test untuk fitur critical\n- Gunakan caching untuk data yang jarang berubah\n- Monitor performance secara regular\n\n## Kesimpulan\n\nDengan mengikuti panduan di atas, kamu akan memiliki codebase yang lebih maintainable dan siap untuk scale. Jangan ragu untuk eksperimen dan sesuaikan dengan kebutuhan project kamu.\n\n---\n\nAda pertanyaan? Silahkan hubungi saya via email atau DM di Twitter!\n        ', NULL, 'published', 0, '2025-12-05 19:18:58', 'State Management di React dengan Zustand', 'Alternatif Redux yang lebih simple dan powerful untuk mengelola state aplikasi.', '2025-12-21 19:18:58', '2025-12-21 19:18:58'),
(7, 1, 1, 'Teknik Prompt yang Baik untuk Vibe Coding Menggunakan Codex di Visual Studio Code pada Proyek Laravel', 'teknik-prompt-yang-baik-untuk-vibe-coding-menggunakan-codex-di-visual-studio-code-pada-proyek-laravel', 'Menggunakan teknik yang baik ketika vibe coding akan memudahkan kita sebagai programmer dalam menyelesaikan pekerjaan.', '## Teknik Prompt yang Baik untuk Vibe Coding Menggunakan Codex di Visual Studio Code pada Proyek Laravel\r\n\r\nDalam workflow *vibe coding* menggunakan Codex di Visual Studio Code, kualitas prompt sangat menentukan hasil kode yang dihasilkan, terutama saat mengerjakan proyek Laravel yang memiliki struktur dan konvensi khusus. Prompt yang baik harus jelas, kontekstual, dan spesifik terhadap versi Laravel, arsitektur yang digunakan (MVC, REST API, atau monolith), serta kebutuhan bisnisnya. Hindari instruksi yang terlalu umum seperti “buatkan fitur login”, dan gantilah dengan prompt terarah seperti “Buatkan fitur login menggunakan Laravel Breeze dengan validasi custom dan redirect berdasarkan role user.” Semakin detail konteks yang diberikan, semakin relevan dan efisien output yang dihasilkan oleh Codex.\r\n\r\nTeknik penting lainnya adalah menyertakan batasan teknis dan standar proyek dalam prompt. Misalnya, tentukan penggunaan Eloquent ORM, struktur folder tertentu, pola repository, atau standar penulisan kode PSR-12. Dalam proyek Laravel, Anda juga dapat meminta Codex menyesuaikan dengan middleware tertentu, membuat migration lengkap dengan relasi foreign key, atau menambahkan unit test berbasis PHPUnit. Prompt seperti “Buatkan CRUD Product lengkap dengan migration, factory, seeder, policy, dan feature test” akan menghasilkan output yang jauh lebih terstruktur dibandingkan instruksi singkat tanpa detail teknis.\r\n\r\nUntuk meningkatkan efektivitas *vibe coding*, gunakan pendekatan iteratif. Mulailah dengan prompt dasar untuk membangun struktur fitur, lalu lanjutkan dengan prompt lanjutan seperti optimasi query, refactor controller ke service layer, atau penambahan validasi berbasis Form Request. Di Visual Studio Code, Anda dapat memanfaatkan konteks file yang sedang aktif agar Codex memahami struktur proyek Laravel Anda. Pastikan setiap prompt berfokus pada satu tujuan spesifik agar hasilnya presisi dan mudah dikontrol.\r\n\r\nTerakhir, biasakan menambahkan konteks error atau kebutuhan debugging saat mengalami kendala. Contohnya: “Mengapa relasi hasMany pada model Order tidak menampilkan data meskipun foreign key sudah benar?” Prompt berbasis masalah akan membantu Codex memberikan analisis yang lebih akurat. Dengan teknik prompt yang terstruktur, detail, dan kontekstual, proses pengembangan Laravel menggunakan Codex di Visual Studio Code akan menjadi lebih cepat, konsisten, dan selaras dengan standar best practice pengembangan web modern.', NULL, 'published', 0, '2026-02-25 08:57:19', 'Teknik Prompt yang Baik untuk Vibe Coding Menggunakan Codex di Visual', 'Menggunakan teknik yang baik ketika vibe coding akan memudahkan kita sebagai programmer dalam menyelesaikan pekerjaan.', '2026-02-25 08:57:19', '2026-02-25 08:57:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `article_tag`
--

CREATE TABLE `article_tag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `article_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `article_tag`
--

INSERT INTO `article_tag` (`id`, `article_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(1, 1, 5, NULL, NULL),
(2, 1, 7, NULL, NULL),
(3, 2, 3, NULL, NULL),
(4, 2, 4, NULL, NULL),
(5, 2, 5, NULL, NULL),
(6, 3, 2, NULL, NULL),
(7, 3, 5, NULL, NULL),
(8, 3, 10, NULL, NULL),
(9, 4, 2, NULL, NULL),
(10, 4, 6, NULL, NULL),
(11, 5, 2, NULL, NULL),
(12, 5, 5, NULL, NULL),
(13, 5, 6, NULL, NULL),
(14, 5, 7, NULL, NULL),
(15, 6, 2, NULL, NULL),
(16, 6, 4, NULL, NULL),
(17, 6, 6, NULL, NULL),
(18, 6, 8, NULL, NULL),
(19, 7, 1, NULL, NULL),
(20, 7, 16, NULL, NULL),
(21, 7, 19, NULL, NULL),
(22, 7, 20, NULL, NULL),
(23, 7, 26, NULL, NULL),
(24, 7, 30, NULL, NULL),
(25, 7, 31, NULL, NULL),
(26, 7, 27, NULL, NULL),
(27, 7, 24, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('aryadpwebid-cache-120b35d2351fb7c48a739d4c7759acac', 'i:1;', 1774617046),
('aryadpwebid-cache-120b35d2351fb7c48a739d4c7759acac:timer', 'i:1774617046;', 1774617046);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Laravel', 'laravel', NULL, NULL, '2025-12-21 19:18:49', '2025-12-21 19:18:49'),
(2, 'React', 'react', NULL, NULL, '2025-12-21 19:18:49', '2025-12-21 19:18:49'),
(3, 'Vue.js', 'vuejs', NULL, NULL, '2025-12-21 19:18:49', '2025-12-21 19:18:49'),
(4, 'Database', 'database', NULL, NULL, '2025-12-21 19:18:49', '2025-12-21 19:18:49'),
(5, 'DevOps', 'devops', NULL, NULL, '2025-12-21 19:18:49', '2025-12-21 19:18:49'),
(6, 'Tips & Tricks', 'tips-tricks', NULL, NULL, '2025-12-21 19:18:49', '2025-12-21 19:18:49'),
(7, 'Productivity', 'productivity', 'Produktifitas sehari-hari sebagai software developer', NULL, '2026-02-25 08:36:14', '2026-02-25 08:36:14'),
(8, 'Life', 'life', 'Kehidupan sehari-hari', NULL, '2026-02-25 08:36:30', '2026-02-25 08:36:30'),
(9, 'Career', 'career', 'Pengalaman pekerjaan', NULL, '2026-02-25 08:37:00', '2026-02-25 08:37:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `class_enrollments`
--

CREATE TABLE `class_enrollments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `online_class_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `amount` decimal(12,2) NOT NULL DEFAULT 0.00,
  `status` enum('pending','active','expired','cancelled') NOT NULL DEFAULT 'pending',
  `payment_method` varchar(255) DEFAULT NULL,
  `enrolled_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `class_enrollments`
--

INSERT INTO `class_enrollments` (`id`, `online_class_id`, `user_id`, `transaction_id`, `amount`, `status`, `payment_method`, `enrolled_at`, `expires_at`, `notes`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'ORD-20260227-8B924B', 0.00, 'active', 'free', '2026-02-27 10:00:13', NULL, NULL, '2026-02-27 10:00:13', '2026-02-27 10:00:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `class_lessons`
--

CREATE TABLE `class_lessons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `online_class_id` bigint(20) UNSIGNED NOT NULL,
  `class_section_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `content_type` enum('video','text','pdf') NOT NULL DEFAULT 'text',
  `video_url` varchar(255) DEFAULT NULL,
  `video_provider` enum('youtube','vimeo','upload') DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `attachment_name` varchar(255) DEFAULT NULL,
  `duration_minutes` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `is_free_preview` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `class_lessons`
--

INSERT INTO `class_lessons` (`id`, `online_class_id`, `class_section_id`, `title`, `slug`, `description`, `content`, `content_type`, `video_url`, `video_provider`, `attachment`, `attachment_name`, `duration_minutes`, `order`, `is_free_preview`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Apa itu Laravel?', 'apa-itu-laravel-6948aa9842fb6', NULL, '<p>Konten untuk lesson: Apa itu Laravel?</p>', 'text', NULL, NULL, NULL, NULL, 15, 1, 1, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(2, 1, 1, 'Instalasi & Setup', 'instalasi-setup-6948aa9844205', NULL, '<p>Konten untuk lesson: Instalasi & Setup</p>', 'text', NULL, NULL, NULL, NULL, 16, 2, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(3, 1, 1, 'Struktur Folder', 'struktur-folder-6948aa9848212', NULL, '<p>Konten untuk lesson: Struktur Folder</p>', 'text', NULL, NULL, NULL, NULL, 19, 3, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(4, 1, 2, 'Basic Routing', 'basic-routing-6948aa9860518', NULL, '<p>Konten untuk lesson: Basic Routing</p>', 'text', NULL, NULL, NULL, NULL, 35, 1, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(5, 1, 2, 'Controller', 'controller-6948aa9863fca', NULL, '<p>Konten untuk lesson: Controller</p>', 'text', NULL, NULL, NULL, NULL, 15, 2, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(6, 1, 2, 'Resource Routes', 'resource-routes-6948aa98674af', NULL, '<p>Konten untuk lesson: Resource Routes</p>', 'text', NULL, NULL, NULL, NULL, 23, 3, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(7, 1, 3, 'Migrations', 'migrations-6948aa9874267', NULL, '<p>Konten untuk lesson: Migrations</p>', 'text', NULL, NULL, NULL, NULL, 11, 1, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(8, 1, 3, 'Models', 'models-6948aa987565a', NULL, '<p>Konten untuk lesson: Models</p>', 'text', NULL, NULL, NULL, NULL, 31, 2, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(9, 1, 3, 'Relationships', 'relationships-6948aa9876a6d', NULL, '<p>Konten untuk lesson: Relationships</p>', 'text', NULL, NULL, NULL, NULL, 32, 3, 0, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(10, 2, 4, 'Install Inertia', 'install-inertia-6948aa993aadd', NULL, '<p>Konten untuk lesson: Install Inertia</p>', 'text', NULL, NULL, NULL, NULL, 31, 1, 1, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(11, 2, 4, 'Konfigurasi Vite', 'konfigurasi-vite-6948aa993c55a', NULL, '<p>Konten untuk lesson: Konfigurasi Vite</p>', 'text', NULL, NULL, NULL, NULL, 14, 2, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(12, 2, 4, 'First Component', 'first-component-6948aa993db04', NULL, '<p>Konten untuk lesson: First Component</p>', 'text', NULL, NULL, NULL, NULL, 21, 3, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(13, 2, 5, 'useForm Hook', 'useform-hook-6948aa993f7d8', NULL, '<p>Konten untuk lesson: useForm Hook</p>', 'text', NULL, NULL, NULL, NULL, 29, 1, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(14, 2, 5, 'Validation', 'validation-6948aa99403ff', NULL, '<p>Konten untuk lesson: Validation</p>', 'text', NULL, NULL, NULL, NULL, 25, 2, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(15, 2, 5, 'File Upload', 'file-upload-6948aa994127c', NULL, '<p>Konten untuk lesson: File Upload</p>', 'text', NULL, NULL, NULL, NULL, 27, 3, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(16, 2, 6, 'Shared Data', 'shared-data-6948aa99424c0', NULL, '<p>Konten untuk lesson: Shared Data</p>', 'text', NULL, NULL, NULL, NULL, 25, 1, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(17, 2, 6, 'Modal & Dialog', 'modal-dialog-6948aa99432d9', NULL, '<p>Konten untuk lesson: Modal & Dialog</p>', 'text', NULL, NULL, NULL, NULL, 11, 2, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(18, 2, 6, 'Infinite Scroll', 'infinite-scroll-6948aa9943bf7', NULL, '<p>Konten untuk lesson: Infinite Scroll</p>', 'text', NULL, NULL, NULL, NULL, 45, 3, 0, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(19, 3, 7, 'RESTful Principles', 'restful-principles-6948aa9a143b8', NULL, '<p>Konten untuk lesson: RESTful Principles</p>', 'text', NULL, NULL, NULL, NULL, 10, 1, 1, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(20, 3, 7, 'JSON Responses', 'json-responses-6948aa9a17e34', NULL, '<p>Konten untuk lesson: JSON Responses</p>', 'text', NULL, NULL, NULL, NULL, 44, 2, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(21, 3, 7, 'API Resources', 'api-resources-6948aa9a2aef0', NULL, '<p>Konten untuk lesson: API Resources</p>', 'text', NULL, NULL, NULL, NULL, 23, 3, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(22, 3, 8, 'Sanctum Setup', 'sanctum-setup-6948aa9a3e5d8', NULL, '<p>Konten untuk lesson: Sanctum Setup</p>', 'text', NULL, NULL, NULL, NULL, 41, 1, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(23, 3, 8, 'Token Management', 'token-management-6948aa9a47769', NULL, '<p>Konten untuk lesson: Token Management</p>', 'text', NULL, NULL, NULL, NULL, 45, 2, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(24, 3, 8, 'Rate Limiting', 'rate-limiting-6948aa9a4dab7', NULL, '<p>Konten untuk lesson: Rate Limiting</p>', 'text', NULL, NULL, NULL, NULL, 23, 3, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(25, 3, 9, 'OpenAPI Spec', 'openapi-spec-6948aa9a5ac7b', NULL, '<p>Konten untuk lesson: OpenAPI Spec</p>', 'text', NULL, NULL, NULL, NULL, 26, 1, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(26, 3, 9, 'Swagger UI', 'swagger-ui-6948aa9a66dd9', NULL, '<p>Konten untuk lesson: Swagger UI</p>', 'text', NULL, NULL, NULL, NULL, 13, 2, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(27, 3, 9, 'Postman Collection', 'postman-collection-6948aa9a71fc4', NULL, '<p>Konten untuk lesson: Postman Collection</p>', 'text', NULL, NULL, NULL, NULL, 44, 3, 0, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(28, 4, 10, 'Kenapa Testing?', 'kenapa-testing-6948aa9b82629', NULL, '<p>Konten untuk lesson: Kenapa Testing?</p>', 'text', NULL, NULL, NULL, NULL, 41, 1, 1, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(29, 4, 10, 'Pest vs PHPUnit', 'pest-vs-phpunit-6948aa9b9333f', NULL, '<p>Konten untuk lesson: Pest vs PHPUnit</p>', 'text', NULL, NULL, NULL, NULL, 33, 2, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(30, 4, 10, 'Setup Pest', 'setup-pest-6948aa9b9bbd5', NULL, '<p>Konten untuk lesson: Setup Pest</p>', 'text', NULL, NULL, NULL, NULL, 27, 3, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(31, 4, 11, 'Testing Models', 'testing-models-6948aa9ba9b13', NULL, '<p>Konten untuk lesson: Testing Models</p>', 'text', NULL, NULL, NULL, NULL, 40, 1, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(32, 4, 11, 'Testing Services', 'testing-services-6948aa9baa865', NULL, '<p>Konten untuk lesson: Testing Services</p>', 'text', NULL, NULL, NULL, NULL, 34, 2, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(33, 4, 11, 'Mocking', 'mocking-6948aa9babee0', NULL, '<p>Konten untuk lesson: Mocking</p>', 'text', NULL, NULL, NULL, NULL, 17, 3, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(34, 4, 12, 'HTTP Tests', 'http-tests-6948aa9bad4d2', NULL, '<p>Konten untuk lesson: HTTP Tests</p>', 'text', NULL, NULL, NULL, NULL, 39, 1, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(35, 4, 12, 'Database Testing', 'database-testing-6948aa9bb158a', NULL, '<p>Konten untuk lesson: Database Testing</p>', 'text', NULL, NULL, NULL, NULL, 17, 2, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(36, 4, 12, 'Browser Tests', 'browser-tests-6948aa9bb4b98', NULL, '<p>Konten untuk lesson: Browser Tests</p>', 'text', NULL, NULL, NULL, NULL, 14, 3, 0, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(37, 5, 13, 'N+1 Problem', 'n1-problem-6948aa9c80fa1', NULL, '<p>Konten untuk lesson: N+1 Problem</p>', 'text', NULL, NULL, NULL, NULL, 11, 1, 1, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(38, 5, 13, 'Eager Loading', 'eager-loading-6948aa9c81899', NULL, '<p>Konten untuk lesson: Eager Loading</p>', 'text', NULL, NULL, NULL, NULL, 44, 2, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(39, 5, 13, 'Query Caching', 'query-caching-6948aa9c8206d', NULL, '<p>Konten untuk lesson: Query Caching</p>', 'text', NULL, NULL, NULL, NULL, 12, 3, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(40, 5, 14, 'Cache Drivers', 'cache-drivers-6948aa9c82f21', NULL, '<p>Konten untuk lesson: Cache Drivers</p>', 'text', NULL, NULL, NULL, NULL, 40, 1, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(41, 5, 14, 'Cache Tags', 'cache-tags-6948aa9c838ec', NULL, '<p>Konten untuk lesson: Cache Tags</p>', 'text', NULL, NULL, NULL, NULL, 35, 2, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(42, 5, 14, 'Response Caching', 'response-caching-6948aa9c840fa', NULL, '<p>Konten untuk lesson: Response Caching</p>', 'text', NULL, NULL, NULL, NULL, 41, 3, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(43, 5, 15, 'Config Caching', 'config-caching-6948aa9c8517b', NULL, '<p>Konten untuk lesson: Config Caching</p>', 'text', NULL, NULL, NULL, NULL, 21, 1, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(44, 5, 15, 'Queue Workers', 'queue-workers-6948aa9c862fe', NULL, '<p>Konten untuk lesson: Queue Workers</p>', 'text', NULL, NULL, NULL, NULL, 24, 2, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(45, 5, 15, 'Horizon', 'horizon-6948aa9c86af5', NULL, '<p>Konten untuk lesson: Horizon</p>', 'text', NULL, NULL, NULL, NULL, 34, 3, 0, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(46, 6, 16, 'Requirements', 'requirements-6948aa9d4fd71', NULL, '<p>Konten untuk lesson: Requirements</p>', 'text', NULL, NULL, NULL, NULL, 13, 1, 1, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(47, 6, 16, 'Database Design', 'database-design-6948aa9d50571', NULL, '<p>Konten untuk lesson: Database Design</p>', 'text', NULL, NULL, NULL, NULL, 32, 2, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(48, 6, 16, 'API Design', 'api-design-6948aa9d50d4b', NULL, '<p>Konten untuk lesson: API Design</p>', 'text', NULL, NULL, NULL, NULL, 14, 3, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(49, 6, 17, 'Multi-tenancy', 'multi-tenancy-6948aa9d51c55', NULL, '<p>Konten untuk lesson: Multi-tenancy</p>', 'text', NULL, NULL, NULL, NULL, 40, 1, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(50, 6, 17, 'Billing Integration', 'billing-integration-6948aa9d523e9', NULL, '<p>Konten untuk lesson: Billing Integration</p>', 'text', NULL, NULL, NULL, NULL, 28, 2, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(51, 6, 17, 'User Management', 'user-management-6948aa9d52ba8', NULL, '<p>Konten untuk lesson: User Management</p>', 'text', NULL, NULL, NULL, NULL, 29, 3, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(52, 6, 18, 'Docker Setup', 'docker-setup-6948aa9d539b6', NULL, '<p>Konten untuk lesson: Docker Setup</p>', 'text', NULL, NULL, NULL, NULL, 20, 1, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(53, 6, 18, 'CI/CD Pipeline', 'cicd-pipeline-6948aa9d54122', NULL, '<p>Konten untuk lesson: CI/CD Pipeline</p>', 'text', NULL, NULL, NULL, NULL, 43, 2, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(54, 6, 18, 'Monitoring', 'monitoring-6948aa9d54a17', NULL, '<p>Konten untuk lesson: Monitoring</p>', 'text', NULL, NULL, NULL, NULL, 42, 3, 0, '2025-12-21 19:19:09', '2025-12-21 19:19:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `class_sections`
--

CREATE TABLE `class_sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `online_class_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `class_sections`
--

INSERT INTO `class_sections` (`id`, `online_class_id`, `title`, `description`, `order`, `created_at`, `updated_at`) VALUES
(1, 1, 'Pengenalan Laravel', NULL, 1, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(2, 1, 'Routing & Controller', NULL, 2, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(3, 1, 'Database & Eloquent', NULL, 3, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(4, 2, 'Setup Inertia', NULL, 1, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(5, 2, 'State & Forms', NULL, 2, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(6, 2, 'Advanced Patterns', NULL, 3, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(7, 3, 'API Basics', NULL, 1, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(8, 3, 'Authentication', NULL, 2, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(9, 3, 'Documentation', NULL, 3, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(10, 4, 'Intro to Testing', NULL, 1, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(11, 4, 'Unit Testing', NULL, 2, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(12, 4, 'Feature Testing', NULL, 3, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(13, 5, 'Query Optimization', NULL, 1, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(14, 5, 'Caching Strategies', NULL, 2, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(15, 5, 'Production Setup', NULL, 3, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(16, 6, 'Planning & Architecture', NULL, 1, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(17, 6, 'Core Features', NULL, 2, '2025-12-21 19:19:09', '2025-12-21 19:19:09'),
(18, 6, 'Deployment', NULL, 3, '2025-12-21 19:19:09', '2025-12-21 19:19:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `clients`
--

INSERT INTO `clients` (`id`, `name`, `slug`, `logo`, `website`, `description`, `is_featured`, `order`, `created_at`, `updated_at`) VALUES
(7, 'PT. Wifiku Indonesia', 'pt-wifiku-indonesia', 'clients/f62XV1cBvYhXpGCsO7PpxTKxU7LJoEbWFy010q1k.png', 'https://wifiku.net.id', 'Mengintegrasikan Payment Gateway Xendit Pada Sistem ERP Wifiku', 1, 0, '2025-12-22 21:12:20', '2025-12-22 21:12:20'),
(8, 'PT. Citanusa', 'pt-citanusa', 'clients/T2NZ0zZwXNx0fxUDiZ9x7Q1yGhgrCjonF7XXZSSL.png', 'https://citanusa.com', 'Membuat Sistem Manajemen Aset Multi-Company dan Multi-Proyek', 1, 2, '2025-12-22 21:13:11', '2025-12-22 21:17:47'),
(9, 'Toko Rumput Sintetis', 'toko-rumput-sintetis', 'clients/ErBslwAGPMd46XS3L6WemNbO9PRhdfMR30R4451r.png', 'https://storerumputsintetis.como', 'Membuat Company Profile dan Katalog Produk Toko Rumput Sintetis di Tajurhalang, Kab. Bogor', 1, 4, '2025-12-22 21:14:41', '2025-12-22 21:17:58'),
(10, 'PT. Solusi Bisnis Konsultasi Indonesia (SBKI)', 'pt-solusi-bisnis-konsultasi-indonesia-sbki', 'clients/4L3WSCIn0NerL85GgbACQ1ylZsHSF5h3CQwEJsLJ.png', 'https://trainingsbki.co.id/', 'Maintenance Company Profile', 1, 3, '2025-12-22 21:15:57', '2025-12-22 21:15:57'),
(11, 'Lembaga Perlindungan Saksi dan Korban', 'lembaga-perlindungan-saksi-dan-korban', 'clients/aDe3uPYHjiJbEDxbcTz1s13hQ4snU80JxPlkj4sM.png', 'https://lpsk.go.id', 'Membuat Sistem E-Restitusi Untuk Melakukan Perhitungan Restitusi Korban', 1, 1, '2025-12-22 21:17:03', '2025-12-22 21:17:37'),
(12, 'Himpunan Ahli Teknik Tanah Indonesia (Hatti)', 'himpunan-ahli-teknik-tanah-indonesia-hatti', 'clients/2IFIc3bF1aWoFgSwb05RE5eWH39FdvvIMxeGBKRS.png', 'https://hatti.or.id', 'Membuat dan Maintenance Company Profile', 1, 5, '2025-12-22 21:19:51', '2025-12-22 21:19:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `article_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `author_name` varchar(255) NOT NULL,
  `author_email` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `approved_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` enum('unread','read','replied') NOT NULL DEFAULT 'unread',
  `read_at` timestamp NULL DEFAULT NULL,
  `replied_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `jobs`
--

INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
(1, 'default', '{\"uuid\":\"11205bd9-b28a-48b0-a685-eaaac032dbfc\",\"displayName\":\"App\\\\Mail\\\\PaymentSuccessMail\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Mail\\\\SendQueuedMailable\",\"command\":\"O:34:\\\"Illuminate\\\\Mail\\\\SendQueuedMailable\\\":17:{s:8:\\\"mailable\\\";O:27:\\\"App\\\\Mail\\\\PaymentSuccessMail\\\":3:{s:5:\\\"order\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:16:\\\"App\\\\Models\\\\Order\\\";s:2:\\\"id\\\";i:1;s:9:\\\"relations\\\";a:2:{i:0;s:4:\\\"user\\\";i:1;s:9:\\\"orderable\\\";}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:2:\\\"to\\\";a:1:{i:0;a:2:{s:4:\\\"name\\\";N;s:7:\\\"address\\\";s:19:\\\"admin@aryadp.web.id\\\";}}s:6:\\\"mailer\\\";s:3:\\\"log\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:13:\\\"maxExceptions\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:12:\\\"messageGroup\\\";N;s:12:\\\"deduplicator\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:3:\\\"job\\\";N;}\"},\"createdAt\":1772211615,\"delay\":null}', 0, NULL, 1772211615, 1772211615);

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `lesson_progress`
--

CREATE TABLE `lesson_progress` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `class_lesson_id` bigint(20) UNSIGNED NOT NULL,
  `online_class_id` bigint(20) UNSIGNED NOT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT 0,
  `watch_time_seconds` int(11) NOT NULL DEFAULT 0,
  `last_position_seconds` int(11) NOT NULL DEFAULT 0,
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `lesson_progress`
--

INSERT INTO `lesson_progress` (`id`, `user_id`, `class_lesson_id`, `online_class_id`, `is_completed`, `watch_time_seconds`, `last_position_seconds`, `completed_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 0, 0, '2026-02-27 10:01:50', '2026-02-27 10:01:50', '2026-02-27 10:01:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_08_26_100418_add_two_factor_columns_to_users_table', 1),
(5, '2025_12_17_120000_create_rbac_tables', 1),
(6, '2025_12_17_130000_create_clients_table', 1),
(7, '2025_12_17_140000_create_article_tables', 1),
(8, '2025_12_17_150000_create_portfolio_tables', 1),
(9, '2025_12_17_160000_create_product_tables', 1),
(10, '2025_12_17_161000_create_product_galleries_table', 1),
(11, '2025_12_17_170000_create_online_class_tables', 1),
(12, '2025_12_17_171000_create_class_sections_table', 1),
(13, '2025_12_18_050000_add_is_featured_to_articles_table', 1),
(14, '2025_12_18_060000_create_contact_messages_table', 1),
(15, '2025_12_18_061000_create_comments_table', 1),
(16, '2025_12_18_062000_create_subscribers_table', 1),
(17, '2025_12_18_070000_add_video_fields_to_class_lessons_table', 1),
(18, '2025_12_18_080000_create_payment_tables', 1),
(19, '2025_12_18_160000_create_lesson_progress_table', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `online_classes`
--

CREATE TABLE `online_classes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instructor_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `price` decimal(12,2) NOT NULL DEFAULT 0.00,
  `type` enum('free','paid') NOT NULL DEFAULT 'free',
  `level` enum('beginner','intermediate','advanced') NOT NULL DEFAULT 'beginner',
  `duration_hours` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` enum('draft','published','archived') NOT NULL DEFAULT 'draft',
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `online_classes`
--

INSERT INTO `online_classes` (`id`, `instructor_id`, `title`, `slug`, `description`, `content`, `featured_image`, `price`, `type`, `level`, `duration_hours`, `status`, `is_featured`, `order`, `created_at`, `updated_at`) VALUES
(1, 1, 'Laravel Fundamentals', 'laravel-fundamentals', 'Belajar dasar-dasar Laravel dari nol hingga mampu membuat aplikasi CRUD lengkap.', '<p>Belajar dasar-dasar Laravel dari nol hingga mampu membuat aplikasi CRUD lengkap.</p><p>Kelas ini dirancang untuk membantu kamu menguasai topik secara mendalam dengan contoh praktis.</p>', NULL, 0.00, 'free', 'beginner', 0, 'published', 1, 1, '2025-12-21 19:19:04', '2025-12-21 19:19:04'),
(2, 1, 'Inertia.js + React Masterclass', 'inertiajs-react-masterclass', 'Bangun SPA dengan Laravel backend dan React frontend menggunakan Inertia.js.', '<p>Bangun SPA dengan Laravel backend dan React frontend menggunakan Inertia.js.</p><p>Kelas ini dirancang untuk membantu kamu menguasai topik secara mendalam dengan contoh praktis.</p>', NULL, 399000.00, 'paid', 'intermediate', 0, 'published', 1, 2, '2025-12-21 19:19:05', '2025-12-21 19:19:05'),
(3, 1, 'Laravel API Development', 'laravel-api-development', 'Membangun RESTful API yang aman, cepat, dan terdokumentasi dengan baik.', '<p>Membangun RESTful API yang aman, cepat, dan terdokumentasi dengan baik.</p><p>Kelas ini dirancang untuk membantu kamu menguasai topik secara mendalam dengan contoh praktis.</p>', NULL, 349000.00, 'paid', 'intermediate', 0, 'published', 1, 3, '2025-12-21 19:19:06', '2025-12-21 19:19:06'),
(4, 1, 'Testing di Laravel dengan Pest', 'testing-di-laravel-dengan-pest', 'Menulis test yang efektif menggunakan Pest PHP untuk code yang lebih reliable.', '<p>Menulis test yang efektif menggunakan Pest PHP untuk code yang lebih reliable.</p><p>Kelas ini dirancang untuk membantu kamu menguasai topik secara mendalam dengan contoh praktis.</p>', NULL, 0.00, 'free', 'intermediate', 0, 'published', 0, 4, '2025-12-21 19:19:07', '2025-12-21 19:19:07'),
(5, 1, 'Laravel Performance Optimization', 'laravel-performance-optimization', 'Teknik optimasi untuk membuat aplikasi Laravel lebih cepat dan efisien.', '<p>Teknik optimasi untuk membuat aplikasi Laravel lebih cepat dan efisien.</p><p>Kelas ini dirancang untuk membantu kamu menguasai topik secara mendalam dengan contoh praktis.</p>', NULL, 449000.00, 'paid', 'advanced', 0, 'published', 0, 5, '2025-12-21 19:19:08', '2025-12-21 19:19:08'),
(6, 1, 'Full-Stack Project: Build a SaaS', 'full-stack-project-build-a-saas', 'Project-based course membangun aplikasi SaaS dari awal hingga deployment.', '<p>Project-based course membangun aplikasi SaaS dari awal hingga deployment.</p><p>Kelas ini dirancang untuk membantu kamu menguasai topik secara mendalam dengan contoh praktis.</p>', NULL, 599000.00, 'paid', 'advanced', 0, 'published', 0, 6, '2025-12-21 19:19:09', '2025-12-21 19:19:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `orderable_type` varchar(255) NOT NULL,
  `orderable_id` bigint(20) UNSIGNED NOT NULL,
  `voucher_id` bigint(20) UNSIGNED DEFAULT NULL,
  `subtotal` decimal(12,2) NOT NULL,
  `discount` decimal(12,2) NOT NULL DEFAULT 0.00,
  `total` decimal(12,2) NOT NULL,
  `status` enum('pending','processing','paid','failed','expired','cancelled','refunded') NOT NULL DEFAULT 'pending',
  `payment_type` varchar(255) DEFAULT NULL,
  `payment_channel` varchar(255) DEFAULT NULL,
  `midtrans_transaction_id` varchar(255) DEFAULT NULL,
  `midtrans_order_id` varchar(255) DEFAULT NULL,
  `snap_token` varchar(255) DEFAULT NULL,
  `snap_redirect_url` varchar(255) DEFAULT NULL,
  `midtrans_response` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`midtrans_response`)),
  `paid_at` timestamp NULL DEFAULT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `order_number`, `user_id`, `orderable_type`, `orderable_id`, `voucher_id`, `subtotal`, `discount`, `total`, `status`, `payment_type`, `payment_channel`, `midtrans_transaction_id`, `midtrans_order_id`, `snap_token`, `snap_redirect_url`, `midtrans_response`, `paid_at`, `expired_at`, `notes`, `created_at`, `updated_at`) VALUES
(1, 'ORD-20260227-8B924B', 1, 'App\\Models\\OnlineClass', 1, NULL, 0.00, 0.00, 0.00, 'paid', 'free', NULL, NULL, 'ORD-20260227-8B924B', NULL, NULL, '{\"payment_type\":\"free\"}', '2026-02-27 10:00:13', NULL, NULL, '2026-02-27 10:00:13', '2026-02-27 10:00:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `slug`, `description`, `created_at`, `updated_at`) VALUES
(1, 'View Users', 'users.view', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(2, 'Create Users', 'users.create', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(3, 'Edit Users', 'users.edit', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(4, 'Delete Users', 'users.delete', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(5, 'View Clients', 'clients.view', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(6, 'Create Clients', 'clients.create', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(7, 'Edit Clients', 'clients.edit', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(8, 'Delete Clients', 'clients.delete', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(9, 'View Articles', 'articles.view', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(10, 'Create Articles', 'articles.create', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(11, 'Edit Articles', 'articles.edit', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(12, 'Delete Articles', 'articles.delete', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(13, 'Publish Articles', 'articles.publish', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(14, 'View Portfolios', 'portfolios.view', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(15, 'Create Portfolios', 'portfolios.create', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(16, 'Edit Portfolios', 'portfolios.edit', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(17, 'Delete Portfolios', 'portfolios.delete', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(18, 'View Products', 'products.view', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(19, 'Create Products', 'products.create', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(20, 'Edit Products', 'products.edit', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(21, 'Delete Products', 'products.delete', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(22, 'View Courses', 'courses.view', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(23, 'Create Courses', 'courses.create', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(24, 'Edit Courses', 'courses.edit', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11'),
(25, 'Delete Courses', 'courses.delete', NULL, '2025-12-21 19:18:11', '2025-12-21 19:18:11');

-- --------------------------------------------------------

--
-- Struktur dari tabel `permission_role`
--

CREATE TABLE `permission_role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `permission_role`
--

INSERT INTO `permission_role` (`id`, `permission_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 2, 1, NULL, NULL),
(3, 3, 1, NULL, NULL),
(4, 4, 1, NULL, NULL),
(5, 5, 1, NULL, NULL),
(6, 6, 1, NULL, NULL),
(7, 7, 1, NULL, NULL),
(8, 8, 1, NULL, NULL),
(9, 9, 1, NULL, NULL),
(10, 10, 1, NULL, NULL),
(11, 11, 1, NULL, NULL),
(12, 12, 1, NULL, NULL),
(13, 13, 1, NULL, NULL),
(14, 14, 1, NULL, NULL),
(15, 15, 1, NULL, NULL),
(16, 16, 1, NULL, NULL),
(17, 17, 1, NULL, NULL),
(18, 18, 1, NULL, NULL),
(19, 19, 1, NULL, NULL),
(20, 20, 1, NULL, NULL),
(21, 21, 1, NULL, NULL),
(22, 22, 1, NULL, NULL),
(23, 23, 1, NULL, NULL),
(24, 24, 1, NULL, NULL),
(25, 25, 1, NULL, NULL),
(26, 1, 2, NULL, NULL),
(27, 5, 2, NULL, NULL),
(28, 6, 2, NULL, NULL),
(29, 7, 2, NULL, NULL),
(30, 8, 2, NULL, NULL),
(31, 9, 2, NULL, NULL),
(32, 10, 2, NULL, NULL),
(33, 11, 2, NULL, NULL),
(34, 12, 2, NULL, NULL),
(35, 13, 2, NULL, NULL),
(36, 14, 2, NULL, NULL),
(37, 15, 2, NULL, NULL),
(38, 16, 2, NULL, NULL),
(39, 17, 2, NULL, NULL),
(40, 18, 2, NULL, NULL),
(41, 19, 2, NULL, NULL),
(42, 20, 2, NULL, NULL),
(43, 21, 2, NULL, NULL),
(44, 22, 2, NULL, NULL),
(45, 23, 2, NULL, NULL),
(46, 24, 2, NULL, NULL),
(47, 25, 2, NULL, NULL),
(48, 10, 3, NULL, NULL),
(49, 11, 3, NULL, NULL),
(50, 9, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolios`
--

CREATE TABLE `portfolios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `demo_url` varchar(255) DEFAULT NULL,
  `repo_url` varchar(255) DEFAULT NULL,
  `technologies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`technologies`)),
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` enum('draft','published','archived') NOT NULL DEFAULT 'draft',
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `portfolios`
--

INSERT INTO `portfolios` (`id`, `client_id`, `title`, `slug`, `description`, `content`, `featured_image`, `demo_url`, `repo_url`, `technologies`, `start_date`, `end_date`, `status`, `is_featured`, `order`, `created_at`, `updated_at`) VALUES
(2, NULL, 'E-Commerce Platform', 'e-commerce-platform', 'Platform e-commerce dengan fitur keranjang, checkout, dan integrasi payment gateway.', '<p>Platform e-commerce dengan fitur keranjang, checkout, dan integrasi payment gateway.</p><p>Project ini dikembangkan dengan fokus pada clean code, performance, dan maintainability.</p>', 'portfolios/9wGI0lFhP5o3A4vnuDzfTPEIrdJtpnMeGTa6rY1V.png', NULL, NULL, '[\"Laravel\",\"Vue.js\",\"Bootstrap\",\"MySQL\"]', '2021-02-05', '2022-04-01', 'published', 1, 2, '2025-12-21 19:18:50', '2025-12-22 21:39:22'),
(7, 8, 'Sistem Manajemen Aset', 'sistem-manajemen-aset', 'Membuat sistem manajamen aset menggunakan Laravel 12, Bootstrap 5, dan MySQL.', 'Sistem Manajemen Aset berbasis Laravel untuk pencatatan aset fisik end-to-end: **registrasi aset + identifikasi (QR/RFID/NFC), movement, disposal + reverse, maintenance, audit/stocktake, approval workflow, laporan (Excel/PDF), changelog, dan pengaturan sistem berbasis database**.\r\n\r\nProject ini dibuat dengan fokus pada **best practice** dan **clean code**\r\n\r\n## Daftar Isi\r\n\r\n- [Fitur Utama](#fitur-utama)\r\n- [Arsitektur Singkat](#arsitektur-singkat)\r\n- [Kebutuhan Sistem](#kebutuhan-sistem)\r\n- [Quick Start (Local Development)](#quick-start-local-development)\r\n- [Setup Wizard (First Run)](#setup-wizard-first-run)\r\n- [Akun Default (Sample Data)](#akun-default-sample-data)\r\n- [RBAC (Role & Permission)](#rbac-role--permission)\r\n- [System Settings (Database-driven)](#system-settings-database-driven)\r\n- [Identifikasi Aset (QR/RFID/NFC)](#identifikasi-aset-qrrfidnfc)\r\n- [Transaksi Aset](#transaksi-aset)\r\n- [Approval Workflow](#approval-workflow)\r\n- [Authentication, 2FA, Session Timeout](#authentication-2fa-session-timeout)\r\n- [Audit Trail & Logging](#audit-trail--logging)\r\n- [Import/Export Aset](#importexport-aset)\r\n- [Laporan (Excel & PDF)](#laporan-excel--pdf)\r\n- [Landing Page & Public Asset View (QR Scan)](#landing-page--public-asset-view-qr-scan)\r\n- [Notifikasi Email (SMTP)](#notifikasi-email-smtp)\r\n- [Notifikasi Terjadwal (Command)](#notifikasi-terjadwal-command)\r\n- [Maintenance Mode (Read-only)](#maintenance-mode-read-only)\r\n- [Testing](#testing)\r\n- [Deployment Notes](#deployment-notes)\r\n- [Contributing](#contributing)\r\n- [Dokumentasi Lengkap](#dokumentasi-lengkap)\r\n\r\n## Fitur Utama\r\n\r\n**1) User Management + RBAC (Spatie Permission)**\r\n- Role & permission berbasis UUID\r\n- Pembatasan akses per modul melalui middleware `permission:*`\r\n\r\n**2) Master Data**\r\n- Status Aset, Kelas Aset, Unit, Departemen, Person in Charge, Pengguna Aset, Kategori, Lokasi, Warranty, Vendor Contract\r\n\r\n**3) Manajemen Aset**\r\n- Registrasi aset dengan kode otomatis\r\n- Foto/thumbnail aset (multi foto) tersimpan di storage\r\n- QR code otomatis menuju halaman publik detail aset (tanpa login)\r\n- RFID/NFC tag (opsional + bisa auto-generate via setting)\r\n- Arsip/retensi + soft delete + restore\r\n\r\n**4) Transaksi Aset**\r\n- Movement (mutasi lokasi/departemen/user)\r\n- Disposal + Reverse Disposal\r\n- Audit/Stocktake\r\n- Maintenance (planned/in_progress/completed + dukungan flow approval `pending`)\r\n\r\n**5) Approval Workflow**\r\n- Permintaan approval untuk movement/disposal/maintenance (pending/approved/rejected)\r\n- Halaman approvals untuk approver\r\n\r\n**6) Laporan**\r\n- Export Excel (multi sheet) + PDF untuk aset dan transaksi\r\n- Filter laporan (date range, lokasi, dsb.) sesuai halaman laporan\r\n\r\n**7) Landing & Dokumentasi**\r\n- Landing one-page untuk memperkenalkan sistem\r\n- Public asset view untuk QR scan: `GET /asset-view/{asset}`\r\n- Dokumentasi API internal app: `GET /api-docs`\r\n\r\n## Arsitektur Singkat\r\n\r\n- **Framework:** Laravel\r\n- **Template UI:** Vyzor (Bootstrap)\r\n- **Settings:** disimpan di tabel `settings` dan diakses melalui `App\\Services\\System\\SystemSettingService`\r\n- **Audit log:** file log khusus channel `asset_activity` (bukan database)\r\n- **UUID:** hampir seluruh tabel inti menggunakan UUID sebagai primary key\r\n\r\nFolder penting:\r\n- `app/Services/` → business logic (tanpa repository pattern)\r\n- `app/Http/Controllers/` → controller tipis, delegasi ke service\r\n- `database/seeders/` → sample data\r\n- `resources/views/` → Blade UI\r\n\r\n## Kebutuhan Sistem\r\n\r\n- PHP 8.2+ (sesuaikan dengan `composer.json`)\r\n- Composer\r\n- Node.js + NPM (Vite build)\r\n- Database: MySQL/MariaDB (production) / SQLite (testing)\r\n- (Opsional) Laragon untuk dev di Windows', 'portfolios/viPirrpuCgcImrKqbKpSnVnrno5R7ZZYD4P11OAS.png', NULL, NULL, '[\"Laravel\",\"Bootstrap5\",\"MySQL\",\"VanillaJS\"]', '2024-09-01', '2024-11-12', 'published', 1, 0, '2025-12-22 21:27:22', '2025-12-22 21:28:19'),
(8, NULL, 'Website Doctor Appointment', 'website-doctor-appointment', 'Membuat Website Untuk Melakukan Pemesanan Jadwal Konsultasi Dokter', 'Membuat sebuah website untuk melakukan penjadwalan konsultasi dokter berdasarkan tanggal dan waktu.', 'portfolios/q8s6wzpK00KzMnoIRzjFxwR46ByzDdWGKNjXa06e.png', NULL, NULL, '[\"Laravel\",\"jQuery\",\"Boostrap\",\"MySQL\"]', '2023-01-24', '2023-03-10', 'published', 0, 0, '2025-12-22 21:36:40', '2025-12-22 21:36:40'),
(9, 11, 'Sistem E-Restitusi', 'sistem-e-restitusi', 'Sistem Informasi Manajemen Restitusi Lembaga Perlindungan Saksi dan Korban', 'Membuat sebuah sistem informasi yang digunakan oleh Tim Ahli LPSK dalam mengelola Restitusi bagi para korban', 'portfolios/JXDiAY6YR5sHXTKtHnPTetpunWIhipLSQRrCehGr.png', NULL, NULL, '[\"Laravel\",\"TailwindCSS\",\"MySQL\",\"VanillaJS\",\"jQuery\"]', '2025-07-01', '2025-12-20', 'published', 1, 0, '2025-12-22 21:44:57', '2025-12-22 21:45:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolio_galleries`
--

CREATE TABLE `portfolio_galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `portfolio_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `portfolio_galleries`
--

INSERT INTO `portfolio_galleries` (`id`, `portfolio_id`, `image`, `caption`, `order`, `created_at`, `updated_at`) VALUES
(1, 7, 'portfolios/gallery/EvIcBQBg0PFHi0X7ZheMUtYetHaVRL9487pX4Qbv.png', NULL, 0, '2025-12-22 21:27:22', '2025-12-22 21:27:22'),
(2, 7, 'portfolios/gallery/rQD8fcMPNvEZNBS13ZgBL2SXL9bVhyu3dJC5h0gl.png', NULL, 1, '2025-12-22 21:27:22', '2025-12-22 21:27:22'),
(3, 7, 'portfolios/gallery/NVRPHyTzenqmCqoQ5yNEq9rgIP2RDGJX9cIHFpYc.png', NULL, 2, '2025-12-22 21:27:22', '2025-12-22 21:27:22'),
(4, 7, 'portfolios/gallery/nRjNXVAUhWPdxBfRWFAOeJGrSZsJuj8gf38WqDxk.png', NULL, 3, '2025-12-22 21:27:22', '2025-12-22 21:27:22'),
(5, 7, 'portfolios/gallery/wDvnKiA8T99LURgU4bKoMk80vVvp97WUoOpFFeI9.png', NULL, 4, '2025-12-22 21:27:22', '2025-12-22 21:27:22'),
(6, 7, 'portfolios/gallery/JuFxDPLKmryy72mOIgL11H5aGLoj0xICrelO7opA.png', NULL, 5, '2025-12-22 21:27:22', '2025-12-22 21:27:22'),
(7, 8, 'portfolios/gallery/2QcHfdvLwCV0sr3JK9HIxmScjOdEru84ZlA3qnGQ.png', NULL, 0, '2025-12-22 21:36:40', '2025-12-22 21:36:40'),
(8, 8, 'portfolios/gallery/YwgDBWMOnDyOCEABLcmfXvU6Rd02f4sdJmXkHMDw.png', NULL, 1, '2025-12-22 21:36:40', '2025-12-22 21:36:40'),
(9, 8, 'portfolios/gallery/88I6mSruPTIwyXBFZVPHjGFEnfFr9uX5ZS5Nrk8T.png', NULL, 2, '2025-12-22 21:36:40', '2025-12-22 21:36:40'),
(10, 8, 'portfolios/gallery/98MJtOgfTCxCLtIj5H6nRemwLUmtqvdwTn7A2Hqy.png', NULL, 3, '2025-12-22 21:36:40', '2025-12-22 21:36:40'),
(11, 8, 'portfolios/gallery/MmEhBCFx2eSqpcv8hJsYfNbij2lc84SmJUDuW4JL.png', NULL, 4, '2025-12-22 21:36:40', '2025-12-22 21:36:40'),
(12, 2, 'portfolios/gallery/kAYFtXIy59fZOVCPRC9b3dBWMIYKJE5NULF2wdD6.png', NULL, 0, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(13, 2, 'portfolios/gallery/ln9caTGx3hCjWkv9uPndBPcLauykGZ4dzzBm1n4u.png', NULL, 1, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(14, 2, 'portfolios/gallery/Ibyd5XIfs8eW9NUdduy3A12MzK0uUOlzAuvJ73eW.png', NULL, 2, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(15, 2, 'portfolios/gallery/R5pLjJsuQ1JHesRcJmaDhuz4ixEJMBaKvu1O2ff2.png', NULL, 3, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(16, 2, 'portfolios/gallery/BzdMFjx0d3x6wbIcIaLmUWV52ba8gxhgTJJg3Kl5.png', NULL, 4, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(17, 2, 'portfolios/gallery/p7AXtaxsB8qxAKmzsB2xrcrympwG8IdYT4OVQSVM.png', NULL, 5, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(18, 2, 'portfolios/gallery/5EkLXjRzc8vRSVLaJ3CZgCKa8c0ZZxM5hZXAAp2M.png', NULL, 6, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(19, 2, 'portfolios/gallery/zlIUl5234rCUv4W9AvWDBej9TVQ2ZwtfRlG5rNdA.png', NULL, 7, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(20, 2, 'portfolios/gallery/vfeMc478Rs0VjHrRB9U1agwJFVCTz4bUXkhOy5SE.png', NULL, 8, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(21, 2, 'portfolios/gallery/LMOasFj0SD63B1G1uTK8A0zAi9fghTXQW2fVk17s.png', NULL, 9, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(22, 2, 'portfolios/gallery/Alyrs62Dhm3MdmiGCnp7sPOqQBUHELQw4fizKmDM.png', NULL, 10, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(23, 2, 'portfolios/gallery/C638HELRg3LjR0Gq7jDXpwLmORukotZecFCmNXs5.png', NULL, 11, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(24, 2, 'portfolios/gallery/tWwl2i1Djy2elH4A4dJR7p8x5BdWKZ9FwdSCYeFh.png', NULL, 12, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(25, 2, 'portfolios/gallery/eEasYfyyZdoBE3s6MwjbeUO7T5LSLFfoUfEZ3cDn.png', NULL, 13, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(26, 2, 'portfolios/gallery/PP1uALb6VN9RMERvtP6RJSJoFUDa8T2XXDtO9ZoP.png', NULL, 14, '2025-12-22 21:39:22', '2025-12-22 21:39:22'),
(27, 9, 'portfolios/gallery/lnUOsk1kAmYiorGebxowjTz2FtXkP3PaXkLK9KyX.png', NULL, 0, '2025-12-22 21:44:57', '2025-12-22 21:44:57'),
(28, 9, 'portfolios/gallery/uXKZChDBIrgT4v14tSK6KC4rK8j5HiWcXN1LUDM6.png', NULL, 1, '2025-12-22 21:44:57', '2025-12-22 21:44:57'),
(29, 9, 'portfolios/gallery/odrE2IPecXqzxXmIEjVyPydtdg9COSotOORIZuIs.png', NULL, 2, '2025-12-22 21:44:57', '2025-12-22 21:44:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolio_tag`
--

CREATE TABLE `portfolio_tag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `portfolio_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
