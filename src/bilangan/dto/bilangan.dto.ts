import { IsInt, Min, Max, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer'; // <-- Pastikan ini diimpor

export class BilanganDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt({ message: 'angka must be an integer number' })
  @Min(1, { message: 'angka must not be less than 1' })
  @Max(100, { message: 'angka must not be greater than 100' })
  angka: number;
}
