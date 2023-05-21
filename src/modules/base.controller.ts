import { Body, Get, Post } from "@nestjs/common";
import { BaseService } from "./base.service";

export class BaseController<T> {
  constructor(private service: BaseService<T>) {}

  @Get()
  async getAll(): Promise<T[]> {
    return await this.service.getAll();
  }

  @Post()
  async create(@Body() payload: T): Promise<T> {
    return await this.service.create(payload);
  }
}
