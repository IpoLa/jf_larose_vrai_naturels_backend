import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  /** All products (admin) - includes inactive */
  async findAll(activeOnly = false) {
    return this.prisma.product.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      include: {
        _count: { select: { sales: true } },
      },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    });
  }

  /** Only active products (client-facing) */
  async findActive() {
    return this.prisma.product.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        slug: true,
        indication: true,
        description: true,
        argumentKey: true,
        whyItWorks: true,
        imageUrl: true,
        sortOrder: true,
      },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { _count: { select: { sales: true } } },
    });
    if (!product) throw new NotFoundException('Produit non trouvé');
    return product;
  }

  async findByNameOrSlug(nameOrSlug: string) {
    return this.prisma.product.findFirst({
      where: {
        isActive: true,
        OR: [
          { name: { equals: nameOrSlug.toUpperCase() } },
          { slug: { equals: nameOrSlug.toLowerCase() } },
        ],
      },
    });
  }

  async create(dto: CreateProductDto) {
    const slug = dto.slug || dto.name.toLowerCase().replace(/\s+/g, '-');
    const existing = await this.prisma.product.findFirst({
      where: { OR: [{ name: dto.name.toUpperCase() }, { slug }] },
    });
    if (existing) throw new ConflictException('Un produit avec ce nom ou slug existe déjà');

    return this.prisma.product.create({
      data: {
        name: dto.name.toUpperCase(),
        slug,
        indication: dto.indication,
        description: dto.description,
        argumentKey: dto.argumentKey,
        whyItWorks: dto.whyItWorks,
        imageUrl: dto.imageUrl,
        sortOrder: dto.sortOrder ?? 0,
        isActive: dto.isActive ?? true,
      },
    });
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    const data: any = { ...dto, updatedAt: new Date() };
    if (dto.name) data.name = dto.name.toUpperCase();
    if (dto.slug) data.slug = dto.slug.toLowerCase();
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    // Soft delete: mark inactive
    return this.prisma.product.update({
      where: { id },
      data: { isActive: false, updatedAt: new Date() },
    });
  }

  async reorder(items: { id: string; sortOrder: number }[]) {
    await Promise.all(
      items.map((item) =>
        this.prisma.product.update({
          where: { id: item.id },
          data: { sortOrder: item.sortOrder },
        }),
      ),
    );
    return this.findAll();
  }

  async getProductStats() {
    const products = await this.prisma.product.findMany({
      include: {
        _count: { select: { sales: true } },
        sales: { select: { quantity: true } },
      },
      orderBy: { sortOrder: 'asc' },
    });

    return products.map((p) => ({
      id: p.id,
      name: p.name,
      indication: p.indication,
      isActive: p.isActive,
      totalTransactions: p._count.sales,
      totalQuantitySold: p.sales.reduce((sum, s) => sum + s.quantity, 0),
    }));
  }
}
