import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() body: CreateUserDto){
        return this.authService.register(body.username,body.password);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req){
        return this.authService.login(req.user);
    }
}
