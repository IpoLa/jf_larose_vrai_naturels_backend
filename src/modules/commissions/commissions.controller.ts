import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { CommissionsService } from './commissions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCommissionRuleDto, UpdateCommissionRuleDto } from './dto/commission-rule.dto';

@ApiTags('Admin - Commissions')
@ApiBearerAuth('JWT-Admin')
@UseGuards(JwtAuthGuard)
@Controller('admin/commissions')
export class CommissionsController {
  constructor(private readonly commissionsService: CommissionsService) {}

  @Get('rules')
  @ApiOperation({
    summary: 'Obtenir toutes les règles de commission',
    description: 'Retourne toutes les règles de commission actives et inactives',
  })
  @ApiResponse({ status: 200, description: 'Liste des règles de commission' })
  getAllRules() {
    return this.commissionsService.getAllRules();
  }

  @Post('rules')
  @ApiOperation({
    summary: 'Créer une nouvelle règle de commission',
    description: 'Ajouter une nouvelle règle de palier de commission',
  })
  @ApiResponse({ status: 201, description: 'Règle créée avec succès' })
  createRule(@Body() dto: CreateCommissionRuleDto) {
    return this.commissionsService.createRule(dto);
  }

  @Put('rules/:id')
  @ApiOperation({
    summary: 'Modifier une règle de commission',
    description: 'Mettre à jour les paramètres d\'une règle de commission existante',
  })
  @ApiParam({ name: 'id', description: 'ID de la règle de commission' })
  @ApiResponse({ status: 200, description: 'Règle mise à jour avec succès' })
  updateRule(@Param('id') id: string, @Body() dto: UpdateCommissionRuleDto) {
    return this.commissionsService.updateRule(id, dto);
  }

  @Delete('rules/:id')
  @ApiOperation({ summary: 'Supprimer une règle de commission' })
  @ApiParam({ name: 'id', description: 'ID de la règle de commission' })
  @ApiResponse({ status: 200, description: 'Règle supprimée avec succès' })
  deleteRule(@Param('id') id: string) {
    return this.commissionsService.deleteRule(id);
  }
}
