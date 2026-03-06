import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { existsSync } from 'node:fs';

function firstDefined(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    if (!value) continue;
    const trimmed = value.trim();
    if (trimmed.length > 0) return trimmed;
  }
  return undefined;
}

function buildDatasourceUrl(): string {
  const fromEnv = firstDefined(process.env.DATABASE_URL);
  if (fromEnv) return fromEnv;

  const isRunningInDocker = existsSync('/.dockerenv');
  const internalAliases = new Set(['db', 'mysql', 'mariadb']);

  let host = firstDefined(process.env.DATABASE_HOST_OVERRIDE, process.env.DB_HOST) ?? '127.0.0.1';
  if (!isRunningInDocker && !process.env.DATABASE_HOST_OVERRIDE && internalAliases.has(host)) {
    host = '127.0.0.1';
  }

  const port = firstDefined(process.env.DB_PORT, !isRunningInDocker ? process.env.DB_HOST_PORT : undefined) ?? '3306';
  const user = firstDefined(process.env.DB_USER, process.env.DB_USERNAME);
  const password = firstDefined(process.env.DB_PASSWORD);
  const database = firstDefined(process.env.DB_NAME, process.env.DB_DATABASE);

  const missing: string[] = [];
  if (!user) missing.push('DB_USER or DB_USERNAME');
  if (!password) missing.push('DB_PASSWORD');
  if (!database) missing.push('DB_NAME or DB_DATABASE');

  if (missing.length > 0) {
    throw new Error(
      `Missing database config for Prisma CLI: ${missing.join(', ')}. Set DATABASE_URL or DB_* variables.`,
    );
  }

  return `mysql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${database}`;
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'node dist/prisma/seed.js',
  },
  datasource: {
    url: buildDatasourceUrl(),
  },
});
