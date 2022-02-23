import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GnomesModule } from './gnomes/gnomes.module';

@Module({
  imports: [GnomesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
