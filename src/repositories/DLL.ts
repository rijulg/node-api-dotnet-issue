import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { load as loadDLL } from "node-api-dotnet";

@Injectable()
export default class DLLRepository {
  private readonly helloClass: any;
  constructor(configService: ConfigService) {
    const dllPath = configService.getOrThrow("DLL_PATH");
    const dll = loadDLL(dllPath);
    this.helloClass = new dll.HelloDll();
  }
  getHello() {
    return this.helloClass.Hello();
  }
}
