"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:5173', 'http://192.168.1.6:3000', 'http://192.168.1.4:3000', 'http://192.168.1.4:8081'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Les Vrais Naturels - API JF Larose')
        .setDescription(`Documentation complète de l'API pour la plateforme de fidélité vendeurs pharmacie.
      
      ## Authentification
      - **Admin**: JWT via \`POST /api/admin/auth/login\`
      - **Vendeur**: Numéro de carte unique via header \`x-card-number\`
      
      ## Périodes
      - **15 jours**: Calcul de commission basé sur la date d'action du vendeur
      - **Mensuel**: Bonus d'accélération de performance
      `)
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT-Admin')
        .addApiKey({ type: 'apiKey', in: 'header', name: 'x-card-number' }, 'Card-Number')
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customSiteTitle: 'Les Vrais Naturels - API Docs',
    });
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Application démarrée sur: http://localhost:${port}`);
    console.log(`📚 Documentation Swagger: http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map