import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { LineupSchema } from "../schemas/models"
import { CreateLineup } from "../schemas/inputs"

@Resolver(LineupSchema)
export class LineupResolver {
    constructor() {

    }

    @Query(() => [LineupSchema])
    async lineups() {
        return LineupSchema.find()
    }

    @Mutation(() => LineupSchema)
    async createLineup(@Arg("lineup") lineup: CreateLineup): Promise<LineupSchema> {

        const newLineup = await LineupSchema.create({
            title: lineup.title,
            userId: lineup.userId,
            description: lineup.description,
            primaryColor: lineup.primaryColor,
            secondaryColor: lineup.secondaryColor,
            team: lineup?.team,
            formation: lineup.formation
        }).save()

        return newLineup;
    }

}