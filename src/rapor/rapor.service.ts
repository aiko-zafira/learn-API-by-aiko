import { Injectable } from '@nestjs/common';
import { HitungNilaiDto } from './dto/hitung.dto.js';

@Injectable()
export class RaporService {
  hitungRapor(dto: HitungNilaiDto) {
    const { nama, tugas, uts, uas } = dto;
    const namaClean = nama.trim();
    const totalTugas = tugas.reduce((total, n) => total + n, 0);
    const rataTugas = totalTugas / tugas.length;
    let nilaiAkhir = (0.3 * rataTugas) + (0.3 * uts) + (0.4 * uas);
        nilaiAkhir = Math.round(nilaiAkhir * 100) / 100;
    let predikat = 'D';
    if (nilaiAkhir >= 90) {
      predikat = 'A';
    } else if (nilaiAkhir >= 80) {
      predikat = 'B';
    } else if (nilaiAkhir >= 70) {
      predikat = 'C';
    }
    const status = nilaiAkhir >= 75 ? 'Lulus' : 'Remedial';
    return {
      nama: namaClean,
      rataTugas: Math.round(rataTugas * 100) / 100, // Opsional: dibulatkan agar rapi
      nilaiAkhir,
      predikat,
      status,
    };
  }
}
