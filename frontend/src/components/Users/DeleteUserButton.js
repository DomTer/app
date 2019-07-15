import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {gql} from "apollo-boost";
import Mutation from "react-apollo/Mutation";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
}));

const DELETE_USER = gql`
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

export default function DeleteUserButton({userId}) {
    const classes = useStyles();
    return (
        <Mutation mutation={DELETE_USER}>
            {(deleteUser) => (
                <Button variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => {
                            deleteUser({ variables: {_id: userId} });
                        }}
                >Delete
                    <DeleteIcon className={classes.rightIcon}/>
                </Button>
            )}
        </Mutation>

    );
}



