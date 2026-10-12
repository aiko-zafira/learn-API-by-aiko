import { IsNotEmpty, IsString, IsArray, IsNumber, Min, Max, ArrayMinSize } from 'class-validator';

export class HitungNilaiDto {
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  @IsString({ message: 'Nama harus berupa string' })
  nama: string;

  @IsArray({ message: 'Tugas harus berupa array' })
  @ArrayMinSize(1, { message: 'Tugas harus berisi minimal 1 angka' })
  @IsNumber({}, { each: true, message: 'Setiap nilai tugas harus berupa angka' })
  @Min(0, { each: true, message: 'Nilai tugas minimal 0' })
  @Max(100, { each: true, message: 'Nilai tugas maksimal 100' })
  tugas: number[];

  @IsNumber({}, { message: 'UTS harus berupa angka' })
  @Min(0, { message: 'Nilai UTS minimal 0' })
  @Max(100, { message: 'Nilai UTS maksimal 100' })
  uts: number;

  @IsNumber({}, { message: 'UAS harus berupa angka' })
  @Min(0, { message: 'Nilai UAS minimal 0' })
  @Max(100, { message: 'Nilai UAS maksimal 100' })
  uas: number;
}
