import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import axios from 'axios';
import storage from '../../services/localStorage.js'
import Header from './Header.jsx';

// {
//   "name": "1234",
//   "password": "123456",
//   "confirmPassword": "123456"
// }

const Login = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');

  const handleLogin = async ({ name, password }) => {
    try {
      const { data } = await axios.post('/api/v1/login', { username: name, password });
      if (data) {
        storage.setUserData(data) // створити слайс userSlice
        navigate('/')
      }
    } catch (error) {
      setLoginError('Authentication failed. Please check your credentials.');
    }
    // const localStorageObj = {
    //   token: '??',
    //   username: values.name
    // };
    // storage.setToken(localStorageObj)
  }
  // className=""
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodepen.io%2Fmanik27%2Fembed%2FPOOxRz%2F%3Ftheme-id%3Dmodal&psig=AOvVaw3KSyc-ci9R4Dz5jQwZy_3l&ust=1710280580194000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjd_e3kme2EAxWvbvEDHZyOAHIQjRx6BAgAEBc" class="rounded-circle" alt="Войти"></img>
                </div>
                <form className="col-12 col-md-6 mt-3 mt-mb-0">
                  <h1 className="text-center mb-4">Войти</h1>
                  <Formik
                    initialValues={{ name: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                      handleLogin(values);
                      setSubmitting(false);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-floating mb-3">
                          <Field
                            name="username"
                            className="form-control"
                            autoComplete="username"
                            required
                          />
                          <label for="username">Ваш ник</label>
                          {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                          ) : null}
                        </div>


                        <div className="form-floating mb-4">
                          <Field
                            name="password"
                            type="password"
                            className="form-control"
                            autoComplete="current-password"
                            required
                          />
                          <label className="form-label" for="password">Пароль</label>
                          {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                          ) : null}
                        </div>
                        {loginError && <div>{loginError}</div>}

                        <button
                          type="submit"
                          className="w-100 mb-3 btn btn-outline-primary"

                        >Войти</button>
                      </Form>
                    )}
                  </Formik>
                </form>
              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>Нет аккаунта?</span> <a>Регистрация</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
