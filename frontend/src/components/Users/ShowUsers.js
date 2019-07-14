import React from 'react';
import {Query} from "react-apollo";
import {gql} from "apollo-boost";

const ShowUsers = () => (
    <Query
        query={gql`
      {
        getUsers{
            id
            mail
            password
            gender
            forename
            surname
        }
      }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{JSON.stringify(error)}</p>;

            return data.getUsers.map(({id, mail, password, forename, gender, surname}) => (
                <div>
                    <p><strong>ID:   </strong> {id}</p>
                    <p><strong>E-Mail: </strong> {mail}</p>
                    <p><strong>Passwort: </strong> {password}</p>
                    <p><strong>Anrede: </strong> {gender}</p>
                    <p><strong>Vorname: </strong> {forename}</p>
                    <p><strong>Name: </strong> {surname}</p>
                </div>
            ));
        }}
    </Query>
);

export  default ShowUsers;