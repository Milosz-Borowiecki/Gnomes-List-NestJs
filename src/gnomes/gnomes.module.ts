import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gnome } from './gnome.entity';
import { GnomesController } from './gnomes.controller';
import { GnomesService } from './gnomes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gnome])],
  controllers: [GnomesController],
  providers: [GnomesService]
})
export class GnomesModule {}
