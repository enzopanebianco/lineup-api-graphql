import { Field, InputType } from "type-graphql"


@InputType()
export class Registration{
    @Field()
    name:string

    @Field()
    email:string

    @Field()
    password:string

}

@InputType()
export class UpdateUser{
    @Field()
    name:string

    @Field()
    email:string

    @Field({nullable:true})
    password:string

}


class ComplementRegistrate{

}