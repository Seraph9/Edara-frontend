import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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

function Signup() {
    const classes = useStyles();

    const signUpForm = document.querySelector('.signupform');
    const demoLogIn = document.getElementById('demoUser');

    const handleSignup = async e => {
        e.preventDefault();

        //Grabs form inputs from the login form
        const fullNameInput = document.getElementById('fullNameInput');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        // const formData = new FormData(loginform);
        const fullName = fullNameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        let body = { fullName, email, password };
        console.log(fullName);
        console.log(email);
        console.log(password);

        try {
            const res = await fetch('http://localhost:8000/users', {
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

            console.log(localStorage.getItem('EDARA_CURRENT_USER_FULLNAME'));
            console.log(localStorage.getItem('EDARA_ACCESS_TOKEN'));
            console.log(localStorage.getItem('EDARA_CURRENT_USER_ID'));

            const currentUserId = localStorage.getItem('EDARA_CURRENT_USER_ID');

            // Redirects user to main page
            window.location.href = `/users/${currentUserId}`;

        } catch (err) {
            handleErrors(err);
        }
    }
    return (
        <>
            <h2 className='errors-container'></h2>
            <form onSubmit={handleSignup} id='signupform' className='signupform'>
                <input id='fullNameInput' type='text' placeholder='Enter full name...' style={styles.inputs} />
                <br />
                <input id='emailInput' type='email' placeholder='Enter email...' style={styles.inputs} />
                <br />
                <input id='passwordInput' type='password' placeholder='Enter password...' style={styles.inputs} />
                <br />
                <Button type='submit' className={classes.button}>Sign Up</Button>
            </form>
            <Button className={classes.button}>Demo User</Button>
            <br />
            <a style={styles.anchors} href='/'>Already have an account? Log in here!</a>
        </>
    )
};

export default Signup;