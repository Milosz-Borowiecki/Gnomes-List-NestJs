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
        
    }

    @Get('/:id')
    getGnome(@Param('id') id: string) {
        
    }

    @Post()
    addGnome(@Body() body: CreateGnomeDto) {
        
    }

    @Delete('/:id')
    @HttpCode(204)
    removeGnome(@Param('id') id: string){
        
    }

    @Patch('/:id')
    editGnome(@Body() body: EditGnomeDto, @Param('id') id: string) {
        
    }

}
