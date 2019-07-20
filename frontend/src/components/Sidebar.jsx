import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';


const routes = [
    {
        route: '/',
        view: 'Home',
    },
    {
        route: '/users',
        view: 'Users',
    },
    {
        route: '/signup',
        view: 'Signup',
    },
    {
        route: '/wishlist',
        view: 'Wishlist',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: '15px',
        listStyleType: "none",
    },
    button: {

    },
    input: {
        display: 'none',
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    return (

        <ul className={classes.root}>
            {routes.map(routes => (
                <li>
                    <Button href={routes.route} className={classes.button}>
                        {routes.view}
                    </Button>
                </li>
            ))}
        </ul>


    );
}