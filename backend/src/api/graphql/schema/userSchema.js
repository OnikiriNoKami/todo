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
        todos: {
            type: GraphQLList(GraphQLString),
            description: "Array of todo ids.",
        },
        token: {
            type: GraphQLString,
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
        getUserById: {
            type: userType,
            args: {
                id: {
                    type: GraphQLString,
                    description: "Format of MongoDB _id."
            }},
            resolve:(_, {id}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.getById(id, userTodos);
            }
        },
        getUserByNickName: {
            type: userType,
            args: {
                nickName: {
                    type: GraphQLString,
                    description: "User nickName, exact comparison."
            }},
            resolve:(_, {nickName}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.getByNickName(nickName, userTodos);
            }
        },
        login: {
            type: userType,
            args: {
                nickName: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {nickName, password}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.login({nickName, password, userTodos})
            }
        },
        auth: {
            type: userType,
            args: {
                token: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {token}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.auth({token, userTodos})
            }
        }
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
        },
        addTodoToUser: {
            type: userType,
            args: {
                userId: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "User id, MongoDB _id."
                },
                todoId: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "Todo is, MongoDB _id."
                }
            }, 
            resolve: (_, {userId, todoId}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.findAndAddTodo({ _id: userId, todoId, userTodos})
            }
        },
        removeTodoFromUser: {
            type: userType,
            args: {
                userId: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "User id, MongoDB _id."
                },
                todoId: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "Todo is, MongoDB _id."
                }
            }, 
            resolve: (_, {userId, todoId}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.findAndRemoveTodo({ userId, todoId, userTodos})
            }
        },
        deleteUser: {
            type: userType,
            args: {
                id:{ type: GraphQLString, description: "Id of document ot be removed." }                
            },
            resolve: (_, {id}) => {message: 'Deprecated right now.'}//userController.fidnOneAndRemove(id)
        },
        login: {
            type: userType,
            args: {
                nickName: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {nickName, password}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.login({nickName, password, userTodos})
            }
        },
        auth: {
            type: userType,
            args: {
                token: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {token}, context, info) => {
                const { userTodos } = graphqlFields(info);
                return userController.auth({token, userTodos})
            }
        }

    }
})

const userSchema = new GraphQLSchema({
    query: userQueries,
    mutation: userMutations
});

module.exports = {
    userType,
    userSchema,
};
