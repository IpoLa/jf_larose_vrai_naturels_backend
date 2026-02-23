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
exports.AdminAuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdminAuthService = class AdminAuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const admin = await this.prisma.adminUser.findUnique({
            where: { phone: loginDto.phone },
        });
        if (!admin) {
            throw new common_1.UnauthorizedException('Numéro de téléphone ou mot de passe incorrect');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, admin.passwordHash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Numéro de téléphone ou mot de passe incorrect');
        }
        const payload = { sub: admin.id, phone: admin.phone, role: admin.role };
        const token = this.jwtService.sign(payload);
        return {
            access_token: token,
            admin: {
                id: admin.id,
                name: admin.name,
                phone: admin.phone,
                role: admin.role,
            },
        };
    }
    async validateAdmin(adminId) {
        return this.prisma.adminUser.findUnique({ where: { id: adminId } });
    }
};
exports.AdminAuthService = AdminAuthService;
exports.AdminAuthService = AdminAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AdminAuthService);
//# sourceMappingURL=admin-auth.service.js.map