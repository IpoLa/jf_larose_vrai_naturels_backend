import { PrismaService } from '../../prisma/prisma.service';
export declare class PeriodsService {
    private prisma;
    constructor(prisma: PrismaService);
    getCurrentOrCreate15DayPeriod(vendorId: string): Promise<{
        id: string;
        vendorId: string;
        periodType: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        status: string;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCurrentOrCreateMonthlyPeriod(vendorId: string): Promise<{
        id: string;
        vendorId: string;
        periodType: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        status: string;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getVendorPeriods(vendorId: string): Promise<({
        sales: {
            id: string;
            productName: string;
            quantity: number;
            saleDate: Date;
        }[];
    } & {
        id: string;
        vendorId: string;
        periodType: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        status: string;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    updatePeriodTotals(periodId: string, totalCommission: number): Promise<{
        id: string;
        vendorId: string;
        periodType: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        status: string;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPeriodProgress(vendorId: string): Promise<{
        fifteenDayPeriod: {
            daysRemaining: number;
            id: string;
            vendorId: string;
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            status: string;
            paidAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        monthlyPeriod: {
            daysRemaining: number;
            id: string;
            vendorId: string;
            periodType: string;
            startDate: Date;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            status: string;
            paidAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
