import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";
import './database/connection';
import "reflect-metadata";
import { LineupResolver, UserResolver } from './resolvers';

(async () => {


    const server = new ApolloServer({
        schema: await buildSchema({

            resolvers: [UserResolver,LineupResolver],
        }),
        formatError: (err) => {
            if (err.message.startsWith('Database Error:')) {
                return new Error("Internal server error")
            }
            return err
        },
        context: ({ req, res }) => ({ req, res })
    })
    server.listen(4000)
}
)()