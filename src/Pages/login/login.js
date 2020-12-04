import React from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import './login.css';

const clientId = '786757047023-lv7l14nsf8lmimcbllom4jb33vnfjv68.apps.googleusercontent.com';
const Login = () =>{
    const {handleSubmit, handleChange, register} = useForm([]);
    const login = () =>{
        navigate(`/home`)
    }
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        refreshTokenSetup(res);
        navigate(`/home`)
    }
    const onFailure = (res) =>{
        console.log('Login failed: res:', res);
    }
    const { signIn } = useGoogleLogin({
        onSuccess, onFailure, clientId, isSignedIn: true, accessType: 'offline',
    });
    return(
        <div>
            <form onSubmit={handleSubmit(login)}className="login-form">
                <h3>Login</h3>
                <label>Email address</label>
                <input type="text" name="email" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <button className="login-button"> Login </button>
                <p className="or">-OR-</p>
                <button onClick={signIn} className="button">Sign in with Google</button>
            </form> 
        </div>
    )
}

export default Login;