import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { TransactionsModule } from './modules/transactions/transactions.module'

@Module({
  imports: [
    AuthModule,
    WalletModule,
    TransactionsModule,
  ],
})
export class AppModule {}