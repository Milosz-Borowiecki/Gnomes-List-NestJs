import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports:[UserService,PassportModule,JwtModule.register({
    secret: 'secretKey',
    signOptions: {expiresIn: '90s'}
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController,LocalStrategy],
  exports:[AuthService,JwtStrategy,JwtAuthGuard]
})
export class AuthModule {}
