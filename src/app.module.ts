import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GnomesModule } from './gnomes/gnomes.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GnomesModule,
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: ['**/*.entity.js']
    }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
