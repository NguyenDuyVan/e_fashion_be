import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../base.service";
import { Category } from "./category.entity";
import { DataSource } from "typeorm";
@Injectable()
export class CategoryService extends BaseService<Category> {
  constructor(
    @Inject("CONNECTION")
    dataSource: DataSource
  ) {
    super(dataSource.getRepository(Category));
  }
}
