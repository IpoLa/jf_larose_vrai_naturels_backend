import { PrismaService } from '../../prisma/prisma.service';
export declare class CommissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    getRules(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }[]>;
    getRulesByPeriodType(periodType: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }[]>;
    getAllRules(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }[]>;
    updateRule(id: string, data: {
        quantityFrom?: number;
        quantityTo?: number | null;
        commissionPerProduct?: number;
        bonusPerProduct?: number;
        label?: string;
        isActive?: boolean;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }>;
    createRule(data: {
        periodType: string;
        quantityFrom: number;
        quantityTo?: number | null;
        commissionPerProduct: number;
        bonusPerProduct?: number;
        label?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }>;
    deleteRule(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        periodType: string;
        quantityFrom: number;
        quantityTo: number | null;
        commissionPerProduct: number;
        bonusPerProduct: number;
        label: string | null;
    }>;
    calculate15DayCommission(totalQuantity: number): Promise<{
        commission: number;
        commissionPerProduct: number;
        bonusPerProduct: number;
        tier: string;
    }>;
    calculateMonthlyBonus(totalQuantity: number): Promise<{
        bonus: number;
        bonusPerProduct: number;
        tier: string;
    }>;
    getNextTierInfo(currentQuantity: number, periodType?: string): Promise<{
        nextTier: number | null;
        remaining: number | null;
        nextCommission: number | null;
        message: string;
    }>;
}
