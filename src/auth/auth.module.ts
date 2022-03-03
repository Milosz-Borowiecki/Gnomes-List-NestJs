import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[UserModule,PassportModule,JwtModule.register({
    secret: 'secretKey',
    signOptions: {expiresIn: '90s'}
  }),
],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
