import {gql} from "apollo-boost";

export const DELETE_USER_MUTATION = gql`
    mutation DeleteUser($_id: ID!) {
        deleteUser(_id: $_id) {
            _id
            mail
            password
            gender
            forename
            surname
        }
    }
`;