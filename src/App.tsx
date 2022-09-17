import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthLayout from './components/Layout/Auth/AuthLayout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <HomePage />
        <Switch>
          <AuthLayout>
            <Route path="/sign-in">
              <Login />
            </Route>
            <Route path="/sign-up">
              <Register />
            </Route>
          </AuthLayout>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
