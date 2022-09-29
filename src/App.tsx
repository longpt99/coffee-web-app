import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import AuthLayout from './components/Layout/Auth/AuthLayout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home';
import queryString from 'query-string';
import axios, { AxiosInterceptor } from './utils/axios';

type Inputs = {
  email: string;
  password: string;
  grantType: string;
};

function App() {
  const [modalShown, toggleModal] = useState(false);
  const [isLoginPopup, setIsLoginPopup] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('access_token'));
  const urlParams = queryString.parse(window.location.search);

  useEffect(() => {
    if (urlParams.code) {
      (async () => {
        const { data } = await axios.get(
          'https://graph.facebook.com/v15.0/oauth/access_token',
          {
            params: {
              client_id: '2959728634319670',
              client_secret: '1aac188502dffc783a16d7b16e353a13',
              redirect_uri: 'http://localhost:5173/?grantType=facebook',
              code: urlParams.code,
            },
          }
        );
        console.log(data); // { access_token, token_type, expires_in }
        const token = data.access_token;
        const response = await axios.post('/auth/login', {
          token: token,
          grantType: 'facebook',
        });
        console.log(response.data);
      })();
    }
    console.log(urlParams);
  }, [urlParams]);

  const handleOnSubmitLoginForm: SubmitHandler<Inputs> = async (dataInput) => {
    const result = await axios.post('/auth/login', dataInput);
    console.log(result);
    localStorage.setItem('access_token', result.data.accessToken);
    localStorage.setItem('refresh_token', result.data.refreshToken);
    setToken(result.data.accessToken);
    toggleModal(false);
  };

  const handleOnClickShowLoginModal = (val: any) => {
    !token && toggleModal(val);
  };

  const handleOnClickChangePage = (val: any) => {
    setIsLoginPopup(val);
  };

  const handleOnClickLogout = () => {
    localStorage.clear();
    setToken(null);
  };

  return (
    <React.Fragment>
      <AxiosInterceptor>
        <Header
          isLogin={!!token}
          showLoginModal={handleOnClickShowLoginModal}
          handleOnClickLogout={handleOnClickLogout}
        />
        <HomePage />
        <AuthLayout
          shown={modalShown}
          close={() => {
            toggleModal(false);
          }}
        >
          {isLoginPopup ? (
            <Login
              changePopupPage={handleOnClickChangePage}
              handleOnSubmitLoginForm={handleOnSubmitLoginForm}
            />
          ) : (
            <Register changePopupPage={handleOnClickChangePage} />
          )}
        </AuthLayout>
        <Router>
          <Switch></Switch>
        </Router>
      </AxiosInterceptor>
    </React.Fragment>
  );
}

export default App;
