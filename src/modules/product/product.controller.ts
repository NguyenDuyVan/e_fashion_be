import { Body, Controller, Get, Post, Query, Redirect } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductEntity } from "./product.entity";
// import { CreateCatDto } from "./create-cat.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly Service: ProductService) {}

  @Get()
  getAll(): Promise<ProductEntity[]> {
    return this.Service.findAll();
  }

  //   @Get("docs")
  //   @Redirect("https://docs.nestjs.com", 302)
  //   getDocs(@Query("version") version: string) {
  //     if (version && version === "5") {
  //       return { url: "https://docs.nestjs.com/v5/" };
  //     }
  //   }

  //   @Post()`
  //   async create(@Body() createCatDto: CreateCatDto) {
  //     return createCatDto;
  //   }
}
