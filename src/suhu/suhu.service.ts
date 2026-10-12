import { Injectable } from '@nestjs/common';
import { TemperatureDto } from './dto/temperature.dto.js';

@Injectable()
export class SuhuService {
    convertTemperature(dto: TemperatureDto) {
  const dari = dto.dari.toUpperCase()
  const ke = dto.ke.toUpperCase()
  const nilai = dto.nilai
  let result = nilai

  if (dari === 'CELCIUS'){
    if (ke === 'FAHRENHEIT')result = (nilai* 9)/5+32;
    else if(ke === 'KELVIN')result = nilai + 273,15;
  }
  else if (dari === 'FAHRENHEIT'){
    if (ke === 'CELCIUS') result = ((nilai - 32) * 5) / 9;
    else if(ke === 'KELVIN')result=((nilai - 32)*5)/9+273.15;
  }
  else if(dari === 'KELVIN'){
    if(ke === 'CELCIUS') result = nilai - 273.15;
    else if(ke === 'FAHRENHEIT') result = ((nilai - 273.15)*9)/5+32;
  }
  return{
    nilaiAsal: nilai,
    satuanAsal: dto.dari,
    hasil: Number(result.toFixed(2)),
    satuanHasil: dto.ke
  }
}
}
