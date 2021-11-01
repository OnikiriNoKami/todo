require("dotenv").config();
const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
// const resolvers = require("./api/graphql/schema/resolver/resolver.js");
// const typeDefs = require("./api/graphql/schema/typeDef/typeDef.js");
const rootSchema = require('./api/graphql/root')
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

async function connectToMongo() {
    try {
        mongoose.connect(MONGO_URL, () => {
            console.log("Connection with mongo established.");
        });
    } catch (e) {
        console.log("Could not connect.");
    }
}

async function start() {
    connectToMongo();
    app.use(cors());
    app.use(express.json());
    app.use("/static", express.static(path.resolve(__dirname, "static")));
    const apolloServer = new ApolloServer({
        schema: rootSchema
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`Server runnig at http://localhost:${port}`);
    });
}

start();
