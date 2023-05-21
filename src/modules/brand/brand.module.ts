import { Global, Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { BrandController } from "./brand.controller";
import { BrandService } from "./brand.service";
import { ConnectionProvider } from "src/common/provider";

@Module({
  // imports: [DatabaseModule],
  controllers: [BrandController],
  providers: [...ConnectionProvider, BrandService]
})
export class BrandModule {}
