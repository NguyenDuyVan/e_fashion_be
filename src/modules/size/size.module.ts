import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ConnectionProvider } from "src/common/provider";
import { SizeController } from "./size.controller";
import { SizeService } from "./size.service";

@Module({
  imports: [DatabaseModule],
  controllers: [SizeController],
  providers: [...ConnectionProvider, SizeService]
})
export class SizeModule {}
