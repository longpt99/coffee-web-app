import React, { useEffect, useState } from 'react';
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

function App() {
  // const location = useLocation();
  const [modalShown, toggleModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOnClickShowLoginModal = (val: any) => {
    toggleModal(val);
  };

  const handleOnClickChangePage = (val: any) => {
    console.log(val);
    setIsLogin(val);
  };

  return (
    <React.Fragment>
      <Router>
        <Header showLoginModal={handleOnClickShowLoginModal} />
        <HomePage />
        <AuthLayout
          shown={modalShown}
          close={() => {
            toggleModal(false);
          }}
        >
          {isLogin ? (
            <Login changePopupPage={handleOnClickChangePage} />
          ) : (
            <Register changePopupPage={handleOnClickChangePage} />
          )}
        </AuthLayout>
        <Switch></Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
