import "reflect-metadata";
import express from "express";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "./src/app.module";

const expressApp = express();
const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
await nestApp.init();

export default expressApp;