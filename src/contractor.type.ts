import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Contractor {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => [String])
  skills: string[] = [];

  @Field(() => String, { nullable: true })
  githubUrl!: string | null;

  @Field(() => String, { nullable: true })
  linkedinUrl!: string | null;
}
