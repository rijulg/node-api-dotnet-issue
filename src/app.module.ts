import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import ControllersModule from "./controllers";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ControllersModule],
})
export class AppModule {}
