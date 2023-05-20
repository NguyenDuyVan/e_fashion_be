import { DataSource } from "typeorm";
import { ProductEntity } from "./product.entity";
import { FactoryProvider } from "@nestjs/common/interfaces";

export const ProductProvider: FactoryProvider[] = [
  {
    provide: "PRODUCT_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductEntity),
    inject: ["DATA_SOURCE"]
  }
];
