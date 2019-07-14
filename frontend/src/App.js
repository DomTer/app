import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import SignUp from "./components/Login/SignUp";
import  ListUsers from "./components/Users/ListUsers";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
      <ApolloProvider key={'1'} client={client}>
        <SignUp  />
        <ListUsers />
      </ApolloProvider>
  );
}

export default App;
