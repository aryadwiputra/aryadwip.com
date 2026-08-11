#!/usr/bin/env bash
# Deploy aryadwip.com ke VPS (Bun + Nginx, tanpa Docker).
#
# Pemakaian:
#   bash deploy/deploy.sh            # dari direktori repo di VPS
#
# atau atur variabel:
#   APP_DIR=/var/www/aryadwip.com SERVICE=aryadwip bash deploy/deploy.sh

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/aryadwip.com}"
SERVICE="${SERVICE:-aryadwip}"

echo "==> 1/4 Update kode (git pull)"
cd "$APP_DIR"
git pull --ff-only origin master

echo "==> 2/4 Install dependencies (frozen lockfile)"
bun install --frozen-lockfile

echo "==> 3/4 Build production"
bun run build

echo "==> 4/4 Restart service"
sudo systemctl restart "$SERVICE"

echo "==> Selesai. Status service:"
systemctl status "$SERVICE" --no-pager | head -12
