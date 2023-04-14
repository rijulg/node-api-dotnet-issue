import { Module } from "@nestjs/common";
import RepositoriesModule from "@/repositories";

@Module({
  imports: [RepositoriesModule],
})
export default class {}
