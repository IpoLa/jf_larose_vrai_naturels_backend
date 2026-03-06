import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CommissionsService } from '../commissions/commissions.service';
import { PeriodsService } from '../periods/periods.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class SalesService {
  constructor(
    private prisma: PrismaService,
    private commissionsService: CommissionsService,
    private periodsService: PeriodsService,
    private productsService: ProductsService,
  ) {}

  async addSale(vendorId: string, productIdentifier: string, quantity: number) {
    if (quantity <= 0) {
      throw new BadRequestException('La quantité doit être supérieure à 0');
    }

    // Validate product exists in DB and is active
    const product = await this.productsService.findByNameOrSlug(productIdentifier);
    if (!product) {
      const activeProducts = await this.productsService.findActive();
      const names = activeProducts.map((p) => p.name).join(', ');
      throw new BadRequestException(
        `Produit invalide ou inactif. Produits disponibles: ${names}`,
      );
    }

    // Get or create current 15-day and monthly periods
    const period15 = await this.periodsService.getCurrentOrCreate15DayPeriod(vendorId);
    const periodMonthly = await this.periodsService.getCurrentOrCreateMonthlyPeriod(vendorId);

    // Record the sale with product relation
    const sale = await this.prisma.sale.create({
      data: {
        vendorId,
        productId: product.id,
        productName: product.name,
        quantity,
        saleDate: new Date(),
        periodId: period15.id,
      },
      include: {
        product: {
          select: { name: true, indication: true, imageUrl: true },
        },
      },
    });

    // Recalculate commission for the 15-day period
    const periodSales = await this.prisma.sale.aggregate({
      where: { vendorId, periodId: period15.id },
      _sum: { quantity: true },
    });
    const totalQty = periodSales._sum.quantity || 0;
    const commissionResult = await this.commissionsService.calculate15DayCommission(totalQty);

    // Update period totals
    await this.periodsService.updatePeriodTotals(period15.id, commissionResult.commission);

    // Monthly bonus
    const monthSales = await this.prisma.sale.aggregate({
      where: { vendorId, periodId: periodMonthly.id },
      _sum: { quantity: true },
    });
    const monthlyQty = monthSales._sum.quantity || 0;
    const monthlyBonus = await this.commissionsService.calculateMonthlyBonus(monthlyQty);

    // Next tier motivation
    const nextTier = await this.commissionsService.getNextTierInfo(totalQty);

    return {
      sale,
      period: {
        id: period15.id,
        totalSales: totalQty,
        commission: commissionResult.commission,
        commissionPerProduct: commissionResult.commissionPerProduct,
        tier: commissionResult.tier,
      },
      monthlyBonus: {
        quantity: monthlyQty,
        bonus: monthlyBonus.bonus,
        tier: monthlyBonus.tier,
      },
      nextTier,
    };
  }

  async getVendorSalesHistory(vendorId: string, limit = 50) {
    return this.prisma.sale.findMany({
      where: { vendorId },
      include: {
        product: {
          select: { name: true, indication: true, imageUrl: true },
        },
        period: {
          select: {
            startDate: true,
            endDate: true,
            periodType: true,
            totalCommission: true,
            status: true,
          },
        },
      },
      orderBy: { saleDate: 'desc' },
      take: limit,
    });
  }

  async getAdminSalesHistory(query?: {
    vendorId?: string;
    pharmacyId?: string;
    productName?: string;
    productId?: string;
    from?: string;
    to?: string;
  }) {
    const where: any = {};
    if (query?.vendorId) where.vendorId = query.vendorId;
    if (query?.productId) where.productId = query.productId;
    if (query?.productName) where.productName = query.productName.toUpperCase();
    if (query?.from || query?.to) {
      where.saleDate = {};
      if (query.from) where.saleDate.gte = new Date(query.from);
      if (query.to) where.saleDate.lte = new Date(query.to);
    }
    if (query?.pharmacyId) {
      where.vendor = { pharmacyId: query.pharmacyId };
    }

    return this.prisma.sale.findMany({
      where,
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            phone: true,
            pharmacy: { select: { name: true } },
          },
        },
        product: {
          select: { name: true, indication: true },
        },
        period: {
          select: {
            startDate: true,
            endDate: true,
            periodType: true,
            status: true,
          },
        },
      },
      orderBy: { saleDate: 'desc' },
    });
  }

  /** Returns full product objects for client (not just names) */
  async getAvailableProducts() {
    return this.productsService.findActive();
  }
}
