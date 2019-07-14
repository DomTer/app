import React from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import ShowUsers from './components/Users/ShowUsers';
import SignUp from "./components/Login/SignUp";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
      <ApolloProvider key={'1'} client={client}>
        <ShowUsers />
        <SignUp  />
      </ApolloProvider>
  );
}

export default App;
