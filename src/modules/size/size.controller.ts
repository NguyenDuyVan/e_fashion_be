import { Controller } from "@nestjs/common";
import { SizeService } from "./size.service";
import { Size } from "./size.entity";
import { BaseController } from "../base.controller";
@Controller("size")
export class SizeController extends BaseController<Size> {
  constructor(private readonly sizeService: SizeService) {
    super(sizeService);
  }
}
