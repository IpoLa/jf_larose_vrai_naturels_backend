import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async getAllPendingPayments() {
    return this.prisma.paymentPeriod.findMany({
      where: { status: 'pending', totalCommission: { gt: 0 } },
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            phone: true,
            ccp: true,
            ccpKey: true,
            rip: true,
            pharmacy: { select: { name: true } },
          },
        },
      },
      orderBy: { endDate: 'asc' },
    });
  }

  async getAllPayments(query?: { vendorId?: string; status?: string; periodType?: string }) {
    const where: any = {};
    if (query?.vendorId) where.vendorId = query.vendorId;
    if (query?.status) where.status = query.status;
    if (query?.periodType) where.periodType = query.periodType;

    return this.prisma.paymentPeriod.findMany({
      where,
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            phone: true,
            ccp: true,
            ccpKey: true,
            rip: true,
            pharmacy: { select: { name: true } },
          },
        },
      },
      orderBy: { startDate: 'desc' },
    });
  }

  async markAsPaid(periodId: string) {
    const period = await this.prisma.paymentPeriod.findUnique({
      where: { id: periodId },
    });
    if (!period) throw new NotFoundException('Période de paiement non trouvée');

    return this.prisma.paymentPeriod.update({
      where: { id: periodId },
      data: {
        status: 'paid',
        paidAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        vendor: {
          select: { name: true, phone: true, ccp: true },
        },
      },
    });
  }

  async getVendorPaymentHistory(vendorId: string) {
    return this.prisma.paymentPeriod.findMany({
      where: { vendorId },
      orderBy: { startDate: 'desc' },
    });
  }

  async getPaymentSummary() {
    const pending = await this.prisma.paymentPeriod.aggregate({
      where: { status: 'pending' },
      _sum: { totalCommission: true },
      _count: true,
    });

    const paid = await this.prisma.paymentPeriod.aggregate({
      where: { status: 'paid' },
      _sum: { totalCommission: true },
      _count: true,
    });

    return {
      pending: {
        count: pending._count,
        total: pending._sum.totalCommission || 0,
      },
      paid: {
        count: paid._count,
        total: paid._sum.totalCommission || 0,
      },
    };
  }
}
