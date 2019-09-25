import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//Formik
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Register = ({ errors, touched, values, status, handleChange, handleSubmit }) => {
const [ registration, setRegistration] = useState({ username:'', password:'' });

    useEffect(() => {
        if (status) {
            setRegistration([
                ...registration,
                status
            ])
        }
    }, [status]);

    return (
        <Form onSubmit={handleSubmit}>
            <Field
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
            placeholder='username'
            />
            {
                touched.username && errors.username && (<p>{errors.username}</p>)
            }
            <Field
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            placeholder='password'
            />
            {
                touched.password && errors.password && (<p>{errors.password}</p>)
            }
            <button type='submit'>Register</button>
        </Form>
    );

};// regular registration form
    const FormikRegister = withFormik({
        mapStateToValues(
            { username, password }
        ) {
            return {
                username: username || '',
                password: password || ''
            };
        },//mapPropsToValues

        validationSchema:  Yup.object().shape (
            {
                username: Yup.string().required(),
                password: Yup.string().required()
            }
        ),//validationSchema

      handleChange({ setStatus },e, values) {
          e.preventDefault();
        setStatus({
            ...values, [e.target.name]: e.target.value })
            console.log(values);
      },    

    handleSubmit(values, { props } ){

        axiosWithAuth().post('/register', values).then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data.token);
            props.history.push('/home');
        }).catch(err => console.log('error', err.response))
    }
})(Register)//Currying

export default FormikRegister;