import { Injectable, BadRequestException } from '@nestjs/common';
import { CheckoutBodyDto } from './dto/checkout-body.dto.js';
import { KasirQueryDto } from './dto/kasir-query.dto.js';

@Injectable()
export class KasirService {
  checkout(memberParam: string, query: KasirQueryDto, body: CheckoutBodyDto) {
    const member = memberParam.toLowerCase();
    const metode = query.metode.toLowerCase();
    const { items } = body;
    const diskonMember = { reguler: 0, silver: 5, gold: 10 };
    if (!(member in diskonMember)) {
      throw new BadRequestException("Params 'member' hanya boleh 'reguler', 'silver', atau 'gold'");
    }
    this.validasiItems(items);
    const persenDiskon = diskonMember[member as keyof typeof diskonMember];
    return this.hitungTotal(member, metode, items, persenDiskon);
  }

  private validasiItems(items: any[]) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const urutan = i + 1;

      if (!item || typeof item !== 'object') {
        throw new BadRequestException(`Item ke-${urutan}: format item tidak valid`);
      }
      if (!item.nama || typeof item.nama !== 'string' || item.nama.trim() === '') {
        throw new BadRequestException(`Item ke-${urutan}: nama harus berupa string dan tidak boleh kosong`);
      }
      if (typeof item.harga !== 'number' || item.harga <= 0) {
        throw new BadRequestException(`Item ke-${urutan}: harga harus lebih dari 0`);
      }
      if (typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0) {
        throw new BadRequestException(`Item ke-${urutan}: qty harus bilangan bulat lebih dari 0`);
      }
    }
  }

  private hitungTotal(member: string, metode: string, items: any[], persenDiskon: number) {
    const rincian = [];
    let totalItem = 0;
    let subtotal = 0;

    for (const item of items) {
      const subtotalItem = item.harga * item.qty;
      
      rincian.push({
        nama: item.nama,
        harga: item.harga,
        qty: item.qty,
        subtotal: subtotalItem,
      });

      totalItem += item.qty;
      subtotal += subtotalItem;
    }
    const diskon = (subtotal * persenDiskon) / 100;
    const setelahDiskon = subtotal - diskon;   
    const biayaAdmin = metode === 'qris' ? (setelahDiskon * 1) / 100 : 0;
    const total = setelahDiskon + biayaAdmin;
    return {
      member,
      metode,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      total,
    };
  }
}
