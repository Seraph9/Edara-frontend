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

    //const logInForm = document.querySelector('.loginform');
    const demoLogIn = document.getElementById('demoUser');
    let loginform = document.getElementById('loginform');

    const handleLogin = async e => {
        e.preventDefault();

        //Grabs form inputs from the login form
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        // const formData = new FormData(loginform);
        const email = emailInput.value;
        const password = passwordInput.value;
        let body = { email, password };

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



            const currentUserId = localStorage.getItem('EDARA_CURRENT_USER_ID');
            // Redirects user to main page
            //window.location.href = `/users/${currentUserId}`;
            window.location.href = `/edara`;

        } catch (err) {
            handleErrors(err);
        }
    }

    return (
        <>
            <h2 className='errors-container'></h2>
            <form onSubmit={handleLogin} id='loginform' className='loginform'>
                {/* <input type='text' placeholder='Enter full name...' style={styles.inputs} />
                <br /> */}
                <input id='emailInput' type='email' placeholder='Enter email...' style={styles.inputs} />
                <br />
                <input id='passwordInput' type='password' placeholder='Enter password...' style={styles.inputs} />
                <br />
                <Button type='submit' className={classes.button}>Log In</Button>
            </form>
            <Button className={classes.button}>Demo User</Button>
            <br />
            <a style={styles.anchors} href='/'>Don't have an account? Sign up here!</a>
        </>
    )
};

export default Login;