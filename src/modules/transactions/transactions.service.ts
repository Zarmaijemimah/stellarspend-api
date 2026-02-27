import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  getStatus() {
    return { module: 'Transactions', status: 'Working' };
  }
}