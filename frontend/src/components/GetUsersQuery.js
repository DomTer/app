import {gql} from "apollo-boost";

export const GET_USERS_QUERY = gql`
    {
        getUsers{
            _id
            mail
            password
            gender
            forename
            surname
        }
    }
`;