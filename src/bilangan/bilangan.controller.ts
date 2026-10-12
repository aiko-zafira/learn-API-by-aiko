import { Controller, Get, Param } from '@nestjs/common';
import { BilanganService } from './bilangan.service.js';
import { BilanganDto } from './dto/bilangan.dto.js';

@Controller('bilangan')
export class BilanganController {
  constructor(private readonly bilanganService: BilanganService) {}
  @Get(':angka')
prosessBilangan(@Param() dto: BilanganDto){
  return this.bilanganService.prosessBilangan(dto)
}
}
