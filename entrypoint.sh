#!/bin/sh
set -e

echo "Starting Les Vrais Naturels Backend..."

if [ -z "$DATABASE_URL" ] && [ -z "$DB_HOST" ] && [ -z "$DATABASE_HOST_OVERRIDE" ]; then
  echo "ERROR: set DATABASE_URL or DB_HOST/DATABASE_HOST_OVERRIDE"
  exit 1
fi

DB_RESOLVE="$(node -e "
try {
  const env = process.env;
  let parsed = {};
  if (env.DATABASE_URL) {
    const parsedUrl = new URL(env.DATABASE_URL);
    parsed = { host: parsedUrl.hostname, port: parsedUrl.port };
  }
  const inDocker = require('node:fs').existsSync('/.dockerenv');
  const internalAliases = new Set(['db', 'mysql', 'mariadb']);
  let host = (env.DATABASE_HOST_OVERRIDE || env.DB_HOST || parsed.host || '127.0.0.1').trim();
  if (!inDocker && !env.DATABASE_HOST_OVERRIDE && internalAliases.has(host)) {
    host = '127.0.0.1';
  }
  const port = Number.parseInt(env.DB_PORT || parsed.port || (!inDocker ? env.DB_HOST_PORT : '') || '3306', 10) || 3306;
  process.stdout.write(host + ':' + port);
} catch (error) {
  process.stderr.write('Failed to parse database settings: ' + String(error) + '\n');
  process.exit(1);
}
")"

DB_HOST="$(echo "$DB_RESOLVE" | cut -d: -f1)"
DB_PORT="$(echo "$DB_RESOLVE" | cut -d: -f2)"
echo "Waiting for MySQL at $DB_HOST:$DB_PORT..."

attempt=1
while [ $attempt -le 40 ]; do
  if nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; then
    echo "MySQL is reachable"
    break
  fi
  echo "[$attempt/40] Not ready yet, waiting 3s..."
  sleep 3
  attempt=$((attempt + 1))
done

if [ $attempt -gt 40 ]; then
  echo "MySQL never became reachable"
  exit 1
fi

# Extra buffer for MySQL init
echo "Giving MySQL 5s extra to finish init..."
sleep 5

# ── Prisma Migrate ────────────────────────────────────────────────────────────
echo "Running prisma migrate deploy..."
m_attempt=1
while [ $m_attempt -le 5 ]; do
  if npx prisma migrate deploy 2>&1; then
    echo "Migrations applied"
    break
  fi
  echo "Migration attempt $m_attempt/5 failed, retrying in 5s..."
  sleep 5
  m_attempt=$((m_attempt + 1))
done

# ── Seed ──────────────────────────────────────────────────────────────────────
if [ "$SEED_ON_START" = "true" ]; then
  echo "Running seed (node dist/prisma/seed.js)..."
  sleep 2
  if node dist/prisma/seed.js 2>&1; then
    echo "Seed completed"
  else
    echo "Seed failed (non-critical, app will still start)"
  fi
fi

# ── Start NestJS ──────────────────────────────────────────────────────────────
echo "Starting NestJS app..."
exec node dist/main.js
