// src/prisma/prisma-adapter.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

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
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    // Parse DATABASE_URL and create adapter (must be BEFORE super)
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error('DATABASE_URL environment variable is required');
    }

    const parsed = new URL(url);
    const adapter = new PrismaMariaDb({
      host: parsed.hostname,
      port: parseInt(parsed.port || '3306'),
      user: parsed.username,
      password: parsed.password,
      database: parsed.pathname.slice(1),
      connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '15'),
      // Optional but recommended for shared hosting
      acquireTimeout: 60000,
      idleTimeout: 30000,
    });

    // Pass adapter to PrismaClient (Prisma 7 requirement)
    super({ adapter });

    this.logger.log('✅ Prisma MariaDB adapter initialized');
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('🚀 Prisma client connected via MariaDB adapter');
      this.logger.log(`📊 Pool size: ${process.env.DB_CONNECTION_LIMIT || '15'} connections`);
    } catch (error) {
      this.logger.error('❌ Failed to connect Prisma client', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('👋 Prisma client disconnected');
    } catch (error) {
      this.logger.error('Error during disconnect', error);
    }
  }
}