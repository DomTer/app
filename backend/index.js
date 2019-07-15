const express               = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { User } = require('./models');

const typeDefs = gql`
    type User {
        _id: ID
        mail: String
        password: String
        gender: String
        forename: String
        surname: String
    }
    type Query {
        getUsers: [User]
        getUser(_id:ID!): User   
    }
    type Mutation {
        addUser(mail: String, password: String, gender: String, forename: String, surname: String): User
        deleteUser(_id: ID!): User
    }
`;

const resolvers = {
    Query: {
        getUsers: async () => await User.find({}).exec(),
        getUser: async (_,args) => await  User.findById(args).exec(),
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                let response = await User.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        deleteUser: async (_, args) => {
            try {
                let response = await User.findByIdAndRemove(args);
                return response;
            } catch(e) {
                return e.message;
            }
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);