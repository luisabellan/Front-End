import React, { useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const Login = (props) => {
    
    const [credentials, setCredentials] = useState({username:'', password:''});
  
    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
        }
        );
        console.log(credentials);
    };
  
    const login = e => {
      e.preventDefault();
      
      axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          console.log(res);
          console.log(res.data.token);
          console.log(props);
          props.history.push('/home');
          
        })
        .catch(err => console.log(err.response));
    };
  

      return (
        <div>
          <form className= 'login-form' onSubmit={login}>
            <input
              type="text"
              name="username"
              placeholder='Username'
              value={credentials.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder= 'Password'
              value={credentials.password}
              onChange={handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
  }
  
  export default Login;