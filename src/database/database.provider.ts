import { FactoryProvider } from "@nestjs/common";
import { DataSource } from "typeorm";

export const DatabaseProviders: FactoryProvider[] = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3307,
        username: "admin",
        password: "admin",
        database: "e_fashion",
        entities: [__dirname + "/../modules/**/*.entity{.ts,.js}"],
        synchronize: true
      });
      return await dataSource.initialize();
    }
  }
];
