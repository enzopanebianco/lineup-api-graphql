import { ApolloError } from "apollo-server-express";
import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { UserSchema } from "../schemas/models";
import { Registration, UpdateUser } from "../schemas/inputs";

@Resolver(UserSchema)
export class UserResolver {
    constructor() {
    }

    @Query(() => [UserSchema])
    users() {
        try {
            return UserSchema.find()
        } catch (error) {
            throw new ApolloError(
                "Erro ao trazer lista de usuários", "400"
            )
        }
    }

    @Query(() => UserSchema || ApolloError)
    async user(@Arg("id") id: number) {
        try {
            const user = await UserSchema.findOne({ where: { id } })
            return user
        } catch (error) {
            throw new ApolloError(
                "Nenhum usuário com este id", "404"
            )
        }
    }

    @Mutation(() => UserSchema || ApolloError)
    async registrateUser(@Arg("user") user: Registration) {

        try {

            const findUser = await UserSchema.findOne({ where: { email: user.email } })

            if (findUser) {
                return new ApolloError("Usuário já existente", "400")
            }

            const newUser = await UserSchema.create({
                email: user.email,
                name: user.name,
                password: user.password,
                userTypeId: 1
            }).save()

            return newUser
        }
        catch (error) {
            throw new ApolloError(
                "Erro ao registrar novo usuário", "400"
            )
        }
    }


    @Mutation(() => UserSchema || ApolloError)
    async updateUser(@Arg("id") id: number, @Arg("user") user: UpdateUser) {
        try {
            const findUser = await UserSchema.findOne({ where: { id } })

            if (!findUser) {
                return new ApolloError("Usuário não encontrado", "404")
            }

            await UserSchema.update({ id }, user);

            const updatedUser = await UserSchema.findOne({ where: { id } })

            return updatedUser;
        }
        catch (error) {
            throw new ApolloError(
                "Erro ao atualizar usuário", "400"
            )
        }
    }

    @Mutation(()=>Boolean)
    async removeUser(@Arg("id") id:number){
        try {
            const findUser = await UserSchema.findOne({ where: { id } })

            if (!findUser) {
                return new ApolloError("Usuário não encontrado", "404")
            }

            await UserSchema.delete({id})

            return true

        } catch (error) {
            throw new ApolloError(
                "Erro ao remover usuário", "400"
            )
        }
    }

}