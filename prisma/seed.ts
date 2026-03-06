import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { existsSync } from 'node:fs';
import * as bcrypt from 'bcrypt';

function readFirstDefined(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    if (!value) continue;
    const trimmed = value.trim();
    if (trimmed.length > 0) return trimmed;
  }
  return undefined;
}

function toPositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return parsed;
}

function resolveSeedDatabaseConfig(env: NodeJS.ProcessEnv) {
  const isRunningInDocker = existsSync('/.dockerenv');
  const internalAliases = new Set(['db', 'mysql', 'mariadb']);

  let parsed:
    | { host?: string; port?: string; user?: string; password?: string; database?: string }
    | undefined;

  if (env.DATABASE_URL) {
    const url = new URL(env.DATABASE_URL);
    parsed = {
      host: url.hostname || undefined,
      port: url.port || undefined,
      user: url.username || undefined,
      password: url.password || undefined,
      database: url.pathname.replace(/^\//, '') || undefined,
    };
  }

  let host = readFirstDefined(env.DATABASE_HOST_OVERRIDE, env.DB_HOST, parsed?.host) ?? '127.0.0.1';
  if (!isRunningInDocker && !env.DATABASE_HOST_OVERRIDE && internalAliases.has(host)) {
    host = '127.0.0.1';
  }

  const port = toPositiveInt(
    readFirstDefined(env.DB_PORT, parsed?.port, !isRunningInDocker ? env.DB_HOST_PORT : undefined),
    3306,
  );
  const user = readFirstDefined(env.DB_USER, env.DB_USERNAME, parsed?.user);
  const password = readFirstDefined(env.DB_PASSWORD, parsed?.password);
  const database = readFirstDefined(env.DB_NAME, env.DB_DATABASE, parsed?.database);
  const connectionLimit = toPositiveInt(env.DB_CONNECTION_LIMIT, 10);

  const missing: string[] = [];
  if (!user) missing.push('DB_USER or DB_USERNAME');
  if (!password) missing.push('DB_PASSWORD');
  if (!database) missing.push('DB_NAME or DB_DATABASE');

  if (missing.length > 0) {
    throw new Error(
      `Missing DB config for seed: ${missing.join(', ')}. Provide DATABASE_URL or DB_* variables.`,
    );
  }

  return { host, port, user, password, database, connectionLimit };
}

const db = resolveSeedDatabaseConfig(process.env);
const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database,
    connectionLimit: db.connectionLimit,
    acquireTimeout: 60000,
    idleTimeout: 30000,
  }),
  log: ['error', 'warn'],
});

const PRODUCTS_DATA = [
  {
    name: 'CALMOTRIN',
    slug: 'calmotrin',
    indication: 'Douleurs articulaires et musculaires',
    description: 'Gel de massage naturel à action rapide pour soulager les douleurs articulaires et musculaires.',
    argumentKey: "Le soulagement rapide par le massage, idéal pour vos patients âgés ou polymédiqués qui saturent des comprimés.",
    whyItWorks: "Zéro effet de premier passage hépatique ou gastrique, évitant ainsi les brûlures d'estomac et les médicaments supplémentaires.",
    sortOrder: 1,
  },
  {
    name: 'AMPUKU',
    slug: 'ampuku',
    indication: 'Digestion et Transit',
    description: 'Huile de massage abdominale pour soulager les troubles digestifs et améliorer le transit.',
    argumentKey: "Soulagez les ballonnements et le côlon irritable par un massage intestinal direct, sans aucun passage gastrique ni hépatique.",
    whyItWorks: "Pas d'interactions médicamenteuses, ce qui rassure les patients diabétiques ou cardiaques lassés de multiplier les comprimés.",
    sortOrder: 2,
  },
  {
    name: 'VENOTRIT',
    slug: 'venotrit',
    indication: 'Varices et jambes lourdes',
    description: 'Gel veinotonique naturel pour les jambes lourdes et les varices.',
    argumentKey: "Simplifiez votre conseil au comptoir : une alternative naturelle et externe efficace qui évite l'oralité.",
    whyItWorks: "Pas besoin de vérifier les antécédents cardiaques ou les traitements anticoagulants car le passage systémique est négligeable.",
    sortOrder: 3,
  },
  {
    name: 'SHIATSU',
    slug: 'shiatsu',
    indication: 'Stress et Sommeil',
    description: 'Huile de massage relaxante aux huiles essentielles pour favoriser le sommeil et réduire le stress.',
    argumentKey: "Offrez à vos patients stressés un sommeil naturel et réparateur sans l'effet somnolence des sédatifs classiques.",
    whyItWorks: "Alternative naturelle au magnésium, sans accoutumance, idéale pour diminuer l'oralité chez les patients polymédiqués.",
    sortOrder: 4,
  },
  {
    name: 'INALAXION',
    slug: 'inalaxion',
    indication: 'Rhume et état grippal',
    description: "Baume naturel à inhaler pour soulager les symptômes du rhume et renforcer l'immunité.",
    argumentKey: "Renforcez l'immunité de vos patients avec un soin 100% naturel qui combine action antivirale et confort respiratoire.",
    whyItWorks: "Agit sur les symptômes (courbatures, inflammation) tout en stimulant les défenses naturelles grâce aux huiles essentielles.",
    sortOrder: 5,
  },
  {
    name: 'STERIBANDE',
    slug: 'steribande',
    indication: 'Prévention gynécologique',
    description: "Spray naturel de prévention active pour l'hygiène intime féminine.",
    argumentKey: "Le premier geste de prévention active qui crée une barrière antibactérienne sans toucher à la flore vaginale.",
    whyItWorks: "Simple d'utilisation (vaporisation sur serviette) et 100% naturel, il n'attaque que les bactéries pathogènes sans modifier le pH.",
    sortOrder: 6,
  },
  {
    name: 'OLYOGYN',
    slug: 'olyogyn',
    indication: 'Douleurs de règles',
    description: 'Huile de massage antispasmodique pour soulager les douleurs menstruelles.',
    argumentKey: "L'alternative antispasmodique externe pour soulager les jeunes filles sans les effets secondaires des anti-inflammatoires.",
    whyItWorks: "Apporte un confort thermique et évite les risques potentiels des médicaments oraux sur la fertilité à long terme.",
    sortOrder: 7,
  },
  {
    name: 'PELAGROW',
    slug: 'pelagrow',
    indication: 'Chute de cheveux',
    description: 'Sérum capillaire naturel stimulant la repousse des cheveux et renforçant les follicules pileux.',
    argumentKey: "Un soin de fond qui stimule le follicule pileux pour une repousse durable, sans effet rebond à l'arrêt du traitement.",
    whyItWorks: "Agit contre le stress oxydatif des shampoings classiques et peut s'utiliser seul ou en complément de traitements médicaux.",
    sortOrder: 8,
  },
  {
    name: 'EXOCAPIL',
    slug: 'exocapil',
    indication: 'Anti-poux et lentes',
    description: 'Lotion naturelle anti-poux et anti-lentes sans perturbateurs endocriniens, sûre dès 3 ans.',
    argumentKey: "Éradiquez les poux et décollez les lentes sans perturbateurs endocriniens pour une sécurité totale dès 3 ans.",
    whyItWorks: "Traite la cause réelle des réinfestations (les lentes) avec une formule saine qui rassure les parents.",
    sortOrder: 9,
  },
  {
    name: 'PERCUTOL',
    slug: 'percutol',
    indication: 'Migraine et Maux de tête',
    description: 'Roll-on naturel à action locale rapide contre les migraines et les maux de tête.',
    argumentKey: "Le roll-on de secours discret et 100% naturel qui agit par anesthésie locale sans agresser l'estomac.",
    whyItWorks: "Peut être utilisé sur le long terme sans toxicité et n'interrompt pas le jeûne.",
    sortOrder: 10,
  },
  {
    name: 'HERPEROL',
    slug: 'herperol',
    indication: 'Herpès labial',
    description: "Soin naturel à double action antivirale et cicatrisante pour l'herpès labial.",
    argumentKey: "Une double action antivirale et cicatrisante qui traite la cause et la plaie simultanément.",
    whyItWorks: "Format de poche pratique pour une application dès les premiers signes, avec une efficacité directe sur le virus HSV.",
    sortOrder: 11,
  },
];

const FIFTEEN_DAY_RULES = [
  { quantityFrom: 1,  quantityTo: 9,    commissionPerProduct: 0,  bonusPerProduct: 0,   label: 'Moins de 10 produits' },
  { quantityFrom: 10, quantityTo: 14,   commissionPerProduct: 50, bonusPerProduct: 0,   label: '10-14 produits : 50 DA/produit' },
  { quantityFrom: 15, quantityTo: 19,   commissionPerProduct: 60, bonusPerProduct: 0,   label: '15-19 produits : 60 DA/produit' },
  { quantityFrom: 20, quantityTo: 24,   commissionPerProduct: 70, bonusPerProduct: 0,   label: '20-24 produits : 70 DA/produit' },
  { quantityFrom: 25, quantityTo: 29,   commissionPerProduct: 80, bonusPerProduct: 0,   label: '25-29 produits : 80 DA/produit' },
  { quantityFrom: 30, quantityTo: null, commissionPerProduct: 90, bonusPerProduct: 100, label: '30+ produits : 90 DA/produit + 100 DA Top Vendeur' },
];

const MONTHLY_RULES = [
  { quantityFrom: 50, quantityTo: 59,   commissionPerProduct: 0, bonusPerProduct: 10, label: '50-59 produits/mois : +10 DA bonus/produit' },
  { quantityFrom: 60, quantityTo: 79,   commissionPerProduct: 0, bonusPerProduct: 20, label: '60-79 produits/mois : +20 DA bonus/produit' },
  { quantityFrom: 80, quantityTo: null, commissionPerProduct: 0, bonusPerProduct: 30, label: '80+ produits/mois : +30 DA bonus/produit' },
];

async function main() {
  console.log('🌱 Démarrage du seeding...');

  // ── 1. Admin ───────────────────────────────────────────────────────────────
  try {
    const hashedPassword = await bcrypt.hash('Admin@2026', 10);
    await prisma.adminUser.upsert({
      where: { phone: '0770000000' },
      update: { passwordHash: hashedPassword, updatedAt: new Date() },
      create: {
        phone: '0770000000',
        passwordHash: hashedPassword,
        name: 'Administrateur Principal',
        role: 'admin',
      },
    });
    console.log('✅ Admin: 0770000000 / Admin@2026');
  } catch (e) {
    console.error('❌ Erreur Admin:', e);
    throw e;
  }

  // ── 2. Products ────────────────────────────────────────────────────────────
  try {
    for (const product of PRODUCTS_DATA) {
      await prisma.product.upsert({
        where: { slug: product.slug },
        update: { ...product },
        create: { ...product, isActive: true },
      });
    }
    console.log(`✅ ${PRODUCTS_DATA.length} produits créés`);
  } catch (e) {
    console.error('❌ Erreur Produits:', e);
    throw e;
  }

  // ── 3. Commission Rules ────────────────────────────────────────────────────
  try {
    await prisma.commissionRule.deleteMany({});
    for (const rule of FIFTEEN_DAY_RULES) {
      await prisma.commissionRule.create({
        data: { periodType: '15_days', ...rule, isActive: true },
      });
    }
    for (const rule of MONTHLY_RULES) {
      await prisma.commissionRule.create({
        data: { periodType: 'monthly', ...rule, isActive: true },
      });
    }
    console.log('✅ Règles de commission créées');
  } catch (e) {
    console.error('❌ Erreur Règles:', e);
    throw e;
  }

  // ── 4. Pharmacy ────────────────────────────────────────────────────────────
  try {
    await prisma.pharmacy.upsert({
      where: { id: 'seed-pharmacy-1' },
      update: {},
      create: {
        id: 'seed-pharmacy-1',
        name: 'Pharmacie Centrale',
        address: '12 Rue Didouche Mourad, Alger',
        phone: '021000000',
        region: 'Alger',
        status: 'active',
      },
    });
    console.log('✅ Pharmacie exemple créée');
  } catch (e) {
    console.error('❌ Erreur Pharmacie:', e);
    throw e;
  }

  console.log('\n🎉 Seed terminé avec succès !');
}

main()
    .catch((e) => {
      console.error('💥 Seed échoué:', e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
