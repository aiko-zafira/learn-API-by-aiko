import { Injectable, BadRequestException } from '@nestjs/common';
import { DeretQueryDto } from './dto/jenis.dto.js';

@Injectable()
export class DeretService {
  generate(jenis: string, query: DeretQueryDto) {
    const { jumlah, urutan } = query;
    const jenisDiizinkan = ['ganjil', 'genap', 'kuadrat'];
    if (!jenisDiizinkan.includes(jenis)) {
      throw new BadRequestException("Jenis deret hanya boleh: 'ganjil', 'genap', atau 'kuadrat'");
    }
    const data: number[] = [];
    let total = 0;
    for (let i = 1; i <= jumlah; i++) {
      let nilai = 0;

      if (jenis === 'ganjil') {
        nilai = 2 * i - 1;
      } else if (jenis === 'genap') {
        nilai = 2 * i;
      } else if (jenis === 'kuadrat') {
        nilai = i * i;
      }

      data.push(nilai);
      total += nilai;
    }

    if (urutan === 'desc') {
      data.reverse();
    }

    return {
  jenis,
  jumlah,
  urutan,
  data: data.join(', '),
  total,
};
}
}
