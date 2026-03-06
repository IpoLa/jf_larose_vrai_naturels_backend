import {
  Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards,
} from '@nestjs/common';
import {
  ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery,
} from '@nestjs/swagger';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Admin - Vendeurs')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Get()
  @ApiOperation({
    summary: 'Liste des vendeurs',
    description: 'Obtenir tous les vendeurs avec filtres optionnels',
  })
  @ApiQuery({ name: 'pharmacyId', required: false, description: 'Filtrer par pharmacie' })
  @ApiQuery({ name: 'status', required: false, enum: ['active', 'inactive'] })
  @ApiQuery({ name: 'search', required: false, description: 'Recherche par nom ou téléphone' })
  @ApiResponse({ status: 200, description: 'Liste des vendeurs' })
  findAll(
    @Query('pharmacyId') pharmacyId?: string,
    @Query('status') status?: string,
    @Query('search') search?: string,
  ) {
    return this.vendorsService.findAll({ pharmacyId, status, search });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détails d\'un vendeur' })
  @ApiParam({ name: 'id', description: 'ID du vendeur' })
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(id);
  }

  @Get(':id/stats')
  @ApiOperation({
    summary: 'Statistiques d\'un vendeur',
    description: 'Scores totaux, commissions gagnées, statut des paiements',
  })
  @ApiParam({ name: 'id', description: 'ID du vendeur' })
  getStats(@Param('id') id: string) {
    return this.vendorsService.getVendorStats(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Créer un nouveau vendeur',
    description: 'Crée un vendeur avec bonus d\'adhésion de 200 DA et génère son QR code automatiquement',
  })
  @ApiResponse({ status: 201, description: 'Vendeur créé avec QR code généré' })
  create(@Body() dto: CreateVendorDto) {
    return this.vendorsService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifier un vendeur' })
  @ApiParam({ name: 'id', description: 'ID du vendeur' })
  update(@Param('id') id: string, @Body() dto: UpdateVendorDto) {
    return this.vendorsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Désactiver un vendeur' })
  @ApiParam({ name: 'id', description: 'ID du vendeur' })
  remove(@Param('id') id: string) {
    return this.vendorsService.remove(id);
  }
}
