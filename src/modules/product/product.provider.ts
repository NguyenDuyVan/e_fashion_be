import { DataSource } from "typeorm";
import { ProductEntity } from "./product.entity";

export const ProductProvider = [
  {
    provide: "PRODUCT_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductEntity),
    inject: ["DATA_SOURCE"]
  }
];
