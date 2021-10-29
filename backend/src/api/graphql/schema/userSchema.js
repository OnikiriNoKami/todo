const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
} = require("graphql");
const graphqlFields = require("graphql-fields");
const { todoType } = require("./todoSchema");
const userController = require("../../database/controllers/userController");

const userType = new GraphQLObjectType({
    name: "User",
    fields: {
        _id: { type: GraphQLID, description: "User id." },
        email: {
            type: GraphQLString,
            description: "User email, is not required.",
        },
        phone: {
            type: GraphQLString,
            description: "User phone, is not required.",
        },
        nickName: {
            type: GraphQLString,
            description: "User nickname, is required.",
        },
        password: {
            type: GraphQLString,
            description: "User password, is required.",
        },
        token: {
            type: GraphQLString,
            description: "Token for authorization.",
        },
        todos: {
            type: GraphQLList(GraphQLString),
            description: "Array of todo ids.",
        },
        userTodos: {
            type: GraphQLList(todoType),
            description: "Fetches from db only when requested.",
        },
    },
    description: "User.",
});

const userQueries = new GraphQLObjectType({
    name: "Queries",
    fields: {
        getUsers: {
            type: new GraphQLList(userType),
            resolve: (_, args, context, info) => {
                const { userTodos } = graphqlFields(info);
                if(userTodos){
                    return userController.getAllWithTodos()
                }
                return userController.getAll();
            },
            description: "Getting userTodos by $lookup."
        },
    },
});

const userMutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        createUser: {
            type: userType,
            args: {
                email: {
                    type: GraphQLString,
                    description: "User email, is not required.",
                },
                phone: {
                    type: GraphQLString,
                    description: "User phone, is not required.",
                },
                nickName: {
                    type:  new GraphQLNonNull(GraphQLString),
                    description: "User nickname, is required.",
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "User password, is required.",
                },
            },
            resolve: (_, {email, phone, nickName, password}) => userController.create({email, nickName, phone, password})
        }
    }
})

const userSchema = new GraphQLSchema({
    query: userQueries,
    mutation: userMutations
});

module.exports = {
    userSchema,
};
