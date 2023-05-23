import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
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

  @CreateDateColumn()
  createdDate: Date;
}
