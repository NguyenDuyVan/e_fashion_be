import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../base.service";
import { Brand } from "./brand.entity";
import { DataSource } from "typeorm";
@Injectable()
export class BrandService extends BaseService<Brand> {
  constructor(
    @Inject("CONNECTION")
    dataSource: DataSource
  ) {
    super(dataSource.getRepository(Brand));
  }
}
