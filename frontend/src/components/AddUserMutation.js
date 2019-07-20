import gql from "graphql-tag";

export const ADD_USER_MUTATION = gql`
    mutation AddUser($mail: String!, $password: String, $gender: String, $forename: String, $surname: String) {
        addUser(mail: $mail, password: $password, gender: $gender, forename: $forename, surname: $surname) {
            _id
            mail
            password
            gender
            forename
            surname
        }
    }
`;