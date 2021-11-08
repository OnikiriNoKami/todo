const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
} = require("graphql");

const paginationType = new GraphQLObjectType({
    name: "Pagination",
    fields: {
        hasNext: {
            type: GraphQLBoolean,
            description: "indicates if next page exist",
        },
        hasPrev: {
            type: GraphQLBoolean,
            description: "indicates if previous page exist",
        },
        limit: {
            type: GraphQLInt,
            description: "limit of documents",
        },
        page: {
            type: GraphQLInt,
            description: "current page",
        },
        totalCount: {
            type: GraphQLInt,
            description: "total documents",
        }
    },
});

module.exports = paginationType;
