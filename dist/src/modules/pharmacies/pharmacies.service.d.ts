import { PrismaService } from '../../prisma/prisma.service';
export declare class CreatePharmacyDto {
    name: string;
    address?: string;
    phone?: string;
    region?: string;
}
export declare class PharmaciesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: {
        region?: string;
        status?: string;
        search?: string;
    }): Promise<({
        vendors: {
            id: string;
            name: string;
        }[];
        _count: {
            vendors: number;
        };
    } & {
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        region: string | null;
        status: string;
    })[]>;
    findOne(id: string): Promise<{
        vendors: ({
            _count: {
                sales: number;
            };
        } & {
            id: string;
            phone: string | null;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            uniqueCardNumber: string;
            email: string | null;
            ccp: string | null;
            ccpKey: string | null;
            rip: string | null;
            pharmacyId: string | null;
            actionDate: Date;
            registrationBonus: boolean;
        })[];
    } & {
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        region: string | null;
        status: string;
    }>;
    create(dto: CreatePharmacyDto): Promise<{
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        region: string | null;
        status: string;
    }>;
    update(id: string, dto: Partial<CreatePharmacyDto> & {
        status?: string;
    }): Promise<{
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        region: string | null;
        status: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        phone: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        region: string | null;
        status: string;
    }>;
    getTopPharmacies(limit?: number): Promise<{
        id: string;
        name: string;
        region: string;
        vendorCount: number;
        totalSales: number;
        totalCommission: number;
    }[]>;
}
