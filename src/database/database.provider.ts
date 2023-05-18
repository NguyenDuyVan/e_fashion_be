import { DataSource } from "typeorm";

export const DatabaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3307,
        username: "admin",
        password: "dbpassword",
        database: "e_fashion",
        entities: [__dirname + "/../**/**/*.entity{.ts,.js}"],
        synchronize: true
      });
      return dataSource.initialize().catch((e) => console.log("asdfasdfsdf", e));
      // return await dataSource.initialize();
    }
  }
];
