import { ObjectType,Field } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType({description:"The user model"})
@Entity("Users")
export class UserSchema extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Field(()=>String)
    @Column()
    name: string

    @Field({nullable:true})
    @Column({select:false})
    password: string

    @Field(()=>String)
    @Column()
    email: string

    @Field(()=>String,{nullable:true})
    @Column({nullable:true})   
    linkedin?: string

    @Field(()=>String,{nullable:true})
    @Column({nullable:true})
    twitter?: string

    @Field(()=>String,{nullable:true})
    @Column({nullable:true})
    instagram?: string

    @Field(()=>Number)
    @Column()
    userTypeId: number

    @Field(()=>Date)
    @Column()
    createdAt?: Date

    @Field(()=>Date)
    @Column()
    updatedAt?: Date

    @Field(()=>String,{nullable:true})
    @Column({nullable:true})
    about?: string

    @Field(()=>String,{nullable:true})
    @Column({nullable:true})
    avatar?: string


}


@ObjectType()
export class Error{
    constructor(newMessage:string){
        this.message = newMessage
    }

    @Field()
    message:string;
}


