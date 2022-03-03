import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(){
        return null;
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(){
        return null;
    }
}
