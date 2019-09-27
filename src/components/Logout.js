import React from 'react';

class Logout extends React.Component  {

    // constructor(props) {
    //     super(props)
    //     this.state= {

    //     }

    // }

    handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        this.props.history.push('/')
        console.log(this.props.state)
    }

    render(){
    return <button onClick={this.handleLogout}>Logout</button>
    
    }
}
export default Logout;