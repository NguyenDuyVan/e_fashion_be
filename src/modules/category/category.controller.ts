import { Controller } from "@nestjs/common";
import { BaseController } from "../base.controller";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
@Controller("category")
export class CategoryController extends BaseController<Category> {
  constructor(private readonly Service: CategoryService) {
    super(Service);
  }
}
