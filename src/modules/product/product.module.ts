import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { DatabaseModule } from "src/database/database.module";
import { ConnectionProvider } from "src/common/provider";

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [...ConnectionProvider, ProductService]
})
export class ProductModule {}
