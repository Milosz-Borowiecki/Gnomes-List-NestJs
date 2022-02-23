import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateGnomeDto {

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsNumber()
    @Min(0)
    @Max(150)
    strength: number;

    @IsString()
    race: string;

}