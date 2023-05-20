import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductProvider } from "./product.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [...ProductProvider, ProductService]
})
export class ProductModule {}
