import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Login from './Login';
import Signup from './Signup';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navbar: {
        backgroundColor: 'SandyBrown',
        // width: '100vw'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        position: 'absolute',
        top: 250,
        right: 500,
        width: 400,
        // height: 200,
        backgroundColor: 'NavajoWhite',
        border: '5px solid SandyBrown',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontFamily: 'Roboto, Helvetica, Arial, sans- serif',
        outline: 0
    },
    userName: {
        display: "inline",
        fontFamily: 'Roboto, Helvetica, Arial, sans- serif',
        color: '#034f84',
        marginRight: '10px'
    }
}));

const currentUserId = localStorage.getItem('EDARA_CURRENT_USER_ID');
const currentUserName = localStorage.getItem('EDARA_CURRENT_USER_FULLNAME');

function NavMenu() {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [logOut, setLogOut] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleLogOut = async () => {
        setLogOut(true);
        localStorage.clear();
        // try {
        //     const res = await fetch(`http://localhost:8000/users/${currentUserId}`, {

        //         body: JSON.stringify(body),
        //     });
        // } catch (err) {
        //     console.error(err);
        // };
        window.location.href = `/`;
    }

    const body = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">Log In</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <Login />
        </div>
    );

    const body2 = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">Sign Up</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <Signup />
        </div>
    );



    return (
        <>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Edara
                        {/* <NavLink to='/users/6' activeClassName='is-selected'>New product</NavLink> */}
                    </Typography>
                    <div>
                        {currentUserName
                            ? <><h3 className={classes.userName}>Welcome {currentUserName}!</h3>
                                <Button color="inherit" onClick={handleLogOut}>Logout</Button></>
                            : <><Button color="inherit" onClick={handleOpen2}>Signup</Button>
                                <Button color="inherit" onClick={handleOpen}>Login</Button></>
                        }
                    </div>
                    {open && <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body}
                        </Modal>
                    </div>}
                    {open2 && <div>
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body2}
                        </Modal>
                    </div>}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavMenu;