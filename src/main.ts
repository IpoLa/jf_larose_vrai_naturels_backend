import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://192.168.1.6:3000',  'http://192.168.1.4:3000',  'http://192.168.1.4:8081'],
    credentials: true,
  });

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
}
bootstrap();
