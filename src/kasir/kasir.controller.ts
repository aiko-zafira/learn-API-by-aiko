import { Controller, Post, Param, Query, Body, HttpCode } from '@nestjs/common';
import { KasirService } from './kasir.service.js';
import { KasirQueryDto } from './dto/kasir-query.dto.js';
import { CheckoutBodyDto } from './dto/checkout-body.dto.js';

@Controller('kasir')
export class KasirController {
  constructor(private readonly kasirService: KasirService) {}

  @Post('checkout/:member')
  @HttpCode(200)
  checkout(
    @Param('member') member: string,
    @Query() query: KasirQueryDto,
    @Body() body: CheckoutBodyDto,
  ) {
    return this.kasirService.checkout(member, query, body);
  }
}