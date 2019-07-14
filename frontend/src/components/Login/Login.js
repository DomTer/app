import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO = gql`
    mutation AddUser($type: String!) {
        addUser(mail: "String!", password: "String!", gender: "String", forename: "String", surname: "String") {
            mail
            password
            gender
            forename
            surname
        }
    }
`;

const AddUser = () => {
    let input;

    return (
        <Mutation mutation={ADD_TODO}>
            {(addUser, { data }) => (
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addUser({ variables: { type: input.value } });
                            input.value = "";
                        }}
                    >
                        <input
                            ref={node => {
                                input = node;
                            }}
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>
            )}
        </Mutation>
    );
};

export default AddUser;