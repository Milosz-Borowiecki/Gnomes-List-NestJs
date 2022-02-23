import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gnome } from './gnome.entity';

@Injectable()
export class GnomesService {

    constructor(@InjectRepository(Gnome) private repo: Repository<Gnome>){}

}
