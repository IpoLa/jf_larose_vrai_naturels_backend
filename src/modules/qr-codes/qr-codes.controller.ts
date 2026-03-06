import { Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { QrCodesService } from './qr-codes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Admin - QR Codes')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/qr-codes')
export class QrCodesController {
  constructor(private readonly qrCodesService: QrCodesService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtenir tous les QR codes actifs',
    description: 'Liste tous les QR codes actifs avec les informations des vendeurs',
  })
  @ApiResponse({ status: 200, description: 'Liste des QR codes' })
  getAllQrCodes() {
    return this.qrCodesService.getAllQrCodes();
  }

  @Get('vendor/:vendorId')
  @ApiOperation({ summary: 'Obtenir le QR code d\'un vendeur' })
  @ApiParam({ name: 'vendorId', description: 'ID du vendeur' })
  getVendorQrCode(@Param('vendorId') vendorId: string) {
    return this.qrCodesService.getVendorQrCode(vendorId);
  }

  @Post('vendor/:vendorId/regenerate')
  @ApiOperation({
    summary: 'Régénérer le QR code d\'un vendeur',
    description: 'Génère un nouveau QR code et invalide l\'ancien. Le vendeur devra utiliser le nouveau lien.',
  })
  @ApiParam({ name: 'vendorId', description: 'ID du vendeur' })
  @ApiResponse({ status: 201, description: 'Nouveau QR code généré' })
  regenerateQrCode(@Param('vendorId') vendorId: string) {
    return this.qrCodesService.regenerateQrCode(vendorId);
  }
}
