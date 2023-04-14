import { Controller, Get } from "@nestjs/common";

@Controller()
export default class ExampleController {
  constructor() {}

  @Get()
  getHello(): string {
    return "Hello World";
  }
}
