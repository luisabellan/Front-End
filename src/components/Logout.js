import React from 'react';

const Logout = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();

        //props.history.push('/')
    }

    return(
        <button onClick={handleLogout}>Logout</button>
    )
}