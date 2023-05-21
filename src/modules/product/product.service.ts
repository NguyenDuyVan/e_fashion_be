import { Inject, Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { BaseService } from "../base.service";
import { DataSource } from "typeorm";
@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @Inject("CONNECTION")
    dataSource: DataSource
  ) {
    super(dataSource.getRepository(Product));
  }
}
