import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QrCodesService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  private getBaseUrl(): string {
    return this.configService.get('CLIENT_BASE_URL') || 'http://localhost:3000';
  }

  async generateQrCode(vendorId: string) {
    // Deactivate old QR codes
    await this.prisma.qrCode.updateMany({
      where: { vendorId, isActive: true },
      data: { isActive: false },
    });

    const uniqueKey = uuidv4();
    const clientUrl = `${this.getBaseUrl()}/auth?card=${uniqueKey}`;

    // Generate QR code image as base64
    const qrImageData = await QRCode.toDataURL(clientUrl, {
      width: 300,
      margin: 2,
      color: { dark: '#1a472a', light: '#ffffff' },
    });

    // Update vendor's unique card number
    await this.prisma.vendor.update({
      where: { id: vendorId },
      data: { uniqueCardNumber: uniqueKey },
    });

    const qrCode = await this.prisma.qrCode.create({
      data: {
        vendorId,
        uniqueKey,
        qrUrl: clientUrl,
        qrImageData,
        isActive: true,
      },
    });

    return qrCode;
  }

  async regenerateQrCode(vendorId: string) {
    return this.generateQrCode(vendorId);
  }

  async getVendorQrCode(vendorId: string) {
    return this.prisma.qrCode.findFirst({
      where: { vendorId, isActive: true },
      orderBy: { generatedAt: 'desc' },
    });
  }

  async getAllQrCodes() {
    return this.prisma.qrCode.findMany({
      where: { isActive: true },
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            pharmacy: { select: { name: true } },
          },
        },
      },
      orderBy: { generatedAt: 'desc' },
    });
  }
}
