import { Module } from "@nestjs/common";
import { BrandController } from "./brand.controller";
import { BrandService } from "./brand.service";
import { ConnectionProvider } from "src/common/provider";

@Module({
  controllers: [BrandController],
  providers: [...ConnectionProvider, BrandService]
})
export class BrandModule {}
