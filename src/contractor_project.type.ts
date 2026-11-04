import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class ContractorProject {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => String, { nullable: true })
  url!: string | null;

  @Field(() => GraphQLISODateTime, { nullable: true })
  from!: Date | null;

  @Field(() => GraphQLISODateTime, { nullable: true })
  to!: Date | null;
}