import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CommissionsService {
  constructor(private prisma: PrismaService) {}

  async getRules() {
    return this.prisma.commissionRule.findMany({
      where: { isActive: true },
      orderBy: [{ periodType: 'asc' }, { quantityFrom: 'asc' }],
    });
  }

  async getRulesByPeriodType(periodType: string) {
    return this.prisma.commissionRule.findMany({
      where: { periodType, isActive: true },
      orderBy: { quantityFrom: 'asc' },
    });
  }

  async getAllRules() {
    return this.prisma.commissionRule.findMany({
      orderBy: [{ periodType: 'asc' }, { quantityFrom: 'asc' }],
    });
  }

  async updateRule(id: string, data: {
    quantityFrom?: number;
    quantityTo?: number | null;
    commissionPerProduct?: number;
    bonusPerProduct?: number;
    label?: string;
    isActive?: boolean;
  }) {
    return this.prisma.commissionRule.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async createRule(data: {
    periodType: string;
    quantityFrom: number;
    quantityTo?: number | null;
    commissionPerProduct: number;
    bonusPerProduct?: number;
    label?: string;
  }) {
    return this.prisma.commissionRule.create({
      data: {
        ...data,
        isActive: true,
      },
    });
  }

  async deleteRule(id: string) {
    return this.prisma.commissionRule.delete({ where: { id } });
  }

  /**
   * Calculate commission for a 15-day period
   * Based on total quantity sold in the period
   */
  async calculate15DayCommission(totalQuantity: number): Promise<{
    commission: number;
    commissionPerProduct: number;
    bonusPerProduct: number;
    tier: string;
  }> {
    const rules = await this.getRulesByPeriodType('15_days');

    // Find applicable rule
    let applicableRule = null;
    for (const rule of rules) {
      if (
        totalQuantity >= rule.quantityFrom &&
        (rule.quantityTo === null || totalQuantity <= rule.quantityTo)
      ) {
        applicableRule = rule;
        break;
      }
    }

    if (!applicableRule || applicableRule.commissionPerProduct === 0) {
      return {
        commission: 0,
        commissionPerProduct: 0,
        bonusPerProduct: 0,
        tier: 'Aucun palier atteint',
      };
    }

    const baseCommission = totalQuantity * applicableRule.commissionPerProduct;
    const bonusCommission =
      applicableRule.quantityTo === null
        ? totalQuantity * applicableRule.bonusPerProduct
        : 0;

    return {
      commission: baseCommission + bonusCommission,
      commissionPerProduct: applicableRule.commissionPerProduct,
      bonusPerProduct: applicableRule.bonusPerProduct,
      tier: applicableRule.label || `${applicableRule.quantityFrom}+ produits`,
    };
  }

  /**
   * Calculate monthly bonus commission (accelerators)
   */
  async calculateMonthlyBonus(totalQuantity: number): Promise<{
    bonus: number;
    bonusPerProduct: number;
    tier: string;
  }> {
    const rules = await this.getRulesByPeriodType('monthly');

    let applicableRule = null;
    for (const rule of rules.reverse()) {
      if (
        totalQuantity >= rule.quantityFrom &&
        (rule.quantityTo === null || totalQuantity <= rule.quantityTo)
      ) {
        applicableRule = rule;
        break;
      }
    }

    if (!applicableRule) {
      return { bonus: 0, bonusPerProduct: 0, tier: 'Aucun bonus mensuel' };
    }

    return {
      bonus: totalQuantity * applicableRule.bonusPerProduct,
      bonusPerProduct: applicableRule.bonusPerProduct,
      tier: applicableRule.label || `${applicableRule.quantityFrom}+ produits/mois`,
    };
  }

  /**
   * Get next tier info for motivation
   */
  async getNextTierInfo(currentQuantity: number, periodType = '15_days'): Promise<{
    nextTier: number | null;
    remaining: number | null;
    nextCommission: number | null;
    message: string;
  }> {
    const rules = await this.getRulesByPeriodType(periodType);
    const sorted = rules.sort((a, b) => a.quantityFrom - b.quantityFrom);

    for (const rule of sorted) {
      if (currentQuantity < rule.quantityFrom) {
        return {
          nextTier: rule.quantityFrom,
          remaining: rule.quantityFrom - currentQuantity,
          nextCommission: rule.commissionPerProduct,
          message: `Plus que ${rule.quantityFrom - currentQuantity} vente(s) pour atteindre le palier de ${rule.quantityFrom * rule.commissionPerProduct} DA !`,
        };
      }
    }

    return {
      nextTier: null,
      remaining: null,
      nextCommission: null,
      message: 'Félicitations ! Vous avez atteint le palier maximum !',
    };
  }
}
