import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@ObjectType({isAbstract:true})
@Entity("Lineups")
export class LineupSchema extends BaseEntity {

   @PrimaryGeneratedColumn()
   id: number

   @Field(() => Number)
   @Column()
   userId: number

   @Field(() => String)
   @Column()
   title: string

   @Field(() => String)
   @Column()
   description: string

   @Field(() => String)
   @Column()
   primaryColor: string

   @Field(() => String)
   @Column()
   secondaryColor: string

   @Field(() => String)
   @Column()
   createdAt: Date

   @Field(() => String)
   @Column()
   updatedAt: Date

   @Field(() => String)
   @Column()
   team?: string

   @Field(() => String)
   @Column()
   formation: string
}
{
}

