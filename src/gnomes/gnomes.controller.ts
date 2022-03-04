import { Body, Controller, DefaultValuePipe, Delete, Get, HttpCode, Param, ParseEnumPipe, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateGnomeDto } from "./dtos/create-gnome.dto";
import { EditGnomeDto } from "./dtos/edit-gnome.dto";
import { Gnome } from './gnome.entity';
import { GnomesService } from "./gnomes.service";

@Controller('gnomes')
export class GnomesController {

    constructor(private gnomesService: GnomesService){
    }

    @Get('')
    getGnomes(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit: number = 2,
    ): Promise<Pagination<Gnome>> {
        limit = limit > 100 ? 100 : limit;
        return this.gnomesService.paginate({
            page,
            limit,
            route: 'http://localhost:3000/gnomes',
        });
    }

    @Get('/:type')
    getGnomesByType(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit: number = 2,
        @Param('type') gnomeType: string,
    ): Promise<Pagination<Gnome>>
     {
        limit = limit > 100 ? 100 : limit;
        return this.gnomesService.paginateFilter({
            page,
            limit,
            route: 'http://localhost:3000/gnomes/'+gnomeType,
        },gnomeType);
    }

    @Get('/:id')
    getGnome(@Param('id') id: string) {
        return this.gnomesService.getById(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    addGnome(@Body() body: CreateGnomeDto) {
        return this.gnomesService.add(body.name,body.strength,body.age,body.race);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    @HttpCode(204)
    removeGnome(@Param('id') id: string){
        return this.gnomesService.remove(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/:id')
    editGnome(@Body() body: EditGnomeDto, @Param('id') id: string) {
        return this.gnomesService.edit(+id,body.name,body.strength,body.age,body.race);
    }

}
