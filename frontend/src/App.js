import React from "react";
import apolloClient from "./GraphQL";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider } from "@apollo/client";

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <CssBaseline />
        </ApolloProvider>
    );
}

export default App;
