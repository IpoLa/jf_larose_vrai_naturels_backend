import { PharmaciesService } from './pharmacies.service';
declare class CreatePharmacyDto {
    name: string;
    address?: string;
    phone?: string;
    region?: string;
}
export declare class PharmaciesController {
    private readonly pharmaciesService;
    constructor(pharmaciesService: PharmaciesService);
    findAll(region?: string, status?: string, search?: string): Promise<({
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
}
export {};
