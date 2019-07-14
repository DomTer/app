import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_USER = gql`
    mutation AddUser($mail: String!, $password: String, $gender: String, $forename: String, $surname: String) {
        addUser(mail: $mail, password: $password, gender: $gender, forename: $forename, surname: $surname) {
            id
            mail
            password
            gender
            forename
            surname
        }
    }
`;

const AddUser = () => {
    let input = {
        mail: '',
        password: '',
        gender: '',
        forename: '',
        surname: '',
    };

    return (
        <Mutation mutation={ADD_USER}>
            {(addUser, { data }) => (
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addUser({ variables: {
                                mail: input.mail.value,
                                password: input.password.value,
                                gender: input.gender.value,
                                forename: input.forename.value,
                                surname: input.surname.value
                            } });

                            input.mail.value = "";
                            input.password.value ="";
                            input.gender.value = "";
                            input.forename.value = "";
                            input.surname.value = "";
                        }}
                    >
                        {Object.keys(input).map((key) => {
                            return <input
                                name={key}
                                ref={node => {
                                    input[key] = node;
                                }}
                            />
                        })}



                        <button type="submit">Nutzer anlegen.</button>
                    </form>
                </div>
            )}
        </Mutation>
    );
};

export default AddUser;