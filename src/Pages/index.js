import React from 'react';
import { Router} from '@reach/router';
import Login from './login/login';
import Home from './home/home';

const Pages = () =>{
    return (
        <div>
            <Router>
                <Login exact path="/" />
                <Home path="/home" />
            </Router>
        </div>
    )
}

export default Pages;