import { Module } from "@nestjs/common";
import { ProductModule } from "./modules/product";
import { BrandModule } from "./modules/brand";

@Module({
  imports: [ProductModule, BrandModule],
  controllers: [],
  providers: []
})
export class AppModule {}
