import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Admin - Tableau de bord')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @ApiOperation({ summary: 'Tableau de bord admin', description: 'KPIs globaux de la plateforme' })
  getAdminDashboard() {
    return this.dashboardService.getAdminDashboard();
  }

  @Get('top-vendors')
  @ApiOperation({ summary: 'Top vendeurs', description: 'Classement des meilleurs vendeurs' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'periodType', required: false, enum: ['15_days', 'monthly'] })
  getTopVendors(
    @Query('limit') limit?: number,
    @Query('periodType') periodType?: string,
  ) {
    return this.dashboardService.getTopVendors(limit || 10, periodType);
  }

  @Get('top-pharmacies')
  @ApiOperation({ summary: 'Top pharmacies', description: 'Classement des meilleures pharmacies' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  getTopPharmacies(@Query('limit') limit?: number) {
    return this.dashboardService.getTopPharmacies(limit || 10);
  }

  @Get('recent-activity')
  @ApiOperation({ summary: 'Activité récente', description: 'Dernières ventes enregistrées' })
  getRecentActivity() {
    return this.dashboardService.getRecentActivity();
  }
}
