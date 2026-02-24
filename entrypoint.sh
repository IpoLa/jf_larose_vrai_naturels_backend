#!/bin/sh
set -e

echo "🚀 Starting Les Vrais Naturels Backend..."

# ── Verify DATABASE_URL ───────────────────────────────────────────────────────
if [ -z "$DATABASE_URL" ]; then
  echo "❌ ERROR: DATABASE_URL is not set!"
  exit 1
fi
echo "✅ DATABASE_URL is set"

# ── Extract host and port from DATABASE_URL ───────────────────────────────────
# Format: mysql://user:pass@host:port/dbname
DB_HOST=$(echo "$DATABASE_URL" | sed 's/.*@\([^:]*\):.*/\1/')
DB_PORT=$(echo "$DATABASE_URL" | sed 's/.*:\([0-9]*\)\/.*/\1/')

echo "⏳ Waiting for MySQL at $DB_HOST:$DB_PORT..."

max_attempts=40
attempt=1
while [ $attempt -le $max_attempts ]; do
  if nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; then
    echo "✅ MySQL port is open!"
    break
  fi
  echo "   [$attempt/$max_attempts] MySQL not ready, waiting 3s..."
  sleep 3
  attempt=$((attempt + 1))
done

if [ $attempt -gt $max_attempts ]; then
  echo "❌ MySQL not reachable after $max_attempts attempts"
  exit 1
fi

# Extra buffer for MySQL to finish init
sleep 5

# ── Prisma Migrate ────────────────────────────────────────────────────────────
echo "📦 Running Prisma migrations..."
attempt=1
while [ $attempt -le 5 ]; do
  if npx prisma migrate deploy; then
    echo "✅ Migrations done"
    break
  fi
  echo "⚠️ Migration attempt $attempt failed, retrying in 5s..."
  sleep 5
  attempt=$((attempt + 1))
done

# ── Seed ──────────────────────────────────────────────────────────────────────
if [ "$SEED_ON_START" = "true" ]; then
  echo "🌱 Running seed..."
  sleep 2
  if node dist/prisma/seed.js; then
    echo "✅ Seed done"
  else
    echo "⚠️ Seed failed (non-critical, continuing...)"
  fi
fi

# ── Start App ─────────────────────────────────────────────────────────────────
echo "🎯 Starting NestJS..."
exec node dist/main.js