import { Module } from '@nestjs/common';
import { BatidasController } from './batidas.controller';
import { BatidasService } from './batidas.service';

@Module({
  controllers: [BatidasController],
  providers: [BatidasService]
})
export class BatidasModule {}
