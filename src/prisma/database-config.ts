import { existsSync } from 'node:fs';

type Nullable<T> = T | null | undefined;

export interface ResolvedDatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionLimit: number;
  source: string;
  warnings: string[];
}

function readFirstDefined(...values: Array<Nullable<string>>): string | undefined {
  for (const raw of values) {
    if (typeof raw !== 'string') continue;
    const trimmed = raw.trim();
    if (trimmed.length > 0) return trimmed;
  }
  return undefined;
}

function toPositiveInt(value?: string, fallback?: number): number {
  if (!value) return fallback ?? 0;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback ?? 0;
  return parsed;
}

function parseDatabaseUrl(url?: string): {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
} {
  if (!url) return {};

  try {
    const parsed = new URL(url);
    const dbName = parsed.pathname.replace(/^\//, '');

    return {
      host: parsed.hostname || undefined,
      port: toPositiveInt(parsed.port, 3306),
      user: parsed.username || undefined,
      password: parsed.password || undefined,
      database: dbName || undefined,
    };
  } catch (error) {
    throw new Error(
      `Invalid DATABASE_URL format. Expected mysql://user:password@host:3306/database. ${String(error)}`,
    );
  }
}

export function resolveDatabaseConfig(env: NodeJS.ProcessEnv): ResolvedDatabaseConfig {
  const warnings: string[] = [];
  const parsed = parseDatabaseUrl(env.DATABASE_URL);
  const isRunningInDocker = existsSync('/.dockerenv');

  let host = readFirstDefined(env.DATABASE_HOST_OVERRIDE, env.DB_HOST, parsed.host);
  const internalAliases = new Set(['db', 'mysql', 'mariadb']);

  if (!host) {
    host = '127.0.0.1';
    warnings.push('No DB host provided; defaulting to 127.0.0.1');
  }

  if (!isRunningInDocker && !env.DATABASE_HOST_OVERRIDE && internalAliases.has(host)) {
    host = '127.0.0.1';
    warnings.push(
      'DB host looked like an internal container alias; falling back to 127.0.0.1 because the app is not running in Docker',
    );
  }

  const portCandidate = readFirstDefined(
    env.DB_PORT,
    parsed.port?.toString(),
    !isRunningInDocker ? env.DB_HOST_PORT : undefined,
  );
  const port = toPositiveInt(portCandidate, 3306);
  const user = readFirstDefined(env.DB_USER, env.DB_USERNAME, parsed.user);
  const password = readFirstDefined(env.DB_PASSWORD, parsed.password);
  const database = readFirstDefined(env.DB_NAME, env.DB_DATABASE, parsed.database);
  const connectionLimit = toPositiveInt(env.DB_CONNECTION_LIMIT, 15);

  const missing: string[] = [];
  if (!user) missing.push('DB_USER or DB_USERNAME');
  if (!password) missing.push('DB_PASSWORD');
  if (!database) missing.push('DB_NAME or DB_DATABASE');

  if (missing.length > 0) {
    throw new Error(
      `Missing database configuration: ${missing.join(', ')}. Provide DATABASE_URL or individual DB_* variables.`,
    );
  }

  return {
    host,
    port,
    user,
    password,
    database,
    connectionLimit,
    source: env.DATABASE_URL ? 'DATABASE_URL+overrides' : 'DB_* variables',
    warnings,
  };
}

export function formatDatabaseTarget(config: ResolvedDatabaseConfig): string {
  return `${config.host}:${config.port}/${config.database}`;
}
