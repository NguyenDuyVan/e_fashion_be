import { Module } from "@nestjs/common";
import { ConnectionProvider } from "src/common/provider";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

@Module({
  // imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...ConnectionProvider, CategoryService]
})
export class CategoryModule {}
