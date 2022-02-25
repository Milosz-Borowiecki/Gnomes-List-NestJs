import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Request, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { multerOptions } from '../config/multerOptions.config';
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
    @UseInterceptors(FileInterceptor('avatar',multerOptions))
    addGnome(@Body() body: CreateGnomeDto,@UploadedFile() avatar) {
        return this.gnomesService.add(body.name,body.strength,body.age,body.race);
    }

    @Delete('/:id')
    @HttpCode(204)
    removeGnome(@Param('id') id: string){
        return this.gnomesService.remove(+id);
    }

    @Patch('/:id')
    editGnome(@Body() body: EditGnomeDto, @Param('id') id: string) {
        return this.gnomesService.edit(+id,body.name,body.strength,body.strength,body.race);
    }

}
