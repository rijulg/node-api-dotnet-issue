import DLLRepository from "./DLL";
import { Module } from "@nestjs/common";

@Module({
  providers: [DLLRepository],
  exports: [DLLRepository],
})
export default class {}
