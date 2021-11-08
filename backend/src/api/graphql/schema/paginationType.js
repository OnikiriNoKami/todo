const {
    GraphQLObjectType,
    GraphQLString,
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
            type: GraphQLString,
            description: "limit of documents",
        },
        page: {
            type: GraphQLString,
            description: "current page",
        },
        totalCount: {
            type: GraphQLString,
            description: "total documents",
        }
    },
});

module.exports = paginationType;
