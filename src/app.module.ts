import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatidasModule } from './batidas/batidas.module';

@Module({
  imports: [BatidasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
