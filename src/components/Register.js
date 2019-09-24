import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const Register = () => {
const [ registration, setRegistration] = useState({ username: '', password: '' });

    
      const handleChange = e => {
          e.preventDefault();
        setRegistration({
            ...registration, [e.target.name]: e.target.value })
            console.log(registration);
      };
    

    const handleRegister = e => {
        e.preventDefault();
        axiosWithAuth().post('/register', registration).then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload)
        }).catch(err => {
            console.log('error', err.response)
        })
    }

    return (
        <>
        <form onSubmit={handleRegister}>
            <input
            type='text'
            name='username'
            value={registration.username}
            onChange={handleChange}
            placeholder='username'
            >
            </input>
            <input
            type='password'
            name='password'
            value={registration.password}
            onChange={handleChange}
            placeholder='password'
            >
            </input>
            <button type='submit'>Register</button>
        </form>
        </>
    )
}
