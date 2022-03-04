import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Races } from './dtos/races';
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

    async paginate(options: IPaginationOptions): Promise<Pagination<Gnome>> {
        const queryBuilder = this.repo.createQueryBuilder('c');
        queryBuilder.orderBy('c.name', 'DESC');
    
        return paginate<Gnome>(queryBuilder, options);
      }

      async paginateFilter(options: IPaginationOptions,gnomeType: string): Promise<Pagination<Gnome>>{

        if ((<any>Object).values(Races).includes(gnomeType)) {

            const queryBuilder = this.repo.createQueryBuilder('c').where({
                race: gnomeType
            });
            queryBuilder.orderBy('c.name', 'DESC');
        
            return paginate<Gnome>(queryBuilder, options);
        }

        return null;
    }
}
