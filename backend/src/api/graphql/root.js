const { mergeSchemas } = require("@graphql-tools/schema");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require('graphql')
const statusSchema = require('./schema/statusSchema.js');


// const todoQueryes = new GraphQLObjectType({
//     name: 'Queries',
//     fields: {
//         todos: {
//             type: new GraphQLList(todoSchema),
//             resolve: () => {
//                 return [{title: 'Poop', description: 'Peep'}]
//             }
//         }
//     }
// })

// const randomQuery = new GraphQLObjectType({
//     name: 'Queries',
//     fields: {
//         pendehps: {
//             type: new GraphQLList(todoSchema),
//             resolve: ()=>{
//                 return [{title: 'Poop', description: 'Peep'},{title: 'Poop', description: 'Peep'}]
//             }
//         }
//     }
// })

// const randomMutation = new GraphQLObjectType({
//     name: 'Mutations',
//     fields: {
//         create: {
//             type: todoSchema,
//             args: {
//                 title: {type: new GraphQLNonNull(GraphQLString)}
//             },
//             resolve: (_, {title})=> {
//                 return {title, descriotion: 'new object'}
//             }
//         }
//     }
// })

const rootSchema = mergeSchemas({
    schemas:[statusSchema]
})
module.exports = rootSchema;
