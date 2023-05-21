import { Controller } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { BaseController } from "../base.controller";

@Controller("product")
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }
}
