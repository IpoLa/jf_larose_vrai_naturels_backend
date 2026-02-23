import { AdminAuthService } from './admin-auth.service';
import { LoginAdminDto } from './dto/login-admin.dto';
export declare class AdminAuthController {
    private readonly authService;
    constructor(authService: AdminAuthService);
    login(loginDto: LoginAdminDto): Promise<{
        access_token: string;
        admin: {
            id: string;
            name: string;
            phone: string;
            role: string;
        };
    }>;
}
