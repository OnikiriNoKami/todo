require("dotenv").config();
const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./api/schema/resolver/resolver.js");
const typeDefs = require("./api/schema/typeDef/typeDef.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

async function start() {
    app.use(cors());
    app.use(express.json());
    app.use('/static',express.static(path.resolve(__dirname, "static")));
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`Server runnig at http://localhost:${port}`);
    });
}

start();
