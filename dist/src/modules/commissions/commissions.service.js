"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CommissionsService = class CommissionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getRules() {
        return this.prisma.commissionRule.findMany({
            where: { isActive: true },
            orderBy: [{ periodType: 'asc' }, { quantityFrom: 'asc' }],
        });
    }
    async getRulesByPeriodType(periodType) {
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
    async updateRule(id, data) {
        return this.prisma.commissionRule.update({
            where: { id },
            data: {
                ...data,
                updatedAt: new Date(),
            },
        });
    }
    async createRule(data) {
        return this.prisma.commissionRule.create({
            data: {
                ...data,
                isActive: true,
            },
        });
    }
    async deleteRule(id) {
        return this.prisma.commissionRule.delete({ where: { id } });
    }
    async calculate15DayCommission(totalQuantity) {
        const rules = await this.getRulesByPeriodType('15_days');
        let applicableRule = null;
        for (const rule of rules) {
            if (totalQuantity >= rule.quantityFrom &&
                (rule.quantityTo === null || totalQuantity <= rule.quantityTo)) {
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
        const bonusCommission = applicableRule.quantityTo === null
            ? totalQuantity * applicableRule.bonusPerProduct
            : 0;
        return {
            commission: baseCommission + bonusCommission,
            commissionPerProduct: applicableRule.commissionPerProduct,
            bonusPerProduct: applicableRule.bonusPerProduct,
            tier: applicableRule.label || `${applicableRule.quantityFrom}+ produits`,
        };
    }
    async calculateMonthlyBonus(totalQuantity) {
        const rules = await this.getRulesByPeriodType('monthly');
        let applicableRule = null;
        for (const rule of rules.reverse()) {
            if (totalQuantity >= rule.quantityFrom &&
                (rule.quantityTo === null || totalQuantity <= rule.quantityTo)) {
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
    async getNextTierInfo(currentQuantity, periodType = '15_days') {
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
};
exports.CommissionsService = CommissionsService;
exports.CommissionsService = CommissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommissionsService);
//# sourceMappingURL=commissions.service.js.map