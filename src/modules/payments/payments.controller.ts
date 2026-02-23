import { Controller, Get, Put, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Admin - Paiements')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  @ApiOperation({
    summary: 'Liste des paiements/commissions',
    description: 'Toutes les périodes avec commissions calculées',
  })
  @ApiQuery({ name: 'vendorId', required: false })
  @ApiQuery({ name: 'status', required: false, enum: ['pending', 'paid'] })
  @ApiQuery({ name: 'periodType', required: false, enum: ['15_days', 'monthly'] })
  getAll(
    @Query('vendorId') vendorId?: string,
    @Query('status') status?: string,
    @Query('periodType') periodType?: string,
  ) {
    return this.paymentsService.getAllPayments({ vendorId, status, periodType });
  }

  @Get('pending')
  @ApiOperation({ summary: 'Paiements en attente', description: 'Commissions non encore payées' })
  getPending() {
    return this.paymentsService.getAllPendingPayments();
  }

  @Get('summary')
  @ApiOperation({ summary: 'Résumé des paiements', description: 'Total payé et en attente' })
  getSummary() {
    return this.paymentsService.getPaymentSummary();
  }

  @Put(':id/mark-paid')
  @ApiOperation({
    summary: 'Marquer un paiement comme effectué',
    description: 'Confirme le paiement de la commission pour une période',
  })
  @ApiParam({ name: 'id', description: 'ID de la période de paiement' })
  @ApiResponse({ status: 200, description: 'Paiement marqué comme effectué' })
  markAsPaid(@Param('id') id: string) {
    return this.paymentsService.markAsPaid(id);
  }
}
