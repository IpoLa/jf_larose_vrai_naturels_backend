import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginAdminDto } from './dto/login-admin.dto';
export declare class AdminAuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginDto: LoginAdminDto): Promise<{
        access_token: string;
        admin: {
            id: string;
            name: string;
            phone: string;
            role: string;
        };
    }>;
    validateAdmin(adminId: string): Promise<{
        id: string;
        phone: string;
        passwordHash: string;
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
