# aryadwip.com

Monorepo untuk website portfolio `aryadwip.com`.

## Struktur Project

- `frontend/` — Next.js App Router untuk website publik
- `backend/` — Laravel untuk REST API dan dashboard admin
- `html/` — sumber slicing HTML statis / referensi desain awal
- `.agents/` — skill dan panduan kerja agent lokal

## Stack

- Frontend: Next.js 16, React 19, Tailwind CSS 4
- Backend: Laravel 13, PHP 8.3, Vite, Tailwind CSS 4

## Menjalankan Project

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App berjalan di `http://localhost:3000`.

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm install
composer run dev
```

API dan dashboard admin mengikuti host Laravel lokal yang aktif.

## Workflow Development

- Desain awal dan slicing ada di `html/`
- Implementasi Next.js publik ada di `frontend/`
- REST API dan admin panel akan dikembangkan di `backend/`

## GitHub Actions

Project ini memiliki workflow di `.github/workflows/`:

- `ci.yml` untuk validasi frontend dan backend
- `deploy.yml` untuk deploy dasar via SSH ke server

## Kebutuhan Secret Deploy

Jika memakai workflow deploy, siapkan secret berikut di GitHub repository:

- `SSH_HOST`
- `SSH_PORT`
- `SSH_USERNAME`
- `SSH_PRIVATE_KEY`
- `FRONTEND_PATH`
- `BACKEND_PATH`

Opsional:

- `SSH_KNOWN_HOSTS`

Workflow deploy mengasumsikan:

- `frontend/` di-deploy sebagai app Next.js mandiri di server
- `backend/` di-deploy sebagai app Laravel pada server yang sama atau terpisah
- Dependensi `node`, `npm`, `php`, `composer`, dan proses manager seperti `pm2` / `systemd` sudah tersedia di server
