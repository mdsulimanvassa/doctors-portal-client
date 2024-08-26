import React, { useState } from 'react';
import './Login.css';
import loginImages from '../../../images/login.png';
import { auth } from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [info, setInfo] = useState({});

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email };
                setLoggedInUser(signInUser);
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    }
    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {

        }

    return (
        <section className='login-area'>
            <div className="login-containt">
                <div className="login-pages content">
                    <h2>Login</h2>
                    {
                        loggedInUser?<button onClick={handleGoogle} type="button">Sign in with Google</button>
                        :<button onClick={handleGoogle} type="button">Sign up with Google</button>
                    }
                    <form onSubmit={handleSubmit}>
                        <input onBlur={handleBlur} type="text" name='name' placeholder='User name' />
                        <hr />
                        <input onBlur={handleBlur} type="password" name="password"  placeholder='Password' />
                        <hr />
                        <a href='/#'>Forgot your password?</a>
                        <input type="submit" value="Sign in" />
                    </form>
                </div>
                <div className="login-pages">
                    <img src={loginImages} alt="logo" />
                </div>
            </div>
        </section>
    );
};

export default Login;