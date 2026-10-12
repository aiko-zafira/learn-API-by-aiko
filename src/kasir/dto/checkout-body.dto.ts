import { IsArray, ArrayMinSize, ArrayMaxSize } from 'class-validator';

export class CheckoutBodyDto {
  @IsArray({ message: 'items harus berupa array' })
  @ArrayMinSize(1, { message: 'items tidak boleh kosong' })
  @ArrayMaxSize(10, { message: 'items maksimal 10 item' })
  items: any[];
}
