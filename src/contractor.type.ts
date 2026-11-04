import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Contractor {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description!: string | null;

  @Field(() => [String])
  skills: string[] = [];

  @Field({ nullable: true })
  githubUrl!: string | null;

  @Field({ nullable: true })
  linkedinUrl!: string | null;
}
