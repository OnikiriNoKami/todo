const { mergeSchemas } = require("@graphql-tools/schema");
const statusSchema = require('./schema/statusSchema.js');
const { userSchema } = require('./schema/userSchema');
const { todoSchema } = require('./schema/todoSchema');
const { commentSchema } = require('./schema/commentSchema');

const rootSchema = mergeSchemas({
    schemas:[statusSchema, userSchema, todoSchema, commentSchema]
})
module.exports = rootSchema;
