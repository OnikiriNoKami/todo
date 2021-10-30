const { mergeSchemas } = require("@graphql-tools/schema");
const statusSchema = require('./schema/statusSchema.js');
const { userSchema } = require('./schema/userSchema');
const { todoSchema } = require('./schema/todoSchema')

const rootSchema = mergeSchemas({
    schemas:[statusSchema, userSchema, todoSchema]
})
module.exports = rootSchema;
