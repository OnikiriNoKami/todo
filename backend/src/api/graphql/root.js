const { mergeSchemas } = require("@graphql-tools/schema");
const statusSchema = require('./schema/statusSchema.js');
const { userSchema } = require('./schema/userSchema');

const rootSchema = mergeSchemas({
    schemas:[statusSchema, userSchema]
})
module.exports = rootSchema;
