import React from "react";
import apolloClient from "./GraphQL";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={apolloClient}>
                <CssBaseline />
                <Layout/>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
