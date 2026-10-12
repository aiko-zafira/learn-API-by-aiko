import { Module } from '@nestjs/common';
import { RaporController } from './rapor.controller.js';
import { RaporService } from './rapor.service.js';  

@Module({
  controllers: [RaporController],
  providers: [RaporService],
})
export class RaporModule {} 
