const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
} = require("graphql");
const graphqlFields = require("graphql-fields");
const todoController = require("../../database/controllers/todoController");
const userTypeNoCircularDeps = new GraphQLObjectType({
    name: "UserInfo",
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
        todos: {
            type: GraphQLList(GraphQLString),
            description: "Array of todo ids.",
        },
    },
    description: "User.",
});

const todoType = new GraphQLObjectType({
    name: "Todo",
    fields: {
        _id: { type: GraphQLID, description: "Todos id." },
        title: { type: GraphQLString, description: "Todos title." },
        description: { type: GraphQLString, description: "Todos description" },
        userId: { type: GraphQLID, description: "Users id." },
        statusId: { type: GraphQLID, description: "Status id." },
        beginDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        user: {
            type: userTypeNoCircularDeps,
            description: "Fetches from db only when requested.",
        },
    },
    description: "A todo.",
});

const todoQueries = new GraphQLObjectType({
    name: "Queries",
    fields: {
        getTodos: {
            type: new GraphQLList(todoType),
            resolve: (_, args, context, info) => {
                const { user } = graphqlFields(info);
                if (user) {
                    return todoController.getAllTodosWithUser();
                }
                return todoController.getAllTodos();
            },
        },
        getTodoById: {
            type: todoType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "MongoDB _id."
                }
            },
            resolve: (_, {id}, context, info) => {
                const {user} = graphqlFields(info);
                return todoController.getTodoById(id, user);
            }
        }
    },
});

const todoMutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createTodo: {
            type: todoType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                    require: true,
                },
                description: {
                    type: GraphQLString,
                },
                userId: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "MongoDB _id.",
                },
                statusId: {
                    type: GraphQLString,
                    description: "MongoDB _id.",
                },
                beginDate: {
                    type: GraphQLString,
                },
                endDate: {
                    type: GraphQLString,
                },
            },
            resolve: (
                _,
                { title, description, userId, statusId, beginDate, endDate }
            ) =>
                todoController.create({
                    title,
                    description,
                    userId,
                    statusId,
                    beginDate,
                    endDate,
                }),
        },
        deleteTodo: {
            type: todoType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'MongoDB _id.'
                }
            },
            resolve: (_, {id}, context, info) => {
                const {user} = graphqlFields(info);
                return todoController.delete(id, user);
            }
        }
    },
});

const todoSchema = new GraphQLSchema({
    query: todoQueries,
    mutation: todoMutations
});

module.exports = {
    todoType,
    todoSchema,
};
