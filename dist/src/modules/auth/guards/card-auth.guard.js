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
exports.VendorAuthGuard = exports.CardAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let CardAuthGuard = class CardAuthGuard {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const cardNumber = request.headers['x-card-number'] ||
            request.query['card_number'] ||
            request.body?.card_number;
        if (!cardNumber) {
            throw new common_1.UnauthorizedException('Numéro de carte requis. Veuillez scanner votre QR code.');
        }
        const vendor = await this.prisma.vendor.findUnique({
            where: { uniqueCardNumber: cardNumber },
            include: { pharmacy: true },
        });
        if (vendor) {
            if (vendor.status !== 'active') {
                throw new common_1.UnauthorizedException('Votre compte vendeur est inactif');
            }
            request.cardHolder = { ...vendor, role: 'vendor' };
            request.vendor = vendor;
            return true;
        }
        const delegue = await this.prisma.delegue.findUnique({
            where: { uniqueCardNumber: cardNumber },
        });
        if (delegue) {
            if (delegue.status !== 'active') {
                throw new common_1.UnauthorizedException('Votre compte délégué est inactif');
            }
            request.cardHolder = { ...delegue, role: 'delegue' };
            request.delegue = delegue;
            return true;
        }
        throw new common_1.UnauthorizedException('Numéro de carte invalide');
    }
};
exports.CardAuthGuard = CardAuthGuard;
exports.VendorAuthGuard = CardAuthGuard;
exports.VendorAuthGuard = exports.CardAuthGuard = CardAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CardAuthGuard);
//# sourceMappingURL=card-auth.guard.js.map