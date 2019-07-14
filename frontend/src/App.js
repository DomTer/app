import React from 'react';
import './App.css';
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import  ShowUsers from './components/Users/ShowUsers';
import AddUser from "./components/Users/AddUser";
import Login from "./components/Login/Login";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
      <ApolloProvider key={'1'} client={client}>
        <ShowUsers />
        <AddUser />
        <Login  />
      </ApolloProvider>
  );
}

export default App;
