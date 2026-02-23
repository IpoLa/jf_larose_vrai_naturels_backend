import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ReorderProductsDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Admin - Produits')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: 'Lister tous les produits',
    description: 'Retourne tous les produits (actifs et inactifs) avec statistiques de ventes.',
  })
  @ApiQuery({ name: 'activeOnly', required: false, type: Boolean, description: 'Filtrer par produits actifs uniquement' })
  @ApiResponse({ status: 200, description: 'Liste des produits avec stats' })
  findAll(@Query('activeOnly') activeOnly?: string) {
    return this.productsService.findAll(activeOnly === 'true');
  }

  @Get('stats')
  @ApiOperation({
    summary: 'Statistiques des produits',
    description: 'Nombre de ventes et quantités vendues par produit.',
  })
  @ApiResponse({ status: 200, description: 'Statistiques par produit' })
  getStats() {
    return this.productsService.getProductStats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détails d\'un produit' })
  @ApiParam({ name: 'id', description: 'ID du produit' })
  @ApiResponse({ status: 200, description: 'Données du produit' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Créer un nouveau produit',
    description: 'Ajoute un produit à la gamme Les Vrais Naturels. Le nom sera automatiquement mis en majuscules.',
  })
  @ApiResponse({ status: 201, description: 'Produit créé avec succès' })
  @ApiResponse({ status: 409, description: 'Un produit avec ce nom existe déjà' })
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Modifier un produit',
    description: 'Mettre à jour les informations, l\'argumentaire ou l\'état actif d\'un produit.',
  })
  @ApiParam({ name: 'id', description: 'ID du produit' })
  @ApiResponse({ status: 200, description: 'Produit mis à jour' })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(id, dto);
  }

  @Patch('reorder')
  @ApiOperation({
    summary: 'Réordonner les produits',
    description: 'Met à jour l\'ordre d\'affichage de plusieurs produits en une seule requête.',
  })
  @ApiResponse({ status: 200, description: 'Ordre mis à jour' })
  reorder(@Body() dto: ReorderProductsDto) {
    return this.productsService.reorder(dto.items);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Désactiver un produit',
    description: 'Désactive le produit (soft delete). Les ventes existantes sont préservées.',
  })
  @ApiParam({ name: 'id', description: 'ID du produit' })
  @ApiResponse({ status: 200, description: 'Produit désactivé' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
