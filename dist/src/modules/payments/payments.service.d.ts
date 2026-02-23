import { PrismaService } from '../../prisma/prisma.service';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPendingPayments(): Promise<({
        vendor: {
            id: string;
            phone: string;
            name: string;
            pharmacy: {
                name: string;
            };
            ccp: string;
            ccpKey: string;
            rip: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        periodType: string;
        status: string;
        vendorId: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        paidAt: Date | null;
    })[]>;
    getAllPayments(query?: {
        vendorId?: string;
        status?: string;
        periodType?: string;
    }): Promise<({
        vendor: {
            id: string;
            phone: string;
            name: string;
            pharmacy: {
                name: string;
            };
            ccp: string;
            ccpKey: string;
            rip: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        periodType: string;
        status: string;
        vendorId: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        paidAt: Date | null;
    })[]>;
    markAsPaid(periodId: string): Promise<{
        vendor: {
            phone: string;
            name: string;
            ccp: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        periodType: string;
        status: string;
        vendorId: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        paidAt: Date | null;
    }>;
    getVendorPaymentHistory(vendorId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        periodType: string;
        status: string;
        vendorId: string;
        startDate: Date;
        endDate: Date;
        totalSales: number;
        totalCommission: number;
        paidAt: Date | null;
    }[]>;
    getPaymentSummary(): Promise<{
        pending: {
            count: number;
            total: number;
        };
        paid: {
            count: number;
            total: number;
        };
    }>;
}
