import React from 'react';
import { connect } from "react-redux";

export const Register = (props) => {
    
    const handleUsername = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('registration form successfully sent!')
        props.history.push('/home');
    }

    return (
        <>
        <form onSubmit={handleRegister}>
            <input
            type='text'
            name='username'
            value='username'
            onChange={handleUsername}
            placeholder='username'
            >
            </input>
            <input
            type='password'
            name='username'
            value='username'
            onChange={handleUsername}
            placeholder='password'
            >
            </input>
            <button type='submit'>Register</button>
        </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(
    mapStateToProps,
    {}
    )(Register);