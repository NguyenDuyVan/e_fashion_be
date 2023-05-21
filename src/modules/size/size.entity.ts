import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";
@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ default: "" })
  @IsString()
  description: string;

  @CreateDateColumn()
  createdDate: Date;
}
