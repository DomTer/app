import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import SignUp from "./components/Login/SignUp";
import GetUsersTable from "./components/Users/GetUsersTable";
import NavBar from "./components/NavBar";


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(100vh - 54px)",
        [theme.breakpoints.up('sm')]: {
            minHeight: "calc(100vh - 64px)",
        },
    },
    content: {
        display: 'flex-column',
        height: 'inherit',
        padding: '0 24px',
        justifyContent: "center",
        alignItems: "center",
        overflowX: "scroll"
    },
    sidebar: {
        height: 'inherit',
        backgroundColor: '#f5f5f5',
    }
}));

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

function App() {
    const classes = useStyles();
    return (
        <ApolloProvider key={'1'} client={client}>
            <NavBar/>
            <Grid className={classes.root} container>
                <Box boxShadow={3} clone>
                    <Grid className={classes.sidebar} item xs={1}>

                    </Grid>
                </Box>
                <Grid className={classes.content} item xs={11}>
                    <GetUsersTable style={{backgroundColor: 'cyan'}}/>
                    <SignUp style={{backgroundColor: 'blue'}}/>
                </Grid>
            </Grid>
        </ApolloProvider>
    );
}

export default App;
