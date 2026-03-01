#!/usr/bin/env node
/**
 * Pure JS seed — uses mysql2 directly (no Prisma client, no native binaries)
 * Safe on any CPU/OS combination.
 */

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
    console.error('❌ DATABASE_URL not set');
    process.exit(1);
}

// Parse mysql://user:pass@host:port/dbname
const match = DATABASE_URL.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
if (!match) {
    console.error('❌ Invalid DATABASE_URL format:', DATABASE_URL);
    process.exit(1);
}

const [, user, password, host, port, database] = match;

const PRODUCTS = [
    { name: 'CALMOTRIN',  slug: 'calmotrin',  indication: 'Douleurs articulaires et musculaires', description: 'Gel de massage naturel à action rapide pour soulager les douleurs articulaires et musculaires.', argumentKey: "Le soulagement rapide par le massage, idéal pour vos patients âgés ou polymédiqués qui saturent des comprimés.", whyItWorks: "Zéro effet de premier passage hépatique ou gastrique, évitant ainsi les brûlures d'estomac et les médicaments supplémentaires.", sortOrder: 1 },
    { name: 'AMPUKU',     slug: 'ampuku',     indication: 'Digestion et Transit', description: 'Huile de massage abdominale pour soulager les troubles digestifs et améliorer le transit.', argumentKey: "Soulagez les ballonnements et le côlon irritable par un massage intestinal direct, sans aucun passage gastrique ni hépatique.", whyItWorks: "Pas d'interactions médicamenteuses, ce qui rassure les patients diabétiques ou cardiaques.", sortOrder: 2 },
    { name: 'VENOTRIT',   slug: 'venotrit',   indication: 'Varices et jambes lourdes', description: 'Gel veinotonique naturel pour les jambes lourdes et les varices.', argumentKey: "Simplifiez votre conseil au comptoir : une alternative naturelle et externe efficace qui évite l'oralité.", whyItWorks: "Pas besoin de vérifier les antécédents cardiaques ou les traitements anticoagulants.", sortOrder: 3 },
    { name: 'SHIATSU',    slug: 'shiatsu',    indication: 'Stress et Sommeil', description: 'Huile de massage relaxante aux huiles essentielles pour favoriser le sommeil et réduire le stress.', argumentKey: "Offrez à vos patients stressés un sommeil naturel et réparateur sans l'effet somnolence des sédatifs classiques.", whyItWorks: "Alternative naturelle au magnésium, sans accoutumance.", sortOrder: 4 },
    { name: 'INALAXION',  slug: 'inalaxion',  indication: 'Rhume et état grippal', description: "Baume naturel à inhaler pour soulager les symptômes du rhume et renforcer l'immunité.", argumentKey: "Renforcez l'immunité de vos patients avec un soin 100% naturel.", whyItWorks: "Agit sur les symptômes tout en stimulant les défenses naturelles grâce aux huiles essentielles.", sortOrder: 5 },
    { name: 'STERIBANDE', slug: 'steribande', indication: 'Prévention gynécologique', description: "Spray naturel de prévention active pour l'hygiène intime féminine.", argumentKey: "Le premier geste de prévention active qui crée une barrière antibactérienne sans toucher à la flore vaginale.", whyItWorks: "100% naturel, il n'attaque que les bactéries pathogènes sans modifier le pH.", sortOrder: 6 },
    { name: 'OLYOGYN',    slug: 'olyogyn',    indication: 'Douleurs de règles', description: 'Huile de massage antispasmodique pour soulager les douleurs menstruelles.', argumentKey: "L'alternative antispasmodique externe pour soulager les jeunes filles sans les effets secondaires des anti-inflammatoires.", whyItWorks: "Apporte un confort thermique et évite les risques potentiels des médicaments oraux.", sortOrder: 7 },
    { name: 'PELAGROW',   slug: 'pelagrow',   indication: 'Chute de cheveux', description: 'Sérum capillaire naturel stimulant la repousse des cheveux et renforçant les follicules pileux.', argumentKey: "Un soin de fond qui stimule le follicule pileux pour une repousse durable, sans effet rebond.", whyItWorks: "Agit contre le stress oxydatif des shampoings classiques.", sortOrder: 8 },
    { name: 'EXOCAPIL',   slug: 'exocapil',   indication: 'Anti-poux et lentes', description: 'Lotion naturelle anti-poux et anti-lentes sans perturbateurs endocriniens, sûre dès 3 ans.', argumentKey: "Éradiquez les poux et décollez les lentes sans perturbateurs endocriniens pour une sécurité totale dès 3 ans.", whyItWorks: "Traite la cause réelle des réinfestations avec une formule saine.", sortOrder: 9 },
    { name: 'PERCUTOL',   slug: 'percutol',   indication: 'Migraine et Maux de tête', description: 'Roll-on naturel à action locale rapide contre les migraines et les maux de tête.', argumentKey: "Le roll-on de secours discret et 100% naturel qui agit par anesthésie locale sans agresser l'estomac.", whyItWorks: "Peut être utilisé sur le long terme sans toxicité.", sortOrder: 10 },
    { name: 'HERPEROL',   slug: 'herperol',   indication: 'Herpès labial', description: "Soin naturel à double action antivirale et cicatrisante pour l'herpès labial.", argumentKey: "Une double action antivirale et cicatrisante qui traite la cause et la plaie simultanément.", whyItWorks: "Format de poche pratique pour une application dès les premiers signes.", sortOrder: 11 },
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

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

async function seed(conn) {
    console.log('🌱 Démarrage du seeding...');

    // ── 1. Admin ───────────────────────────────────────────────────────────────
    try {
        const hash = await bcrypt.hash('Admin@2026', 10);
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        await conn.execute(`
      INSERT INTO admin_users (id, phone, passwordHash, name, role, createdAt, updatedAt)
      VALUES (?, '0770000000', ?, 'Administrateur Principal', 'admin', ?, ?)
      ON DUPLICATE KEY UPDATE passwordHash = VALUES(passwordHash), updatedAt = VALUES(updatedAt)
    `, [uuid(), hash, now, now]);
        console.log('✅ Admin: 0770000000 / Admin@2026');
    } catch (e) {
        console.error('❌ Admin error:', e.message);
        throw e;
    }

    // ── 2. Products ────────────────────────────────────────────────────────────
    try {
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        for (const p of PRODUCTS) {
            await conn.execute(`
        INSERT INTO products (id, name, slug, indication, description, argumentKey, whyItWorks, imageUrl, isActive, sortOrder, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, NULL, 1, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          indication = VALUES(indication),
          description = VALUES(description),
          argumentKey = VALUES(argumentKey),
          whyItWorks = VALUES(whyItWorks),
          sortOrder = VALUES(sortOrder),
          updatedAt = VALUES(updatedAt)
      `, [uuid(), p.name, p.slug, p.indication, p.description, p.argumentKey, p.whyItWorks, p.sortOrder, now, now]);
        }
        console.log(`✅ ${PRODUCTS.length} produits créés/mis à jour`);
    } catch (e) {
        console.error('❌ Products error:', e.message);
        throw e;
    }

    // ── 3. Commission Rules ────────────────────────────────────────────────────
    try {
        await conn.execute('DELETE FROM commission_rules');
        console.log('🗑️  Anciennes règles supprimées');
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

        for (const r of FIFTEEN_DAY_RULES) {
            await conn.execute(`
        INSERT INTO commission_rules (id, periodType, quantityFrom, quantityTo, commissionPerProduct, bonusPerProduct, label, isActive, createdAt, updatedAt)
        VALUES (?, '15_days', ?, ?, ?, ?, ?, 1, ?, ?)
      `, [uuid(), r.quantityFrom, r.quantityTo, r.commissionPerProduct, r.bonusPerProduct, r.label, now, now]);
        }
        for (const r of MONTHLY_RULES) {
            await conn.execute(`
        INSERT INTO commission_rules (id, periodType, quantityFrom, quantityTo, commissionPerProduct, bonusPerProduct, label, isActive, createdAt, updatedAt)
        VALUES (?, 'monthly', ?, ?, ?, ?, ?, 1, ?, ?)
      `, [uuid(), r.quantityFrom, r.quantityTo, r.commissionPerProduct, r.bonusPerProduct, r.label, now, now]);
        }
        console.log('✅ Règles de commission créées');
    } catch (e) {
        console.error('❌ Commission rules error:', e.message);
        throw e;
    }

    // ── 4. Pharmacy ────────────────────────────────────────────────────────────
    try {
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        await conn.execute(`
      INSERT INTO pharmacies (id, name, address, phone, region, status, createdAt, updatedAt)
      VALUES ('seed-pharmacy-1', 'Pharmacie Centrale', '12 Rue Didouche Mourad, Alger', '021000000', 'Alger', 'active', ?, ?)
      ON DUPLICATE KEY UPDATE updatedAt = VALUES(updatedAt)
    `, [now, now]);
        console.log('✅ Pharmacie exemple créée');
    } catch (e) {
        console.error('❌ Pharmacy error:', e.message);
        throw e;
    }

    console.log('\n🎉 Seed terminé avec succès !');
}

async function main() {
    let conn;
    try {
        console.log(`🔌 Connecting to MySQL at ${host}:${port}/${database}...`);
        conn = await mysql.createConnection({ host, port: parseInt(port), user, password, database });
        console.log('✅ Connected to MySQL');
        await seed(conn);
    } catch (e) {
        console.error('💥 Seed failed:', e.message);
        process.exit(1);
    } finally {
        if (conn) await conn.end();
    }
}

main();