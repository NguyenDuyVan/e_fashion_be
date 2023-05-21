import { Module } from "@nestjs/common";
import { ProductModule } from "./modules/product";
import { BrandModule } from "./modules/brand";
import { CategoryModule } from "./modules/category";
import { SizeModule } from "./modules/size";

@Module({
  imports: [ProductModule, BrandModule, CategoryModule, SizeModule],
  controllers: [],
  providers: []
})
export class AppModule {}
