import { IsNotEmpty, IsInt, Min, Max, IsOptional, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class DeretQueryDto {
  @IsNotEmpty({ message: "Query 'jumlah' wajib diisi" })
  @Type(() => Number) 
  @IsInt({ message: "Query 'jumlah' harus berupa bilangan bulat" })
  @Min(1, { message: "Query 'jumlah' minimal berbobot 1" })
  @Max(20, { message: "Query 'jumlah' maksimal berbobot 20" })
  jumlah: number;

  @IsOptional()
  @IsIn(['asc', 'desc'], { message: "Query 'urutan' hanya boleh berisi 'asc' atau 'desc'" })
  urutan?: string = 'asc';
}
