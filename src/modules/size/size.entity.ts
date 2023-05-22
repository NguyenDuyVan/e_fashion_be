import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Index
} from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";
@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  @Index({ unique: true })
  name: string;

  @Column({ default: "" })
  @IsString()
  description: string;

  @CreateDateColumn()
  createdDate: Date;
}
