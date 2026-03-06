import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { formatDatabaseTarget, resolveDatabaseConfig } from './database-config';

/**
 * Prisma Service using official MariaDB Driver Adapter (Prisma 7+)
 *
 * This is the recommended approach for cPanel shared hosting:
 * - Uses pure JS mariadb driver → no heavy Prisma query engine WASM at runtime
 * - Tiny memory footprint
 * - Works with your existing DATABASE_URL
 * - No more "WebAssembly.Instance(): Out of memory" on shared LVE limits
 */
@Injectable()
export class PrismaAdapterService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaAdapterService.name);

  constructor() {
    const config = resolveDatabaseConfig(process.env);
    const adapter = new PrismaMariaDb({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      connectionLimit: config.connectionLimit,
      // Optional but recommended for shared hosting
      acquireTimeout: 60000,
      idleTimeout: 30000,
    });

    // Pass adapter to PrismaClient (Prisma 7 requirement)
    super({ adapter });

    this.logger.log(
      `Prisma MariaDB adapter initialized (${config.source}) -> ${formatDatabaseTarget(config)}`,
    );
    for (const warning of config.warnings) {
      this.logger.warn(warning);
    }
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Prisma client connected via MariaDB adapter');
      this.logger.log(`Pool size: ${process.env.DB_CONNECTION_LIMIT || '15'} connections`);
    } catch (error) {
      this.logger.error('Failed to connect Prisma client', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('Prisma client disconnected');
    } catch (error) {
      this.logger.error('Error during disconnect', error);
    }
  }
}
