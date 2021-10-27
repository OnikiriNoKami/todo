const { gql } = require("apollo-server-express");

const typeDef = gql`
    type Todo {
        id: ID!
        title: String!
        description: String
        user: User!
    }

    type User {
        id: ID!
        email: Email
    }

    type Email {
        email: String!
    }

    type Query {
        getUser(id: ID!): User
    }

`;
module.exports = typeDef;