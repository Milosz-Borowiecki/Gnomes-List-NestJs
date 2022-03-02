import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes, scryptSync } from 'crypto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    async findOne(username: string): Promise<User | undefined>{
        return this.repo.findOne({ username });
    }

    async create(username: string,password: string): Promise<any>{
        const salt = randomBytes(16).toString('hex');
        const hashedPassword = scryptSync(password,salt,64).toString('hex');

        const newUser = this.repo.create({username,password:`${salt}:${hashedPassword}`});
        this.repo.save(newUser);
        return true;
    }
}
