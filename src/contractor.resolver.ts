import { Resolver, Query, ResolveField, Parent, Mutation, Args, ID } from '@nestjs/graphql';
import { Inject } from "@nestjs/common";

import { PrismaService } from './prisma.service';
import { Contractor } from './contractor.type';
import { ContractorExperience } from './contractor_experience.type';
import { ContractorProject } from './contractor_project.type';
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

  @ResolveField(() => [ContractorExperience])
  async experiences(@Parent() contractor: Contractor): Promise<ContractorExperience[]> {
    return this.prisma.contractorExperience.findMany({
      where: { contractorId: contractor.id },
      orderBy: { from: 'desc' },
    });
  }

  @ResolveField(() => [ContractorProject])
  async projects(@Parent() contractor: Contractor): Promise<ContractorProject[]> {
    return this.prisma.contractorProject.findMany({
      where: { contractorId: contractor.id },
      orderBy: { from: 'desc' },
    });
  }
}
