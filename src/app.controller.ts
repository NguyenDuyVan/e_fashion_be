import { Body, Controller, Get, Post, Query, Redirect } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateCatDto } from "./create-cat.dto";

@Controller("cat")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("findAll")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("docs")
  @Redirect("https://docs.nestjs.com", 302)
  getDocs(@Query("version") version: string) {
    if (version && version === "5") {
      return { url: "https://docs.nestjs.com/v5/" };
    }
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }
}
