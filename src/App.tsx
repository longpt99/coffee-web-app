import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./components/Backgound/Background";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Header from "./components/Header/Header";
import AuthLayout from "./components/Layout/Auth/AuthLayout";
import MainLayout from "./components/Layout/Main/MainLayout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BlogPage from "./pages/Blog";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Menu";
import ProfilePage from "./pages/Profile";
import routes from "./router";
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
            {routes.map(({ path, name, Component }, key) => (
              <Route
                exact
                path={path}
                key={key}
                render={(props) => {
                  const crumbs = routes
                    // Get all routes that contain the current one.
                    .filter(({ path }) => props.match.path.includes(path));
                  // Swap out any dynamic routes with their param values.
                  // E.g. "/pizza/:pizzaId" will become "/pizza/1"
                  // .map(({ path, ...rest }) => ({
                  //   path: Object.keys(props.match.params).length
                  //     ? Object.keys(props.match.params).reduce(
                  //         (path, param) => {
                  //           props.match.params[param] &&
                  //             path.replace(
                  //               `:${param}`,
                  //               props.match.params[param]
                  //             );
                  //           return path;
                  //         },
                  //         path
                  //       )
                  //     : path,
                  //   ...rest,
                  // }));
                  return (
                    <React.Fragment>
                      <MainLayout>
                        <Background>{name}</Background>
                        <Breadcrumbs crumbs={crumbs} />
                        <Component crumbs={crumbs} />
                      </MainLayout>
                    </React.Fragment>
                  );
                }}
              />
            ))}
          </Switch>
        </Router>
      </AxiosInterceptor>
    </React.Fragment>
  );
}

export default App;
