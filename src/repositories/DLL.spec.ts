import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import DLLRepository from "./DLL";

describe("DLL", () => {
  let repository: DLLRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [DLLRepository],
    }).compile();

    repository = module.get<DLLRepository>(DLLRepository);
  });

  it("loads the DLL", async () => {
    const data = await repository.getHello();
    expect(data).toBe("Hello from DLL");
  });

  it("adds strings DLL", async () => {
    repository.addItem("Hello");
    repository.addItem("World");
    const itemString = repository.getItemString();
    expect(itemString).toBe("Hello,World");
  });

  it("gets items", async () => {
    repository.getItems();
  });
});
