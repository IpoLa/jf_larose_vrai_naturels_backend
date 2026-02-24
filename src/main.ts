import { NestFactory } from '@nestjs/core';
import {Logger, ValidationPipe} from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });

    app.useLogger(new Logger());

    app.use(cookieParser());

    const allowedOrigins = process.env.ALLOWED_ORIGINS
        ? process.env.ALLOWED_ORIGINS.split(',')
        : [
            'http://localhost:3000',
            'http://localhost:5173',
            'http://192.168.1.6:3000',
            'http://192.168.1.4:3000',
            'http://192.168.1.4:8081',
            'https://jflarose-client.sensinglabo.com',
            'https://jflarose-admin.sensinglabo.com',
        ];


    app.enableCors({
        origin: allowedOrigins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-card-number', 'Accept'],
    });

    app.getHttpAdapter().getInstance().set('trust proxy', 1);

    // CSP améliorée pour permettre plus de ressources
    if (process.env.NODE_ENV === 'development') {
        app.use((req, res, next) => {
            res.setHeader(
                'Content-Security-Policy',
                "default-src 'self'; " +
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:; " +
                "style-src 'self' 'unsafe-inline' https: http:; " +
                "img-src 'self' data: https: http:; " +
                "font-src 'self' data: https: http:; " +
                "connect-src 'self' https: http: ws: wss:;"
            );
            next();
        });
    } else {
        // CSP plus stricte pour la production
        app.use((req, res, next) => {
            res.setHeader(
                'Content-Security-Policy',
                "default-src 'self'; " +
                "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
                "style-src 'self' 'unsafe-inline'; " +
                "img-src 'self' data: https:; " +
                "font-src 'self' data:; " +
                "connect-src 'self' https://jflarose-client.sensinglabo.com https://jflarose-admin.sensinglabo.com;"
            );
            next();
        });
    }

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
        }),
    );

    app.setGlobalPrefix('api');

    // Swagger Documentation
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
    SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customSiteTitle: 'Les Vrais Naturels - API Docs',
    });

    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Application démarrée sur: http://localhost:${port}`);
    console.log(`📚 Documentation Swagger: http://localhost:${port}/api/docs`);
    console.log(`🔓 CORS allowed origins:`, allowedOrigins);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
}
bootstrap();