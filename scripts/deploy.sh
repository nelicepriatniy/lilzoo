#!/usr/bin/env bash
# На сервере из каталога приложения (например /var/www/lilzoo):
#   chmod +x scripts/deploy.sh && ./scripts/deploy.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export NODE_ENV=production

git pull origin main
npm ci
npm run build

# Первый запуск: pm2 start … | обновления: pm2 restart …
if pm2 describe lilzoo >/dev/null 2>&1; then
  pm2 restart lilzoo
else
  pm2 start npm --name lilzoo -- run start
fi

pm2 save
