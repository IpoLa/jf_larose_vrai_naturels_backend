import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PharmaciesService } from './pharmacies.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

class CreatePharmacyDto {
  @ApiProperty({ example: 'Pharmacie El Amel' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '5 Rue des Martyrs, Alger' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: '021000000' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'Alger' })
  @IsOptional()
  @IsString()
  region?: string;
}

@ApiTags('Admin - Pharmacies')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Get()
  @ApiOperation({ summary: 'Liste des pharmacies' })
  @ApiQuery({ name: 'region', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'search', required: false })
  findAll(
    @Query('region') region?: string,
    @Query('status') status?: string,
    @Query('search') search?: string,
  ) {
    return this.pharmaciesService.findAll({ region, status, search });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détails d\'une pharmacie' })
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string) {
    return this.pharmaciesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer une pharmacie' })
  create(@Body() dto: CreatePharmacyDto) {
    return this.pharmaciesService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifier une pharmacie' })
  @ApiParam({ name: 'id' })
  update(@Param('id') id: string, @Body() dto: Partial<CreatePharmacyDto> & { status?: string }) {
    return this.pharmaciesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Désactiver une pharmacie' })
  @ApiParam({ name: 'id' })
  remove(@Param('id') id: string) {
    return this.pharmaciesService.remove(id);
  }
}
