# Deploy aryadwip.com — VPS + Bun + Nginx (tanpa Docker)

Setup produksi: aplikasi React Router dijalankan **Bun** (`bun run start`, port 3000)
sebagai systemd service, dan **Nginx** sebagai reverse proxy + TLS.

## 1. Install Bun di VPS

```bash
curl -fsSL https://bun.sh/install | bash
# pastikan ada di PATH (tutup & buka shell, atau:)
export PATH="$HOME/.bun/bin:$PATH"
bun --version
```

Jika `bun` tidak ada di `/usr/bin/bun` (yang dipakai systemd unit), buat symlink:

```bash
sudo ln -s "$HOME/.bun/bin/bun" /usr/bin/bun
```

## 2. Taruh kode aplikasi

```bash
sudo mkdir -p /var/www/aryadwip.com
sudo chown -R "$USER":"$USER" /var/www/aryadwip.com
cd /var/www/aryadwip.com
git clone git@github.com:aryadwiputra/aryadwip.com.git .
bun install --frozen-lockfile
bun run build
```

## 3. Systemd service (auto-start & auto-restart)

```bash
sudo cp deploy/aryadwip.service /etc/systemd/system/aryadwip.service
sudo chown -R www-data:www-data /var/www/aryadwip.com   # biar bisa dibaca service
sudo systemctl daemon-reload
sudo systemctl enable --now aryadwip
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3000   # harapnya 200
```

## 4. Nginx reverse proxy + HTTPS

```bash
sudo cp deploy/nginx-aryadwip.conf /etc/nginx/sites-available/aryadwip.com
sudo ln -s /etc/nginx/sites-available/aryadwip.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Buat sertifikat SSL (Let's Encrypt):

```bash
sudo certbot --nginx -d aryadwip.com -d www.aryadwip.com
```

## 5. Update berikutnya

```bash
bash deploy/deploy.sh   # git pull + bun install + build + restart service
```

HTML selalu dikirim tanpa cache (`Cache-Control: no-cache, no-store, must-revalidate`)
jadi setelah deploy, browser **tidak akan** lagi memegang halaman lama yang merujuk
asset hash yang sudah tidak ada (penyebab 404 `root-*.css` / `*.js` kemarin).
File `/assets/*` tetap di-cache immutable (aman, karena nama file mengandung hash).

## Verifikasi

```bash
curl -sI https://www.aryadwip.com/ | grep -i cache-control   # no-store
curl -sI https://www.aryadwip.com/assets/<nama>.js | grep -i cache-control  # immutable
```
