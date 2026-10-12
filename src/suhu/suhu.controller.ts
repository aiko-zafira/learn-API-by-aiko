import { Controller, Get, Query } from '@nestjs/common';
import { SuhuService } from './suhu.service.js';
import { TemperatureDto } from './dto/temperature.dto.js';

@Controller('suhu')
export class SuhuController {
  constructor(private readonly suhuService: SuhuService) {}
  @Get('konversi')
  convertTemperature(@Query() dto: TemperatureDto){
    return this.suhuService.convertTemperature(dto)
  }
}
