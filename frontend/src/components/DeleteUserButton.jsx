import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Mutation from "react-apollo/Mutation";

import {DELETE_USER_MUTATION} from "./DeleteUserMutation";

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


export default function DeleteUserButton(props) {
    const classes = useStyles();
    const {userId, refetch} = props;
    return (
        <Mutation mutation={DELETE_USER_MUTATION}>
            {(deleteUser, {data}) => (
                <Button variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => {
                            deleteUser({variables: {_id: userId}})
                                .then(() => {
                                    refetch();
                                });
                        }}
                >Delete
                    <DeleteIcon className={classes.rightIcon}/>
                </Button>
            )}
        </Mutation>

    );
}



