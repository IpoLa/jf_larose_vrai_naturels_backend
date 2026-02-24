import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });

    app.useLogger(new Logger());
    app.use(cookieParser());

    // ── CORS ──────────────────────────────────────────────────────────────────
    const allowedOrigins = process.env.ALLOWED_ORIGINS
        ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
        : [
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

    app.enableCors({
        origin: (origin, callback) => {
            // Allow requests with no origin (mobile apps, curl, Postman)
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes(origin)) return callback(null, true);
            callback(new Error(`CORS blocked: ${origin}`));
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

    // ── IMPORTANT: always listen on 3000 internally, Docker maps PORT→3000 ──
    const port = 3000;
    await app.listen(port, '0.0.0.0');

    console.log(`🚀 Application démarrée sur: http://localhost:${port}`);
    console.log(`📚 Swagger: http://localhost:${port}/api/docs`);
    if (isProduction) {
        console.log(`📚 Production Swagger: https://vrainaturel-api.sadeempro.xyz/api/docs`);
    }
    console.log(`🔓 CORS origins:`, allowedOrigins);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
}

bootstrap().catch((err) => {
    console.error('Bootstrap failed:', err);
    process.exit(1);
});