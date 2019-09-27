import React, { useState, useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions';
//axios
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//Formik
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({ errors, touched, values, status, handleChange, handleSubmit }, { dispatch }) => {    
    const [credentials, setCredentials] = useState({username:'', password:''});
    // const state = useSelector(state => state)
    useEffect(() => {
      if (status) {
          setCredentials([
              ...credentials,
              status
          ])
      }

  }, [status]);

  console.log(logIn)

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
            <button type='submit' className='log-in-btn' >Log in</button>

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

    },
  
    handleSubmit(values, { props }) {
        axiosWithAuth()
        .post('/login', values)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          props.history.push('/home');
          console.log(props)
          props.logIn();
          
          
        })
        .catch(err => console.log(err.response));
    }
  })(Login)//Currying

  const mapStateToProps = state => {

    return {
        state: state,
    }

}
export default connect(mapStateToProps, {logIn })(FormikLogin);