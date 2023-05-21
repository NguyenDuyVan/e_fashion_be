import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ default: "" })
  @IsString()
  description: string;

  @Column({ default: "" })
  @IsString()
  image: string;
}
