import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  ManyToMany
} from "typeorm";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Brand } from "../brand";
import { Size } from "../size";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Column({ default: "" })
  @IsString()
  description: string;

  @IsNotEmpty()
  @ManyToOne(() => Brand)
  brand: Brand;

  @IsNotEmpty()
  @ManyToMany(() => Size)
  sizes: Size[];

  @Column({ default: "" })
  @IsString()
  image: string;

  @Column({ default: "" })
  @IsString()
  quality: string;

  @CreateDateColumn()
  createdDate: Date;
}
