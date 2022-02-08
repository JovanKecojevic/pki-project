import './App.scss';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const userLoggedIn = useSelector(state => state.authState.userLoggedIn);

  useEffect(()=> {
    console.log(userLoggedIn);
  });

  return (
    <div className="App">
        <Router>
          <Switch>
            {!userLoggedIn && <Route path={`/login-page`} key={'login-page'}>
              <Header page={'login-page'} />
              <LoginPage />
            </Route>}
            {userLoggedIn && <Route path={`/home-page`} key={'home-page'}>
              <Header page={'home-page'} />
              <HomePage />
            </Route>}
            {userLoggedIn && <Route path={`/profile-page`} key={'profile-page'}>
              <Header page={'profile-page'} />
              <ProfilePage />
            </Route>}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
