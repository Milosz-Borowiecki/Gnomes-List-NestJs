import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[UserService,PassportModule,JwtModule.register({
    secret: 'secretKey',
    signOptions: {expiresIn: '90s'}
  })],
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController,LocalStrategy],
  exports:[AuthService]
})
export class AuthModule {}
