import { Injectable } from '@nestjs/common';
import { scryptSync, timingSafeEqual } from 'crypto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,private jwtService: JwtService){};

    async validateUser(username: string,pass: string): Promise<any>{
        const userValid = await this.userService.findOne(username);

        const [salt, key] = userValid.password.split(':');
        const hashedBuffer = scryptSync(pass,salt,64);

        const keyBuffer = Buffer.from(key,'hex');
        const match = timingSafeEqual(hashedBuffer,keyBuffer);

        if (userValid && match) {
            const { password, ...result } = userValid;
            return result;
        }
        return null;
    }

    async login(user:any): Promise<any>{
        const payload = { username: user.username, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }

    async register(username: any,password: any): Promise<any>{
        return await this.userService.create(username,password);
    }
}
