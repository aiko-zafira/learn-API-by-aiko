import { IsNotEmpty, IsIn } from 'class-validator';

export class KasirQueryDto {
  @IsNotEmpty({ message: "Query 'metode' wajib diisi" })
  @IsIn(['tunai', 'qris'], { message: "Query 'metode' hanya boleh 'tunai' atau 'qris'" })
  metode: string;
}
