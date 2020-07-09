import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { handleErrors } from '../utils';


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'SandyBrown',
        marginRight: 10,
        marginBottom: 10
    },
}));

const styles = {
    inputs: {
        marginBottom: 10,
    },
    anchors: {
        color: 'black',
        textDecoration: 'none'
    }

}

function Login() {
    const classes = useStyles();

    const logInForm = document.querySelector('.loginform');
    const demoLogIn = document.getElementById('demoUser');

    const handleLogin = async e => {
        e.preventDefault();

        //Grabs form inputs from the login form
        const formData = new FormData(logInForm);
        const email = formData.get("email");
        const password = formData.get("password");
        const body = { email, password };

        try {
            const res = await fetch('http://localhost:8000/users/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw res;
            }

            const {
                token,
                user: { id, name },
            } = await res.json();

            // Stores fullName, access_token, and user_id in localStorage:
            localStorage.setItem('EDARA_CURRENT_USER_FULLNAME', name);
            localStorage.setItem('EDARA_ACCESS_TOKEN', token);
            localStorage.setItem('EDARA_CURRENT_USER_ID', id);
            localStorage.setItem('EDARA_CURRENT_CHANNEL_ID', 1);

            // Redirects user to main page
            window.location.href = '/';

        } catch (err) {
            handleErrors(err);
        }
    }

    return (
        <>
            <form onSubmit={handleLogin} className='loginform'>
                <input type='email' placeholder='Enter email...' style={styles.inputs} />
                <br />
                <input type='password' placeholder='Enter password...' style={styles.inputs} />
                <br />
                <Button className={classes.button}>Log In</Button>
            </form>
            <Button className={classes.button}>Demo User</Button>
            <br />
            <a style={styles.anchors} href='/'>Don't have an account? Sign up here!</a>
        </>
    )
};

export default Login;