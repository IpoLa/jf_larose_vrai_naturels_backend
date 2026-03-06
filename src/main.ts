import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

function normalizeOrigin(origin: string): string {
    try {
        const parsed = new URL(origin);
        const host = parsed.hostname.toLowerCase();
        return `${parsed.protocol}//${host}${parsed.port ? `:${parsed.port}` : ''}`.replace(/\/+$/, '');
    } catch {
        return origin.trim().toLowerCase().replace(/\/+$/, '');
    }
}

function withLocalhostVariants(origin: string): string[] {
    try {
        const parsed = new URL(origin);
        if (parsed.hostname === 'localhost') {
            return [origin, `${parsed.protocol}//127.0.0.1${parsed.port ? `:${parsed.port}` : ''}`];
        }
        if (parsed.hostname === '127.0.0.1') {
            return [origin, `${parsed.protocol}//localhost${parsed.port ? `:${parsed.port}` : ''}`];
        }
        return [origin];
    } catch {
        return [origin];
    }
}

function parseOrigins(raw?: string): string[] {
    if (!raw) return [];
    return raw
        .split(/[,\n;]/)
        .map((origin) => origin.trim())
        .map((origin) => origin.replace(/^['"]+|['"]+$/g, ''))
        .filter(Boolean);
}

function buildAllowedOrigins(): string[] {
    const defaults = [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://192.168.1.6:3000',
        'http://192.168.1.4:3000',
        'http://192.168.1.4:8081',
        'https://jflarose-client.sensinglabo.com',
        'https://jflarose-backoffice.sensinglabo.com',
        'https://vrainaturel.jf-larose.com',
        'https://vrainaturel-backoffice.jf-larose.com',
        'https://vrainaturel-api.sadeempro.xyz',
    ];

    const configured = parseOrigins(process.env.ALLOWED_ORIGINS);
    const baseOrigins = configured.length > 0 ? configured : defaults;

    const augmented = [
        ...baseOrigins,
        process.env.CLIENT_BASE_URL ?? '',
        process.env.ADMIN_BASE_URL ?? '',
    ].filter(Boolean);

    return Array.from(
        new Set(
            augmented
                .flatMap((origin) => withLocalhostVariants(origin))
                .map((origin) => normalizeOrigin(origin)),
        ),
    );
}

function resolvePort(): number {
    const parsed = Number.parseInt(process.env.PORT ?? '', 10);
    if (Number.isFinite(parsed) && parsed > 0) {
        return parsed;
    }
    return 3000;
}

async function bootstrap() {
    const bootstrapLogger = new Logger('Bootstrap');
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });

    app.useLogger(new Logger());
    app.use(cookieParser());

    // ── CORS ──────────────────────────────────────────────────────────────────
    const allowedOrigins = buildAllowedOrigins();
    const allowedOriginsSet = new Set(allowedOrigins);
    const corsAllowAll = process.env.CORS_ALLOW_ALL === 'true';
    const blockedOriginsSeen = new Set<string>();

    app.enableCors({
        origin: (origin, callback) => {
            // Allow requests with no origin (mobile apps, curl, Postman)
            if (!origin) return callback(null, true);
            if (corsAllowAll) return callback(null, true);
            const normalizedOrigin = normalizeOrigin(origin);
            if (allowedOriginsSet.has(normalizedOrigin)) return callback(null, true);

            // Soft deny: do not throw app-level errors for blocked browser origins.
            if (!blockedOriginsSeen.has(normalizedOrigin)) {
                blockedOriginsSeen.add(normalizedOrigin);
                bootstrapLogger.warn(`CORS blocked origin: ${origin}`);
            }
            callback(null, false);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-card-number', 'Accept'],
    });

    app.getHttpAdapter().getInstance().set('trust proxy', 1);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
        }),
    );

    app.setGlobalPrefix('api');

    // ── Swagger ───────────────────────────────────────────────────────────────
    const isProduction = process.env.NODE_ENV === 'production';

    const config = new DocumentBuilder()
        .setTitle('Les Vrais Naturels - API JF Larose')
        .setDescription(
            `Documentation complète de l'API pour la plateforme de fidélité vendeurs pharmacie.

## Authentification
- **Admin**: JWT via \`POST /api/admin/auth/login\`
- **Vendeur**: Numéro de carte unique via header \`x-card-number\`

## Périodes
- **15 jours**: Calcul de commission basé sur la date d'action du vendeur
- **Mensuel**: Bonus d'accélération de performance
`,
        )
        .setVersion('1.0')
        .addServer(
            isProduction
                ? 'https://vrainaturel-api.sadeempro.xyz'
                : 'http://localhost:3001',
        )
        .addBearerAuth(
            { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
            'JWT-Admin',
        )
        .addApiKey(
            { type: 'apiKey', in: 'header', name: 'x-card-number' },
            'Card-Number',
        )
        .addTag('Admin - Authentification', 'Connexion administrateur')
        .addTag('Admin - Produits', 'Gestion dynamique de la gamme produits')
        .addTag('Admin - Vendeurs', 'Gestion des vendeurs')
        .addTag('Admin - Pharmacies', 'Gestion des pharmacies')
        .addTag('Admin - Paiements', 'Gestion des paiements et commissions')
        .addTag('Admin - Commissions', 'Règles de commission dynamiques')
        .addTag('Admin - QR Codes', 'Génération et gestion des QR codes')
        .addTag('Admin - Tableau de bord', 'Statistiques et classements')
        .addTag('Client - Authentification', 'Vérification vendeur')
        .addTag('Client - Profil', 'Profil du vendeur')
        .addTag('Client - Ventes', 'Enregistrement et historique des ventes')
        .addTag('Client - Tableau de bord', 'Scores et statistiques du vendeur')
        .addTag('Règles', 'Règles et conditions des offres')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document, {
        useGlobalPrefix: true,
        swaggerOptions: {
            persistAuthorization: true,
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
        customSiteTitle: 'Les Vrais Naturels - API Docs',
    });

    const port = resolvePort();
    await app.listen(port, '0.0.0.0');

    bootstrapLogger.log(`Application demarree sur: http://localhost:${port}`);
    bootstrapLogger.log(`Swagger: http://localhost:${port}/api/docs`);
    if (isProduction) {
        bootstrapLogger.log('Production Swagger: https://vrainaturel-api.sadeempro.xyz/api/docs');
    }
    bootstrapLogger.log(`CORS allowAll: ${corsAllowAll}`);
    bootstrapLogger.log(`CORS origins: ${allowedOrigins.join(', ')}`);
    bootstrapLogger.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}

bootstrap().catch((err) => {
    console.error('Bootstrap failed:', err);
    process.exit(1);
});
