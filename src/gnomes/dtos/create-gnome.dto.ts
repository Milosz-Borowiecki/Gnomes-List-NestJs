import { IsEnum, IsNumber, IsString, Max, Min } from "class-validator";
import { Races } from "./races";

export class CreateGnomeDto {

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

    @IsEnum(Races)
    race: Races;

}