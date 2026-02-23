import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorsController {
    private readonly vendorsService;
    constructor(vendorsService: VendorsService);
    findAll(pharmacyId?: string, status?: string, search?: string): Promise<({
        pharmacy: {
            id: string;
            name: string;
            region: string;
        };
        qrCodes: {
            uniqueKey: string;
            qrUrl: string;
            qrImageData: string;
        }[];
        _count: {
            sales: number;
        };
    } & {
        id: string;
        uniqueCardNumber: string;
        name: string | null;
        email: string | null;
        phone: string | null;
        ccp: string | null;
        ccpKey: string | null;
        rip: string | null;
        pharmacyId: string | null;
        status: string;
        actionDate: Date;
        registrationBonus: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        pharmacy: {
            id: string;
            name: string;
            phone: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            region: string | null;
        };
        paymentPeriods: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            vendorId: string;
            startDate: Date;
            periodType: string;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            paidAt: Date | null;
        }[];
        qrCodes: {
            id: string;
            vendorId: string;
            uniqueKey: string;
            qrUrl: string;
            qrImageData: string | null;
            generatedAt: Date;
            isActive: boolean;
        }[];
    } & {
        id: string;
        uniqueCardNumber: string;
        name: string | null;
        email: string | null;
        phone: string | null;
        ccp: string | null;
        ccpKey: string | null;
        rip: string | null;
        pharmacyId: string | null;
        status: string;
        actionDate: Date;
        registrationBonus: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getStats(id: string): Promise<{
        vendor: {
            pharmacy: {
                id: string;
                name: string;
                phone: string | null;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                address: string | null;
                region: string | null;
            };
            paymentPeriods: {
                id: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                vendorId: string;
                startDate: Date;
                periodType: string;
                endDate: Date;
                totalSales: number;
                totalCommission: number;
                paidAt: Date | null;
            }[];
            qrCodes: {
                id: string;
                vendorId: string;
                uniqueKey: string;
                qrUrl: string;
                qrImageData: string | null;
                generatedAt: Date;
                isActive: boolean;
            }[];
        } & {
            id: string;
            uniqueCardNumber: string;
            name: string | null;
            email: string | null;
            phone: string | null;
            ccp: string | null;
            ccpKey: string | null;
            rip: string | null;
            pharmacyId: string | null;
            status: string;
            actionDate: Date;
            registrationBonus: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        stats: {
            totalQuantitySold: number;
            totalSaleCount: number;
            totalCommissionEarned: number;
            paidCommission: number;
            pendingCommission: number;
            registrationBonus: number;
        };
    }>;
    create(dto: CreateVendorDto): Promise<{
        pharmacy: {
            id: string;
            name: string;
            phone: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            region: string | null;
        };
        paymentPeriods: {
            id: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            vendorId: string;
            startDate: Date;
            periodType: string;
            endDate: Date;
            totalSales: number;
            totalCommission: number;
            paidAt: Date | null;
        }[];
        qrCodes: {
            id: string;
            vendorId: string;
            uniqueKey: string;
            qrUrl: string;
            qrImageData: string | null;
            generatedAt: Date;
            isActive: boolean;
        }[];
    } & {
        id: string;
        uniqueCardNumber: string;
        name: string | null;
        email: string | null;
        phone: string | null;
        ccp: string | null;
        ccpKey: string | null;
        rip: string | null;
        pharmacyId: string | null;
        status: string;
        actionDate: Date;
        registrationBonus: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateVendorDto): Promise<{
        pharmacy: {
            id: string;
            name: string;
            phone: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            region: string | null;
        };
    } & {
        id: string;
        uniqueCardNumber: string;
        name: string | null;
        email: string | null;
        phone: string | null;
        ccp: string | null;
        ccpKey: string | null;
        rip: string | null;
        pharmacyId: string | null;
        status: string;
        actionDate: Date;
        registrationBonus: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        uniqueCardNumber: string;
        name: string | null;
        email: string | null;
        phone: string | null;
        ccp: string | null;
        ccpKey: string | null;
        rip: string | null;
        pharmacyId: string | null;
        status: string;
        actionDate: Date;
        registrationBonus: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
