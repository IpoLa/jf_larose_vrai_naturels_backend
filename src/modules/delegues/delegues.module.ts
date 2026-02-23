import {
  Controller, Get, Post, Put, Delete,
  Body, Param, Query, UseGuards, Injectable,
  NotFoundException, ConflictException, Module,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PrismaService } from '../../prisma/prisma.service';
import * as QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { DeleguesService } from './delegues.service';  // Assuming this is the file name

class CreateDelegueDto {
  @ApiProperty({ example: 'Karim Bouzidi' })
  @IsString() @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'karim@jf-larose.com' })
  @IsOptional() @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '0555000001' })
  @IsOptional() @IsString()
  phone?: string;

  @ApiPropertyOptional({ type: [String], example: ['Alger', 'Blida'] })
  @IsOptional() @IsArray() @IsString({ each: true })
  region?: string[];

  @ApiPropertyOptional({ example: 'Alger Centre' })
  @IsOptional() @IsString()
  sector?: string;
}

class UpdateDelegueDto extends PartialType(CreateDelegueDto) {
  @ApiPropertyOptional({ enum: ['active', 'inactive'] })
  @IsOptional() @IsString()
  status?: string;
}

@ApiTags('Admin - Délégués')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/delegues')
export class DeleguesController {
  constructor(private readonly service: DeleguesService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les délégués commerciaux' })
  @ApiQuery({ name: 'region', required: false })
  findAll(@Query('region') region?: string) { return this.service.findAll(region); }

  @Get(':id')
  @ApiOperation({ summary: 'Détails d\'un délégué' })
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  @ApiOperation({ summary: 'Créer un délégué commercial (génère QR auto)' })
  create(@Body() dto: CreateDelegueDto) { return this.service.create(dto); }

  @Put(':id')
  @ApiOperation({ summary: 'Modifier un délégué' })
  update(@Param('id') id: string, @Body() dto: UpdateDelegueDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Désactiver un délégué' })
  remove(@Param('id') id: string) { return this.service.remove(id); }

  @Post(':id/regenerate-qr')
  @ApiOperation({ summary: 'Régénérer le QR code d\'un délégué' })
  regenerateQr(@Param('id') id: string) { return this.service.regenerateQr(id); }

  @Get(':id/region-stats')
  @ApiOperation({ summary: 'Stats des régions du délégué' })
  async regionStats(@Param('id') id: string) {
    const d = await this.service.findOne(id);
    return this.service.getRegionStats(d.region || []);
  }
}

@Module({
  controllers: [DeleguesController],
  providers: [DeleguesService],
  exports: [DeleguesService],
})
export class DeleguesModule {}