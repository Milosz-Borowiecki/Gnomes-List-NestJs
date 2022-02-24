import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GnomesModule } from './gnomes/gnomes.module';

@Module({
  imports: [
    GnomesModule,
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: ['**/*.entity.js']
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
