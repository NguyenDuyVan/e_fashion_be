import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./modules/product/product.module";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "admin",
      password: "dbpassword",
      database: "e_fashion",
      entities: [],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
