// src/modules/qr-codes/qr-codes.service.ts

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
    // Deactivate old QR codes (Single Responsibility – clear old before create)
    await this.prisma.qrCode.updateMany({
      where: { vendorId, isActive: true },
      data: { isActive: false },
    });

    const uniqueKey = uuidv4();
    const clientUrl = `${this.getBaseUrl()}/auth?card=${uniqueKey}`;

    const qrImageData = await QRCode.toDataURL(clientUrl, {
      width: 240,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: { dark: '#1a472a', light: '#ffffff' },
    });

    await this.prisma.vendor.update({
      where: { id: vendorId },
      data: { uniqueCardNumber: uniqueKey },
    });

    const qrCode = await this.prisma.qrCode.create({
      data: {
        vendorId,
        uniqueKey,
        qrUrl: clientUrl,
        qrImageData,       // now fits in TEXT
        isActive: true,
      },
    });

    return qrCode;
  }

  async regenerateQrCode(vendorId: string) {
    return this.generateQrCode(vendorId); // reuse logic (DRY)
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