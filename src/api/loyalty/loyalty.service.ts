import { Injectable } from '@nestjs/common';

@Injectable()
export class LoyaltyService {
  addPoints(key: string, time: number) {
    console.log('addPoints', key, time);
  }
}
