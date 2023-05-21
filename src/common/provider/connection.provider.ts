import { DataSource } from "typeorm";
import { FactoryProvider } from "@nestjs/common/interfaces";

export const ConnectionProvider: FactoryProvider[] = [
  {
    provide: "CONNECTION",
    useFactory: (dataSource: DataSource) => dataSource,
    inject: ["DATA_SOURCE"]
  }
];
