import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(activeOnly?: boolean): Promise<({
        _count: {
            sales: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    })[]>;
    findActive(): Promise<{
        id: string;
        name: string;
        slug: string;
        indication: string;
        description: string;
        argumentKey: string;
        whyItWorks: string;
        imageUrl: string;
        sortOrder: number;
    }[]>;
    findOne(id: string): Promise<{
        _count: {
            sales: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    }>;
    findByNameOrSlug(nameOrSlug: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    }>;
    create(dto: CreateProductDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    }>;
    reorder(items: {
        id: string;
        sortOrder: number;
    }[]): Promise<({
        _count: {
            sales: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        indication: string;
        description: string | null;
        argumentKey: string | null;
        whyItWorks: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
    })[]>;
    getProductStats(): Promise<{
        id: string;
        name: string;
        indication: string;
        isActive: boolean;
        totalTransactions: number;
        totalQuantitySold: number;
    }[]>;
}
