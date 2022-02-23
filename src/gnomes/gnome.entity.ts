import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gnome {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    strength: number;

    @Column()
    race: string;
}