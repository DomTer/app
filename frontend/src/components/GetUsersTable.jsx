import React from 'react';
import {Query} from "react-apollo";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core";

import DeleteUserButton from "./DeleteUserButton";
import {GET_USERS_QUERY} from "./GetUsersQuery";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        minWidth: '1024px',
        justifyContent: 'center',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
}));

export default function GetUsersTable() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Anrede</TableCell>
                            <TableCell align="left">Vorname</TableCell>
                            <TableCell align="left">Nachname</TableCell>
                            <TableCell align="left">E-Mail</TableCell>
                            <TableCell align="left">Passwort</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Query
                            query={GET_USERS_QUERY}
                        >
                            {({loading, error, data, refetch}) => {
                                if (loading) return (
                                    <TableRow key="loading">
                                        <TableCell component="th" colSpan="6" scope="row">LOADING...</TableCell>
                                    </TableRow>
                                );
                                if (error) return <p>{JSON.stringify(error)}</p>;

                                return data.getUsers.map(({_id, mail, password, forename, gender, surname}) => (
                                    <TableRow key={_id}>
                                        <TableCell component="th" scope="row">{_id}</TableCell>
                                        <TableCell align="left">{gender}</TableCell>
                                        <TableCell align="left">{forename}</TableCell>
                                        <TableCell align="left">{surname}</TableCell>
                                        <TableCell align="left">{mail}</TableCell>
                                        <TableCell align="left">{password}</TableCell>
                                        <TableCell align="right">
                                            <DeleteUserButton userId={_id} refetch={refetch}/>
                                        </TableCell>
                                    </TableRow>
                                ));
                            }}
                        </Query>
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}


