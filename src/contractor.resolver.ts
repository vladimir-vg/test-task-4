import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Inject } from "@nestjs/common";

import { PrismaService } from './prisma.service';
import { Contractor } from './contractor.type';
import { VLADIMIR_CONTRACTOR_ID } from "./lib/utils";



@Resolver(() => Contractor)
export class ContractorsResolver {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  @Query(() => Contractor, { nullable: true })
  async profile(): Promise<Contractor | null> {
    return this.prisma.contractor.findUnique({
      where: { id: VLADIMIR_CONTRACTOR_ID },
    });
  }
}