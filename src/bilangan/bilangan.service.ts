import { Injectable } from '@nestjs/common';
import { BilanganDto } from './dto/bilangan.dto.js';
import { IsBoolean } from 'class-validator';

@Injectable()
export class BilanganService {
    prosessBilangan(dto: BilanganDto){
        const angkaInput = dto.angka
        return{
            Angka: angkaInput,
            Jenis: angkaInput % 2 === 0 ? 'Genap' : 'Ganjil',
            Kuadrat: angkaInput*angkaInput,
            Bilangan5: angkaInput % 5 === 0 ? 'True' : 'Fasle'
        }
    }
}