import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable
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
  @JoinColumn()
  brand: Brand;

  @IsNotEmpty()
  @ManyToMany(() => Size)
  @JoinTable({
    name: "product_size",
    joinColumn: {
      name: "product",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "size",
      referencedColumnName: "id"
    }
  })
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
