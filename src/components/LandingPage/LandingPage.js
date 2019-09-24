import React from 'react';
import Login from './Login';
import { Register } from './Register';
import './LandingPage.css';

const LandingPage = (props) => {

    console.log(props);

    return(
        <div className='landing-page'>
        <h1>Welcome to Better Reads!</h1>
        <Login {...props}/>
        <h2>First time visiting Better Reads? Create your account!</h2>
        <Register {...props} />
        </div>
    )
}

export default LandingPage;