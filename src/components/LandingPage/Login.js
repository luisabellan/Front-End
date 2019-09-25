import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//Formik
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({ errors, touched, values, status, handleChange, handleSubmit }) => {    
    const [credentials, setCredentials] = useState({username:'', password:''});
  
    useEffect(() => {
      if (status) {
          setCredentials([
              ...credentials,
              status
          ])
      }
  }, [status]);

  return (
        <Form className= 'login-form' onSubmit={handleSubmit}>
            <Field
            type="text"
            name="username"
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
            />
            {
                touched.username && errors.username && (<p>{errors.username}</p>)
            }            
            <Field
            type="password"
            name="password"
            placeholder= 'Password'
            value={values.password}
            onChange={handleChange}
            />
            {
                touched.password && errors.password && (<p>{errors.password}</p>)
            }            
            <button>Log in</button>
        </Form>
    );
};//regular login form
    const FormikLogin = withFormik({
      mapStateToValues(
        { username, password }
      ) {
        return {
          username: username || '',
          password: password || ''
        };
      },//mapStateToValues

      validationSchema: Yup.object().shape (
        {
          username: Yup.string().required(),
          password: Yup.string().required()
        }
      ),//validationSchema

    handleChange({ setStatus }, e, values ) {
      setStatus({
        ...values,
        [e.target.name]: e.target.value
        }
        );
        console.log(values);
    },
  
    handleSubmit(values, { props }) {
      
      axiosWithAuth()
        .post('/login', values)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          console.log(res);
          console.log(res.data.token);
          console.log(props);
          props.history.push('/home');
          
        })
        .catch(err => console.log(err.response));
    }
  })(Login)//Currying

  export default FormikLogin;