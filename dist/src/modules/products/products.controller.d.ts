import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ReorderProductsDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(activeOnly?: string): Promise<({
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
    getStats(): Promise<{
        id: string;
        name: string;
        indication: string;
        isActive: boolean;
        totalTransactions: number;
        totalQuantitySold: number;
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
    reorder(dto: ReorderProductsDto): Promise<({
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
}
