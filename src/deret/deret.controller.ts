import { Controller, Get, Param, Query } from '@nestjs/common';
import { DeretService } from './deret.service.js';
import { DeretQueryDto } from './dto/jenis.dto.js';

@Controller('deret')
export class DeretController {
  constructor(private readonly deretService: DeretService) {}

  @Get(':jenis')
  getDeret(
    @Param('jenis') jenis: string,
    @Query() query: DeretQueryDto,
  ) {
    return this.deretService.generate(jenis, query);
  }
}
