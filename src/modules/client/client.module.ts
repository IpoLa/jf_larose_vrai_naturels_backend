import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Req,
  UseGuards,
  Query,
  Param,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { IsString, IsNumber, IsOptional, IsEmail, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { VendorAuthGuard } from '../auth/guards/vendor-auth.guard';
import { PrismaService } from '../../prisma/prisma.service';
import { SalesService } from '../sales/sales.service';
import { CommissionsService } from '../commissions/commissions.service';
import { PeriodsService } from '../periods/periods.service';
import { PaymentsService } from '../payments/payments.service';
import { SalesModule } from '../sales/sales.module';
import { CommissionsModule } from '../commissions/commissions.module';
import { PeriodsModule } from '../periods/periods.module';
import { PaymentsModule } from '../payments/payments.module';
import { DeleguesService } from '../delegues/delegues.service';

// ─── DTOs ───────────────────────────────────────────────────────────────────

class AddSaleDto {
  @ApiProperty({
    description: 'Nom ou slug du produit (doit être un produit actif)',
    example: 'CALMOTRIN',
  })
  @IsString()
  productName: string;

  @ApiProperty({ description: 'Quantité vendue', example: 3, minimum: 1 })
  @IsNumber()
  @Min(1)
  quantity: number;
}

class UpdateProfileDto {
  @ApiPropertyOptional({ example: 'Ahmed Benali' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'ahmed@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '0555000000' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: '0123456789' })
  @IsOptional()
  @IsString()
  ccp?: string;

  @ApiPropertyOptional({ example: '12' })
  @IsOptional()
  @IsString()
  ccpKey?: string;

  @ApiPropertyOptional({ example: '00799999000000000000' })
  @IsOptional()
  @IsString()
  rip?: string;
}

// ─── AUTH ────────────────────────────────────────────────────────────────────

@ApiTags('Client - Authentification')
@Controller('client/auth')
export class ClientAuthController {
  constructor(private prisma: PrismaService) {}

  @Post('verify')
  @ApiOperation({
    summary: 'Vérifier la carte vendeur',
    description:
        'Authentifie le vendeur via son numéro de carte unique (paramètre QR code). ' +
        'Retourne un token de session à stocker localement et à envoyer dans le header x-card-number.',
  })
  @ApiBody({
    schema: {
      required: ['card_number'],
      properties: {
        card_number: {
          type: 'string',
          example: '550e8400-e29b-41d4-a716-446655440000',
          description: 'Numéro unique présent dans le QR code',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Vendeur authentifié – stocker card_number et l\'envoyer dans x-card-number',
    schema: {
      example: {
        authenticated: true,
        card_number: '550e8400-e29b-41d4-a716-446655440000',
        vendor: {
          id: 'uuid',
          name: 'Ahmed Benali',
          phone: '0555000000',
          pharmacyName: 'Pharmacie Centrale',
        },
      },
    },
  })
  async verify(@Body('card_number') cardNumber: string) {
    if (!cardNumber?.trim()) {
      return { authenticated: false, message: 'card_number requis' };
    }

    const trimmed = cardNumber.trim();

    // ─── 1. Try vendor ────────────────────────────────────────────────
    const vendor = await this.prisma.vendor.findUnique({
      where: { uniqueCardNumber: trimmed },
      include: { pharmacy: { select: { name: true } } },
    });

    if (vendor) {
      if (vendor.status !== 'active') {
        return { authenticated: false, message: 'Compte vendeur inactif' };
      }

      return {
        authenticated: true,
        card_number: vendor.uniqueCardNumber,
        role: 'vendor',
        profile: {
          id: vendor.id,
          name: vendor.name,
          phone: vendor.phone,
          email: vendor.email,
          pharmacyName: vendor.pharmacy?.name || null,
          registrationBonus: !!vendor.registrationBonus,
        },
      };
    }

    // ─── 2. Try delegue ───────────────────────────────────────────────
    const delegue = await this.prisma.delegue.findUnique({
      where: { uniqueCardNumber: trimmed },
    });

    if (delegue) {
      if (delegue.status !== 'active') {
        return { authenticated: false, message: 'Compte délégué inactif' };
      }

      return {
        authenticated: true,
        card_number: delegue.uniqueCardNumber,
        role: 'delegue',
        profile: {
          id: delegue.id,
          name: delegue.name,
          phone: delegue.phone,
          email: delegue.email,
          region: delegue.region,
          sector: delegue.sector,
        },
      };
    }

    return { authenticated: false, message: 'Numéro de carte invalide' };
  }
}

// ─── PROFILE ─────────────────────────────────────────────────────────────────

@ApiTags('Client - Profil')
@ApiSecurity('Card-Number')
@UseGuards(VendorAuthGuard)
@Controller('client/profile')
export class ClientProfileController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiOperation({
    summary: 'Voir mon profil',
    description:
        'Profil complet du vendeur. Authentification: envoyer le card_number dans le header x-card-number.',
  })
  @ApiResponse({ status: 200, description: 'Profil du vendeur' })
  @ApiResponse({ status: 401, description: 'x-card-number manquant ou invalide' })
  getProfile(@Req() req: any) {
    const v = req.vendor;
    return {
      id: v.id,
      name: v.name,
      email: v.email,
      phone: v.phone,
      ccp: v.ccp,
      ccpKey: v.ccpKey,
      rip: v.rip,
      pharmacy: v.pharmacy,
      status: v.status,
      actionDate: v.actionDate,
      registrationBonus: v.registrationBonus ? 200 : 0,
      uniqueCardNumber: v.uniqueCardNumber,
    };
  }

  @Put()
  @ApiOperation({
    summary: 'Modifier mon profil',
    description: 'Mise à jour des informations personnelles.',
  })
  @ApiResponse({ status: 200, description: 'Profil mis à jour' })
  async updateProfile(@Req() req: any, @Body() dto: UpdateProfileDto) {
    return this.prisma.vendor.update({
      where: { id: req.vendor.id },
      data: { ...dto, updatedAt: new Date() },
      include: { pharmacy: { select: { name: true } } },
    });
  }
}

// ─── SALES ───────────────────────────────────────────────────────────────────

@ApiTags('Client - Ventes')
@ApiSecurity('Card-Number')
@UseGuards(VendorAuthGuard)
@Controller('client/sales')
export class ClientSalesController {
  constructor(
      private salesService: SalesService,
      private commissionsService: CommissionsService,
  ) {}

  @Post('add')
  @ApiOperation({
    summary: 'Enregistrer une vente',
    description:
        'Ajoute une vente, valide le produit en base de données et recalcule la commission automatiquement.',
  })
  @ApiBody({ type: AddSaleDto })
  @ApiResponse({
    status: 201,
    description: 'Vente enregistrée avec commission calculée',
    schema: {
      example: {
        sale: { id: 'uuid', productName: 'CALMOTRIN', quantity: 5 },
        period: { totalSales: 15, commission: 900, tier: '15-19 produits' },
        nextTier: { remaining: 5, message: 'Plus que 5 ventes pour 1400 DA!' },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Produit invalide ou quantité incorrecte' })
  async addSale(@Req() req: any, @Body() dto: AddSaleDto) {
    return this.salesService.addSale(req.vendor.id, dto.productName, dto.quantity);
  }

  @Get('history')
  @ApiOperation({
    summary: 'Historique des ventes',
    description: 'Toutes les ventes du vendeur avec détails produit et période.',
  })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'Liste des ventes' })
  getHistory(@Req() req: any, @Query('limit') limit?: number) {
    return this.salesService.getVendorSalesHistory(req.vendor.id, Number(limit) || 50);
  }

  @Get('products')
  @ApiOperation({
    summary: 'Liste des produits disponibles',
    description: 'Retourne tous les produits actifs avec indication et argumentaire.',
  })
  @ApiResponse({ status: 200, description: 'Produits actifs' })
  getProducts() {
    return this.salesService.getAvailableProducts();
  }
}

// ─── DASHBOARD ───────────────────────────────────────────────────────────────

@ApiTags('Client - Tableau de bord')
@ApiSecurity('Card-Number')
@UseGuards(VendorAuthGuard)
@Controller('client/dashboard')
export class ClientDashboardController {
  constructor(
      private prisma: PrismaService,
      private commissionsService: CommissionsService,
      private periodsService: PeriodsService,
      private paymentsService: PaymentsService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Tableau de bord vendeur',
    description:
        'Résumé complet: période 15j en cours, bonus mensuel, totaux de ventes, commissions et statut des paiements.',
  })
  @ApiResponse({ status: 200, description: 'Données du tableau de bord' })
  async getDashboard(@Req() req: any) {
    const vendorId = req.vendor.id;

    const [periodProgress, paymentHistory, totalSalesAllTime] = await Promise.all([
      this.periodsService.getPeriodProgress(vendorId),
      this.paymentsService.getVendorPaymentHistory(vendorId),
      this.prisma.sale.aggregate({
        where: { vendorId },
        _sum: { quantity: true },
        _count: true,
      }),
    ]);

    const { fifteenDayPeriod, monthlyPeriod } = periodProgress;

    const current15DaySales = fifteenDayPeriod
        ? await this.prisma.sale.aggregate({
          where: { vendorId, periodId: fifteenDayPeriod.id },
          _sum: { quantity: true },
        })
        : null;

    const current15DayQty = current15DaySales?._sum?.quantity || 0;
    const nextTier = await this.commissionsService.getNextTierInfo(current15DayQty);

    // paymentHistory now includes the registration_bonus period (200 DA),
    // so pending/paid totals are always accurate without manual addition.
    const totalCommission = paymentHistory.reduce((s, p) => s + p.totalCommission, 0);
    const paidCommission = paymentHistory
        .filter((p) => p.status === 'paid')
        .reduce((s, p) => s + p.totalCommission, 0);
    const pendingCommission = paymentHistory
        .filter((p) => p.status === 'pending')
        .reduce((s, p) => s + p.totalCommission, 0);

    return {
      vendor: {
        id: req.vendor.id,
        name: req.vendor.name,
        // Informational only — the actual 200 DA is tracked as a paymentPeriod entry
        registrationBonus: req.vendor.registrationBonus ? 200 : 0,
      },
      currentPeriod: { ...fifteenDayPeriod, currentQuantity: current15DayQty, nextTier },
      monthlyPeriod,
      totals: {
        allTimeSalesQuantity: totalSalesAllTime._sum.quantity || 0,
        allTimeSalesCount: totalSalesAllTime._count,
        totalCommissionEarned: totalCommission,
        paidCommission,
        pendingCommission,
      },
      recentPayments: paymentHistory.slice(0, 5),
    };
  }
}

// ─── NOTIFICATIONS ───────────────────────────────────────────────────────────

@ApiTags('Client - Notifications')
@ApiSecurity('Card-Number')
@UseGuards(VendorAuthGuard)
@Controller('client/notifications')
export class ClientNotificationsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les notifications du vendeur / délégué' })
  async getNotifications(@Req() req: any) {
    const cardHolder = req.cardHolder;
    if (cardHolder.role === 'delegue') {
      return this.prisma.delegueNotification.findMany({
        where: { delegueId: cardHolder.id },
        include: { notification: true },
        orderBy: { notification: { createdAt: 'desc' } },
        take: 50,
      });
    }
    return this.prisma.vendorNotification.findMany({
      where: { vendorId: cardHolder.id },
      include: { notification: true },
      orderBy: { notification: { createdAt: 'desc' } },
      take: 50,
    });
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Nombre de notifications non lues' })
  async getUnreadCount(@Req() req: any) {
    const cardHolder = req.cardHolder;
    let count: number;
    if (cardHolder.role === 'delegue') {
      count = await this.prisma.delegueNotification.count({
        where: { delegueId: cardHolder.id, isRead: false },
      });
    } else {
      count = await this.prisma.vendorNotification.count({
        where: { vendorId: cardHolder.id, isRead: false },
      });
    }
    return { count };
  }

  @Post(':id/read')
  @ApiOperation({ summary: 'Marquer une notification comme lue' })
  async markRead(@Req() req: any, @Param('id') id: string) {
    const cardHolder = req.cardHolder;
    const now = new Date();
    if (cardHolder.role === 'delegue') {
      await this.prisma.delegueNotification.updateMany({
        where: { notificationId: id, delegueId: cardHolder.id },
        data: { isRead: true, readAt: now },
      });
    } else {
      await this.prisma.vendorNotification.updateMany({
        where: { notificationId: id, vendorId: cardHolder.id },
        data: { isRead: true, readAt: now },
      });
    }
    return { success: true };
  }

  @Post('mark-all-read')
  @ApiOperation({ summary: 'Marquer toutes les notifications comme lues' })
  async markAllRead(@Req() req: any) {
    const cardHolder = req.cardHolder;
    const now = new Date();
    if (cardHolder.role === 'delegue') {
      await this.prisma.delegueNotification.updateMany({
        where: { delegueId: cardHolder.id, isRead: false },
        data: { isRead: true, readAt: now },
      });
    } else {
      await this.prisma.vendorNotification.updateMany({
        where: { vendorId: cardHolder.id, isRead: false },
        data: { isRead: true, readAt: now },
      });
    }
    return { success: true };
  }
}

// ─── DELEGUE STATS ───────────────────────────────────────────────────────────

@ApiTags('Client - Délégué')
@ApiSecurity('Card-Number')
@UseGuards(VendorAuthGuard)
@Controller('client/delegue')
export class ClientDelegueController {
  constructor(private prisma: PrismaService) {}

  @Get('stats')
  @ApiOperation({
    summary: 'Statistiques secteur (Délégué Commercial uniquement)',
    description: 'Accès lecture seule aux données des vendeurs du secteur.',
  })
  async getDelegueStats(@Req() req: any) {
    const cardHolder = req.cardHolder;

    if (cardHolder.role !== 'delegue') {
      throw new ForbiddenException('Accès réservé aux délégués');
    }

    const regions = cardHolder.region;

    if (!regions?.length) {
      throw new BadRequestException('Région non définie pour ce délégué');
    }

    const [vendors, pharmacies, monthlySalesAgg, totalCommissionsAgg] = await Promise.all([
      this.prisma.vendor.findMany({
        where: {
          status: 'active',
          pharmacy: { region: { in: regions } },
        },
        include: {
          pharmacy: { select: { id: true, name: true, region: true } },
          sales: {
            where: {
              saleDate: {
                gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              },
            },
            select: { quantity: true },
          },
          paymentPeriods: {
            where: { status: 'pending' },
            select: { totalCommission: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),

      this.prisma.pharmacy.findMany({
        where: { region: { in: regions }, status: 'active' },
        select: { id: true, name: true, region: true },
      }),

      this.prisma.sale.aggregate({
        where: {
          vendor: { pharmacy: { region: { in: regions } } },
          saleDate: { gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) },
        },
        _sum: { quantity: true },
      }),

      this.prisma.paymentPeriod.aggregate({
        where: {
          vendor: { pharmacy: { region: { in: regions } } },
          status: 'pending',
        },
        _sum: { totalCommission: true },
      }),
    ]);

    const enrichedVendors = vendors.map((v) => ({
      id: v.id,
      name: v.name,
      phone: v.phone,
      status: v.status,
      pharmacy: v.pharmacy,
      currentPeriodQty: v.sales.reduce((sum, s) => sum + s.quantity, 0),
      pendingCommission: v.paymentPeriods.reduce((sum, p) => sum + p.totalCommission, 0),
    }));

    const topVendors = [...enrichedVendors]
        .sort((a, b) => b.currentPeriodQty - a.currentPeriodQty)
        .slice(0, 10);

    const pharmacyStats = pharmacies.map((pharm) => ({
      ...pharm,
      vendorCount: vendors.filter((v) => v.pharmacyId === pharm.id).length,
    })).filter(p => p.vendorCount > 0);

    return {
      delegue: {
        id: cardHolder.id,
        name: cardHolder.name,
        region: cardHolder.region,
        sector: cardHolder.sector || null,
      },
      summary: {
        activeVendors: vendors.length,
        pharmacies: pharmacies.length,
        monthlySales: monthlySalesAgg._sum.quantity || 0,
        totalCommissions: totalCommissionsAgg._sum.totalCommission || 0,
      },
      topVendors,
      vendors: enrichedVendors,
      pharmacyStats,
    };
  }
}

// ─── MODULE ──────────────────────────────────────────────────────────────────

@Module({
  imports: [SalesModule, CommissionsModule, PeriodsModule, PaymentsModule],
  controllers: [
    ClientAuthController,
    ClientProfileController,
    ClientSalesController,
    ClientDashboardController,
    ClientNotificationsController,
    ClientDelegueController,
  ],
  providers: [DeleguesService],
})
export class ClientModule {}