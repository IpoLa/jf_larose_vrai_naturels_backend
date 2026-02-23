"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrCodesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const QRCode = require("qrcode");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
let QrCodesService = class QrCodesService {
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
    }
    getBaseUrl() {
        return this.configService.get('CLIENT_BASE_URL') || 'http://localhost:3000';
    }
    async generateQrCode(vendorId) {
        await this.prisma.qrCode.updateMany({
            where: { vendorId, isActive: true },
            data: { isActive: false },
        });
        const uniqueKey = (0, uuid_1.v4)();
        const clientUrl = `${this.getBaseUrl()}/auth?card=${uniqueKey}`;
        const qrImageData = await QRCode.toDataURL(clientUrl, {
            width: 300,
            margin: 2,
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
                qrImageData,
                isActive: true,
            },
        });
        return qrCode;
    }
    async regenerateQrCode(vendorId) {
        return this.generateQrCode(vendorId);
    }
    async getVendorQrCode(vendorId) {
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
};
exports.QrCodesService = QrCodesService;
exports.QrCodesService = QrCodesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], QrCodesService);
//# sourceMappingURL=qr-codes.service.js.map