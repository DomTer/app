import React from 'react';
import {Mutation} from "react-apollo";
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {GET_USERS_QUERY} from "./GetUsersQuery";
import {ADD_USER_MUTATION} from "./AddUserMutation";

const useStyles = makeStyles(theme => ({
    container: {
        width: '50%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    }
}));

const genders = [
    {
        value: 'male',
        label: 'Herr',
    },
    {
        value: 'female',
        label: 'Frau',
    },
    {
        value: 'third',
        label: '¯\\_(ツ)_/¯',
    }

];

export default function AddUserForm() {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        mail: '',
        password: '',
        gender: '',
        forename: '',
        surname: '',
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    return (
        <Mutation mutation={ADD_USER_MUTATION} refetchQueries={[{query: GET_USERS_QUERY}]}>
            {(addUser) => (

                <form
                    className={classes.container}
                    noValidate
                    autoComplete="on"
                    onSubmit={e => {
                        e.preventDefault();
                        addUser({variables: values});

                        values.mail = "";
                        values.password = "";
                        values.gender = "";
                        values.forename = "";
                        values.surname = "";
                    }}
                >
                    <TextField
                        id="signup-form__input--gender"
                        select
                        label="Anrede"
                        className={classes.textField}
                        value={values.gender}
                        onChange={handleChange('gender')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Bitte wählen Sie Ihr Geschlecht."
                        margin="normal"
                    >
                        {genders.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="signup-form__input--forename"
                        label="Vorname"
                        className={classes.textField}
                        value={values.forename}
                        onChange={handleChange('forename')}
                        margin="normal"
                    />
                    <TextField
                        id="signup-form__input--surname"
                        label="Name"
                        className={classes.textField}
                        value={values.surname}
                        onChange={handleChange('surname')}
                        margin="normal"
                    />
                    <TextField
                        id="signup-form__input--mail"
                        label="E-Mail"
                        className={classes.textField}
                        value={values.mail}
                        onChange={handleChange('mail')}
                        margin="normal"
                    />
                    <TextField
                        id="signup-form__input--password"
                        label="Password"
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChange('password')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                    >Primary
                    </Button>
                </form>
            )}
        </Mutation>
    );
}