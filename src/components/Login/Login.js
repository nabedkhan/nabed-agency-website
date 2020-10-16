import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logo.png';
import google from '../../images/google.png';
import './Login.css';
import { firebaseIdToken, signInWithGoogle } from '../../firebase/firebase';
import { UserContext } from '../../App';

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const [user, setUser] = useState({
        email: '',
        displayName: '',
        photoURL: ''
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result);
                setLoggedInUser(result);
                idToken();
            })
    }

    const idToken = () => {
        firebaseIdToken()
            .then(tokenId => {
                sessionStorage.setItem('token', tokenId);
                history.replace(from);
            })
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-10 mx-auto">
                        <div className="logo text-center my-3">
                            <Link to="/"><img src={logo} className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="login-form my-5">
                            <h2 className="text-center mb-5">Login With</h2>
                            <div className="google my-3">
                                <img src={google} width="30" alt="Google" />
                                <button
                                    onClick={handleSignIn}
                                >Continue with Google</button>
                            </div>
                            <p className="text-center">Don't have an account
                                <button>Create an account</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;