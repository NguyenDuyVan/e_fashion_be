import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Brand } from "../brand";

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
  @JoinColumn()
  brandId: Brand;

  // @IsNotEmpty()
  // @ManyToOne(() => Brand)
  // @JoinColumn()
  // brandId: Brand;
}
