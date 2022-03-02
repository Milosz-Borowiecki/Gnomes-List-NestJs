import { Injectable } from '@nestjs/common';
import { scryptSync, timingSafeEqual } from 'crypto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){};

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
}
