import { IsNumber, IsString, Max, Min } from "class-validator";

export class EditGnomeDto {

    @IsString()
    name: string;

    @IsNumber()
    @Min(0)
    @Max(100)
    age: number;

    @IsNumber()
    @Min(0)
    @Max(150)
    strength: number;

    @IsString()
    race: string;

}