import React from "react";
import apolloClient from "./GraphQL";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TokenAuthorization from "./components/authorization/TokenAuthorization";
import TokenAuthLoader from './components/loaders/TokenAuthLoader';

function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={apolloClient}>
                <CssBaseline />
                <TokenAuthorization/>
                <TokenAuthLoader/>
                <Layout/>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
