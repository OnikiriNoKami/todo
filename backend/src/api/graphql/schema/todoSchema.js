const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
} = require("graphql");

const todoType = new GraphQLObjectType({
    name: "Todo",
    fields: {
        _id: { type: GraphQLID, description: "Todos id." },
        title: { type: GraphQLString, description: "Todos title." },
        description: { type: GraphQLString, description: "Todos description" },
        userId: { type: GraphQLID, description: "Users id." },
        statusId: { type: GraphQLID, description: "Status id." },
        beginDate: {type: GraphQLString},
        endDate: {type: GraphQLString},
    },
    description: "A todo.",
});

module.exports = {
    todoType,
};
