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
import { Category } from "../category";

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

  @Column({ default: "" })
  @IsString()
  image: string;

  @Column({ default: "" })
  @IsString()
  quality: string;

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

  @ManyToOne(() => Category)
  category: Category;

  @CreateDateColumn()
  createdDate: Date;
}
