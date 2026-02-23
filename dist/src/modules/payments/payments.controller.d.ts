import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    getAll(vendorId?: string, status?: string, periodType?: string): Promise<({
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
    getPending(): Promise<({
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
    getSummary(): Promise<{
        pending: {
            count: number;
            total: number;
        };
        paid: {
            count: number;
            total: number;
        };
    }>;
    markAsPaid(id: string): Promise<{
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
}
