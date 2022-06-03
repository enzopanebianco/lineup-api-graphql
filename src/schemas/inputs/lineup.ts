import { Field, InputType } from "type-graphql";
import { PrimaryGeneratedColumn } from "typeorm";

@InputType()
export class CreateLineup{
    @PrimaryGeneratedColumn()
   id: number

   @Field(() => Number)
   userId: number

   @Field(() => String)
   title: string

   @Field(() => String,{nullable:true})
   description?: string

   @Field(() => String)
   primaryColor: string

   @Field(() => String)
   secondaryColor: string

   @Field(() => String,{nullable:true})
   team?: string

   @Field(() => String)
   formation: string
}