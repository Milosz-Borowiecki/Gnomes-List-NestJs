import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gnome } from './gnome.entity';

@Injectable()
export class GnomesService {

    constructor(@InjectRepository(Gnome) private repo: Repository<Gnome>){}

    getAll(){
        return this.repo.find();
    }

    getById(id: number){
        return this.repo.findOne(id);
    }

    add(name: string,strength: number,age: number,race: string) {

        if(race === "rock"){
            const newGnome = this.repo.create({name,strength,age,race});
            return this.repo.save(newGnome);
        }

        if(strength <= 100){
            const newGnome = this.repo.create({name,strength,age,race});
            return this.repo.save(newGnome);
        }

        return {error: "The strength must be lower or equal 100"};
    }

    async remove(id: number){
        const gnome = await this.repo.findOne(id);
        this.repo.remove(gnome);
    }

    async edit(id: number,name: string,strength: number,age: number,race: string){
        const gnome = await this.repo.findOne(id);

        if(race === "rock"){
            gnome.name = name;
            gnome.age = age;
            gnome.race = race;
            gnome.strength = strength;

            return this.repo.save(gnome);
        }

        if(strength <= 100){
            gnome.name = name;
            gnome.age = age;
            gnome.race = race;
            gnome.strength = strength;

            return this.repo.save(gnome);
        }

        return {error: "The strength must be lower or equal 100"};
    }
}
