const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
} = require("graphql");
const graphqlFields = require('graphql-fields')
const commentController = require("../../database/controllers/commentController");
const {todoType} = require('./todoSchema');

const commentType = new GraphQLObjectType({
    name: 'Comment',
    fields: {
        _id: { type: GraphQLString, description: "Comment id, MongoDB _id."},
        body: { type: GraphQLString, description: "Cmments text."},
        todoId: { type: GraphQLString, description: "MongoDB _id."},
        userId: { type: GraphQLString, description: "MongoDB _id."},
        todo: { type: todoType, description: "Fetches from db only when requested."}
    },
    description: "Todos comment."
})

const commentQueries = new GraphQLObjectType({
    name: 'Queries',
    fields: {
        comments: {
            type: new GraphQLList(commentType),
            resolve: (_, args, context, info) => {
                const {todo} = graphqlFields(info);
                if(todo){
                    
                    return commentController.getAllCommentsWithTodos(todo.user)
                }
                return commentController.getAllComments() 
            }
        },
        getTodosComments: {
            type: new GraphQLList(commentType),
            args: {
                todoId: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {todoId}, context, info) => {
                const {todo} = graphqlFields(info);
                if(todo){                    
                    return commentController.getAllTodosComments(todoId, todo.user)
                }
                return commentController.getAllTodosComments(todoId)
            }
        }
    }
})

const commentMutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        createComment: {
            type: commentType,
            args: {
                body: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                todoId: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                userId: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {body, todoId, userId}, context, info) => {
                const {todo} = graphqlFields(info);
                return commentController.create({todoId, userId, body, todo, user: todo?.user})
            }
        }
    }
});

const commentSchema = new GraphQLSchema({
    query: commentQueries,
    mutation: commentMutations
})

module.exports = {
    commentType,
    commentSchema
}

