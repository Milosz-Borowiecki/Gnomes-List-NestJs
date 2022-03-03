import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[UserService],
  providers: [AuthService,PassportModule],
  controllers: [AuthController,LocalStrategy]
})
export class AuthModule {}
