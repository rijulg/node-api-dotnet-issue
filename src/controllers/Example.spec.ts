import { Test, TestingModule } from "@nestjs/testing";
import ExampleController from "./Example";
import RepositoriesModule from "@/repositories";
import { ConfigModule } from "@nestjs/config";

describe("ExampleController", () => {
  let appController: ExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), RepositoriesModule],
      controllers: [ExampleController],
    }).compile();
    appController = app.get<ExampleController>(ExampleController);
  });

  it('should return "Hello World"', () => {
    expect(appController.getHello()).toBe("Hello World");
  });
});
