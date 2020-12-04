import React from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
import './login.css';

const Login = () =>{
    const {handleSubmit, handleChange, register} = useForm([]);
    const login = () =>{
        navigate(`/home`)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(login)}className="login-form">
                <h3>Login</h3>
                <label>Email address</label>
                <input type="text" name="email" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} ref={register({required: "Required"})} className="input"/>
                <button className="login-button"> Login </button>
            </form> 
        </div>
    )
}

export default Login;