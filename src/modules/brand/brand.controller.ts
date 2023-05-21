import { Controller } from "@nestjs/common";
import { BaseController } from "../base.controller";
import { Brand } from "./brand.entity";
import { BrandService } from "./brand.service";
@Controller("brand")
export class BrandController extends BaseController<Brand> {
  constructor(private readonly Service: BrandService) {
    super(Service);
  }
}
