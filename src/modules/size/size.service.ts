import { Inject, Injectable } from "@nestjs/common";
import { Size } from "./size.entity";
import { BaseService } from "../base.service";
import { DataSource } from "typeorm";
@Injectable()
export class SizeService extends BaseService<Size> {
  constructor(
    @Inject("CONNECTION")
    dataSource: DataSource
  ) {
    super(dataSource.getRepository(Size));
  }
}
