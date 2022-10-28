import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthLayout from "./components/Layout/Auth/AuthLayout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Menu";
import axios, { AxiosInterceptor } from "./utils/axios";

type Inputs = {
  email?: string;
  password?: string;
  grantType: string;
  code?: string;
};

function App() {
  const [modalShown, toggleModal] = useState(false);
  const [isLoginPopup, setIsLoginPopup] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  const handleOnSubmitLoginForm: SubmitHandler<Inputs> = async (dataInput) => {
    const result = await axios.post("/auth/login", dataInput);
    localStorage.setItem("access_token", result.data.accessToken);
    localStorage.setItem("refresh_token", result.data.refreshToken);
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
        <Router>
          <Header
            isLogin={!!token}
            showLoginModal={handleOnClickShowLoginModal}
            handleOnClickLogout={handleOnClickLogout}
          />
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
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/menu" exact>
              <ProductPage />
            </Route>
          </Switch>
        </Router>
      </AxiosInterceptor>
    </React.Fragment>
  );
}

export default App;
