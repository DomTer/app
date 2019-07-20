import React from 'react';
import {makeStyles, } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import AddUserForm from "./components/AddUserForm";
import GetUsersTable from "./components/GetUsersTable";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import  Home from "./views/Home";



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
        backgroundColor: '#fafffb',
    }
}));

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

function App() {
    const classes = useStyles();
    return (
        <ApolloProvider key={'1'} client={client}>
            <Router>
            <NavBar/>
            <Grid className={classes.root} container>
                <Box boxShadow={3} clone>
                    <Grid className={classes.sidebar} item xl={1} lg={1} md={2} sm={2} xs={3}>
                        <Sidebar />
                    </Grid>
                </Box>
                <Grid className={classes.content} item xl={11} lg={11} md={10} sm={10} xs={9}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={GetUsersTable} />
                    <Route exact path="/signup" component={AddUserForm} />
                </Grid>
            </Grid>
            </Router>
        </ApolloProvider>
    );
}

export default App;
