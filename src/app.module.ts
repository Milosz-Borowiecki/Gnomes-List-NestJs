import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GnomesModule } from './gnomes/gnomes.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: ['**/*.entity.js']
    }),
    GnomesModule,
    AuthModule,
  ],
  providers:[AppService],
  controllers:[AppController],
})
export class AppModule {}
