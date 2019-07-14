import React from 'react';
import './App.css';
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import  Users from './components/Users/Users';
import AddUser from "./components/Login/Login";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Users />
        <AddUser/>
      </ApolloProvider>
  );
}

export default App;
