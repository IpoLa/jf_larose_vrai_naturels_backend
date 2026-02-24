#!/bin/bash
set -e

echo "🚀 Starting Les Vrais Naturels Backend..."

# ── Verify DATABASE_URL ───────────────────────────────────────────────────────
if [ -z "$DATABASE_URL" ]; then
  echo "❌ ERROR: DATABASE_URL is not set!"
  exit 1
fi
echo "✅ DATABASE_URL configured"

# ── Extract DB connection info ────────────────────────────────────────────────
DB_HOST=$(echo "$DATABASE_URL" | sed -n 's/.*@\([^:]*\).*/\1/p')
DB_PORT=$(echo "$DATABASE_URL" | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

echo "⏳ Waiting for MySQL at $DB_HOST:$DB_PORT..."

max_attempts=40
attempt=1
while [ $attempt -le $max_attempts ]; do
  if nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; then
    echo "✅ MySQL is reachable!"
    break
  fi
  echo "   attempt $attempt/$max_attempts - MySQL not ready yet..."
  sleep 3
  attempt=$((attempt + 1))
done

if [ $attempt -gt $max_attempts ]; then
  echo "❌ MySQL failed to become ready after $max_attempts attempts"
  exit 1
fi

# Extra wait for MySQL to finish initializing after port is open
sleep 3

# ── Run Migrations ────────────────────────────────────────────────────────────
echo "📦 Running Prisma migrations..."
max_migration_attempts=5
migration_attempt=1

while [ $migration_attempt -le $max_migration_attempts ]; do
  if npx prisma migrate deploy 2>&1; then
    echo "✅ Migrations completed successfully"
    break
  else
    if [ $migration_attempt -lt $max_migration_attempts ]; then
      echo "⚠️ Migration attempt $migration_attempt failed, retrying in 5s..."
      sleep 5
      migration_attempt=$((migration_attempt + 1))
    else
      echo "⚠️ Migrations failed after $max_migration_attempts attempts (continuing anyway)"
      migration_attempt=$((migration_attempt + 1))
    fi
  fi
done

# ── Run Seed ──────────────────────────────────────────────────────────────────
echo "🌱 Running database seed..."
sleep 2

if node dist/prisma/seed.js 2>&1; then
  echo "✅ Seeding completed successfully"
else
  echo "⚠️ Seeding failed (non-critical, continuing anyway)"
fi

# ── Start Application ─────────────────────────────────────────────────────────
echo "🎯 Starting NestJS application..."
exec node dist/main.js