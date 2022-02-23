import { Module } from '@nestjs/common';
import { GnomesController } from './gnomes.controller';
import { GnomesService } from './gnomes.service';

@Module({
  controllers: [GnomesController],
  providers: [GnomesService]
})
export class GnomesModule {}
