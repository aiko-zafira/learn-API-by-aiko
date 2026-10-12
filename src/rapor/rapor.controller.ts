import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { RaporService } from './rapor.service.js';
import { HitungNilaiDto } from './dto/hitung.dto.js';

@Controller('nilai')
export class RaporController {
  constructor(private readonly nilaiService: RaporService) {}

  @Post('hitung')
  @HttpCode(200)
  hitungNilai(@Body() hitungNilaiDto: HitungNilaiDto) {
    return this.nilaiService.hitungRapor(hitungNilaiDto);
  }
}
