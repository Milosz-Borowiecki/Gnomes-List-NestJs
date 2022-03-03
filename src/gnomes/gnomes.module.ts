import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtStrategy } from 'src/auth/jwt-strategy';
import { Gnome } from './gnome.entity';
import { GnomesController } from './gnomes.controller';
import { GnomesService } from './gnomes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gnome]),JwtAuthGuard,JwtStrategy],
  controllers: [GnomesController],
  providers: [GnomesService]
})
export class GnomesModule {}
