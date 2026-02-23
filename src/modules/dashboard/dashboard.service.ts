import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getAdminDashboard() {
    const [vendorCount, pharmacyCount, totalSales, pendingPayments] = await Promise.all([
      this.prisma.vendor.count({ where: { status: 'active' } }),
      this.prisma.pharmacy.count({ where: { status: 'active' } }),
      this.prisma.sale.aggregate({ _sum: { quantity: true }, _count: true }),
      this.prisma.paymentPeriod.aggregate({
        where: { status: 'pending', totalCommission: { gt: 0 } },
        _sum: { totalCommission: true },
        _count: true,
      }),
    ]);

    return {
      vendors: vendorCount,
      pharmacies: pharmacyCount,
      totalSalesQuantity: totalSales._sum.quantity || 0,
      totalSalesTransactions: totalSales._count,
      pendingCommissions: pendingPayments._sum.totalCommission || 0,
      pendingPaymentsCount: pendingPayments._count,
    };
  }

  async getTopVendors(limit = 10, periodType?: string) {
    const where: any = { status: 'active' };
    const vendors = await this.prisma.vendor.findMany({
      where,
      include: {
        pharmacy: { select: { name: true, region: true } },
        sales: { select: { quantity: true, saleDate: true } },
        paymentPeriods: {
          where: periodType ? { periodType } : undefined,
          select: { totalCommission: true, status: true },
        },
        qrCodes: { where: { isActive: true }, select: { uniqueKey: true } },
      },
    });

    const ranked = vendors.map((v) => ({
      id: v.id,
      name: v.name,
      phone: v.phone,
      pharmacy: v.pharmacy,
      totalQuantitySold: v.sales.reduce((sum, s) => sum + s.quantity, 0),
      totalCommission: v.paymentPeriods.reduce((sum, p) => sum + p.totalCommission, 0),
      paidCommission: v.paymentPeriods
        .filter((p) => p.status === 'paid')
        .reduce((sum, p) => sum + p.totalCommission, 0),
      pendingCommission: v.paymentPeriods
        .filter((p) => p.status === 'pending')
        .reduce((sum, p) => sum + p.totalCommission, 0),
    }));

    return ranked.sort((a, b) => b.totalQuantitySold - a.totalQuantitySold).slice(0, limit);
  }

  async getTopPharmacies(limit = 10) {
    const pharmacies = await this.prisma.pharmacy.findMany({
      where: { status: 'active' },
      include: {
        vendors: {
          include: {
            sales: { select: { quantity: true } },
            paymentPeriods: { select: { totalCommission: true } },
          },
        },
      },
    });

    const ranked = pharmacies.map((p) => {
      const totalSales = p.vendors.reduce(
        (sum, v) => sum + v.sales.reduce((s, sale) => s + sale.quantity, 0),
        0,
      );
      const totalCommission = p.vendors.reduce(
        (sum, v) => sum + v.paymentPeriods.reduce((s, period) => s + period.totalCommission, 0),
        0,
      );
      return {
        id: p.id,
        name: p.name,
        region: p.region,
        activeVendors: p.vendors.length,
        totalSales,
        totalCommission,
      };
    });

    return ranked.sort((a, b) => b.totalSales - a.totalSales).slice(0, limit);
  }

  async getRecentActivity() {
    const recentSales = await this.prisma.sale.findMany({
      take: 20,
      orderBy: { saleDate: 'desc' },
      include: {
        vendor: {
          select: {
            name: true,
            pharmacy: { select: { name: true } },
          },
        },
      },
    });

    return recentSales;
  }
}
