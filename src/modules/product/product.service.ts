import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @Inject("PRODUCT_REPOSITORY")
    private productRepository: Repository<ProductEntity>
  ) {}

  async findAll(): Promise<ProductEntity[]> {
    return this.productRepository.find();
  }
}
