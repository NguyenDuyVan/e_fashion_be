import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsString()
  description: string;

  @Column()
  @IsString()
  image: string;
}
