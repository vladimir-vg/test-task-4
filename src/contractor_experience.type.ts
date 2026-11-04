import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class ContractorExperience {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  company!: string;

  @Field(() => String)
  position!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => GraphQLISODateTime)
  from!: Date;

  @Field(() => GraphQLISODateTime)
  to!: Date;
}