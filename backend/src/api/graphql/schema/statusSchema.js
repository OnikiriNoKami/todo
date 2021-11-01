const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
} = require("graphql");
const statusController = require("../../database/controllers/statusController");

const statusType = new GraphQLObjectType({
    name: "Status",
    fields: {
        _id: { type: GraphQLID, description: "Id of a status" },
        title: {
            type: GraphQLString,
            require: true,
            description: "Title for the todo status, type of string.",
        },
    },
    description: "It's a todos status.",
});

const statusQueries = new GraphQLObjectType({
    name: "Queries",
    fields: {
        statuses: {
            type: new GraphQLList(statusType),
            resolve: (_,args,context,info) => statusController.getAll(),
        },
        getStatusById: {
            type: statusType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (_, {id}) => statusController.getById(id)
        },
        getStatusByTitle: {
            type: statusType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {title})=> statusController.getByTitle(title)
        }
    },
});

const statusMutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createStatus: {
            type: statusType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { title }) => statusController.create(title),
        },
        deleteStatus: {
            type: statusType,
            args:{
                _id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (_, { _id }) => statusController.findOneAndRemove(_id)
        }
    },
});

const statusSchema = new GraphQLSchema({
    query: statusQueries,
    mutation: statusMutations,
});

module.exports = statusSchema;
