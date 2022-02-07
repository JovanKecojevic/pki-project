import './App.scss';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
import React, { useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  const userLoggedIn = useSelector(state => state.authState.userLoggedIn);

  useEffect(()=> {
    console.log(userLoggedIn);
  });

  useEffect(()=> {

  }, [userLoggedIn]);



  return (
    <div className="App">
        <Router>
          <Switch>
            {/*!userLoggedIn*/true && <Route path={`/login-page`} key={'login-page'}>
              <Header page={'login-page'} />
              <LoginPage />
            </Route>}
            {/*userLoggedIn*/true && <Route path={`/home-page`} key={'home-page'}>
              <Header page={'home-page'} />
              <HomePage />
            </Route>}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
