import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { Injectable, Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { VendorAuthGuard } from '../auth/guards/vendor-auth.guard';

@Injectable()
class RulesService {
  constructor(private prisma: PrismaService) {}

  async getRules() {
    const [commissionRules, products] = await Promise.all([
      this.prisma.commissionRule.findMany({
        where: { isActive: true },
        orderBy: [{ periodType: 'asc' }, { quantityFrom: 'asc' }],
      }),
      this.prisma.product.findMany({
        where: { isActive: true },
        select: { name: true, indication: true, argumentKey: true, whyItWorks: true, sortOrder: true },
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      }),
    ]);

    return {
      title: 'Offre de Fidélité - Les Vrais Naturels 2026',
      validity: "Valable toute l'année 2026",
      registrationBonus: { amount: 200, description: "Bonus d'adhésion offert à chaque nouveau vendeur enregistré" },
      fifteenDayRules: {
        description: "Commissions calculées sur une période de 15 jours à partir de votre date d'action",
        validityNote: "Cette offre est valable pendant 15 jours après l'acceptation",
        tiers: commissionRules
          .filter((r) => r.periodType === '15_days')
          .map((r) => ({
            quantityFrom: r.quantityFrom,
            quantityTo: r.quantityTo,
            commissionPerProduct: r.commissionPerProduct,
            bonusPerProduct: r.bonusPerProduct,
            label: r.label,
            example: r.quantityTo
              ? `${r.quantityFrom} produits = ${r.quantityFrom * r.commissionPerProduct} DA`
              : `${r.quantityFrom}+ produits = ${r.quantityFrom * r.commissionPerProduct} DA + bonus Top Vendeur`,
          })),
      },
      monthlyRules: {
        description: "Bonus d'accélération mensuel pour les vendeurs haute performance",
        tiers: commissionRules
          .filter((r) => r.periodType === 'monthly')
          .map((r) => ({
            quantityFrom: r.quantityFrom,
            quantityTo: r.quantityTo,
            bonusPerProduct: r.bonusPerProduct,
            label: r.label,
          })),
      },
      pharmacyBonus: {
        description: 'Bonus Pharmacie Performante',
        condition: "Si 2 vendeurs d'une même pharmacie atteignent le palier de 30 unités",
        reward: '2% de remise supplémentaire sur la prochaine commande globale',
      },
      products,
    };
  }
}

@ApiTags('Règles')
@Controller('client/rules')
export class ClientRulesController {
  constructor(private rulesService: RulesService) {}

  @Get()
  @ApiSecurity('Card-Number')
  @UseGuards(VendorAuthGuard)
  @ApiOperation({
    summary: "Règles de l'offre (vendeur)",
    description: 'Règles complètes, paliers de commission et liste des produits actifs de la gamme.',
  })
  getRules() { return this.rulesService.getRules(); }
}

@ApiTags('Règles')
@Controller('admin/rules')
export class AdminRulesController {
  constructor(private rulesService: RulesService) {}

  @Get()
  @ApiOperation({ summary: "Règles de l'offre (admin)" })
  getRules() { return this.rulesService.getRules(); }
}

@Module({
  controllers: [ClientRulesController, AdminRulesController],
  providers: [RulesService],
})
export class RulesModule {}
