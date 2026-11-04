import { join } from 'node:path';

import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { AppController } from "./app.controller";
import { PrismaService } from "./prisma.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

import { ContractorsResolver } from './contractor.resolver';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/generated/schema.gql'),
      playground: false, // Disable the legacy GraphQL Playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()], // Enable Apollo Sandbox
    }),
  ],
  controllers: [
    AppController,
    UsersController
  ],
  providers: [
    PrismaService,
    UsersService,
    ContractorsResolver,
  ],
})
export class AppModule {}
