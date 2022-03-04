import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateGnomeDto } from "./dtos/create-gnome.dto";
import { EditGnomeDto } from "./dtos/edit-gnome.dto";
import { GnomesService } from "./gnomes.service";

@Controller('gnomes')
export class GnomesController {

    constructor(private gnomesService: GnomesService){
    }

    @Get('')
    getGnomes(){
        return this.gnomesService.getAll();
    }

    @Get('/:id')
    getGnome(@Param('id') id: string) {
        return this.gnomesService.getById(+id);
    }

    @Post()
    addGnome(@Body() body: CreateGnomeDto) {
        return this.gnomesService.add(body.name,body.strength,body.age,body.race);
    }

    @Delete('/:id')
    @HttpCode(204)
    removeGnome(@Param('id') id: string){
        return this.gnomesService.remove(+id);
    }

    @Patch('/:id')
    editGnome(@Body() body: EditGnomeDto, @Param('id') id: string) {
        return this.gnomesService.edit(+id,body.name,body.strength,body.age,body.race);
    }

}
