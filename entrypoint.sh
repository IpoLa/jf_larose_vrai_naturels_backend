#!/bin/sh
set -e

echo "🚀 Starting Les Vrais Naturels Backend..."

if [ -z "$DATABASE_URL" ]; then
  echo "❌ ERROR: DATABASE_URL not set"
  exit 1
fi
echo "✅ DATABASE_URL: $DATABASE_URL"

# Parse host and port
DB_HOST=$(echo "$DATABASE_URL" | sed 's|.*@\([^:]*\):.*|\1|')
DB_PORT=$(echo "$DATABASE_URL" | sed 's|.*:\([0-9]*\)/.*|\1|')
echo "⏳ Waiting for MySQL at $DB_HOST:$DB_PORT..."

attempt=1
while [ $attempt -le 40 ]; do
  if nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; then
    echo "✅ MySQL is reachable!"
    break
  fi
  echo "   [$attempt/40] Not ready yet, waiting 3s..."
  sleep 3
  attempt=$((attempt + 1))
done

if [ $attempt -gt 40 ]; then
  echo "❌ MySQL never became reachable"
  exit 1
fi

# Extra buffer for MySQL init
echo "⏳ Giving MySQL 5s extra to finish init..."
sleep 5

# ── Prisma Migrate ────────────────────────────────────────────────────────────
echo "📦 Running prisma migrate deploy..."
m_attempt=1
while [ $m_attempt -le 5 ]; do
  if npx prisma migrate deploy 2>&1; then
    echo "✅ Migrations applied"
    break
  fi
  echo "⚠️  Migration attempt $m_attempt/5 failed, retrying in 5s..."
  sleep 5
  m_attempt=$((m_attempt + 1))
done

# ── Seed ──────────────────────────────────────────────────────────────────────
if [ "$SEED_ON_START" = "true" ]; then
  echo "🌱 Running seed (node dist/prisma/seed.js)..."
  sleep 2
  if node dist/prisma/seed.js 2>&1; then
    echo "✅ Seed completed"
  else
    echo "⚠️  Seed failed (non-critical, app will still start)"
  fi
fi

# ── Start NestJS ──────────────────────────────────────────────────────────────
echo "🎯 Starting NestJS app..."
exec node dist/main.js