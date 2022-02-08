import React, {useEffect, useState} from 'react';
import './LoginPage.scss';
import Button from '../components/Button/Button';
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../state/constants/actionTypes';
import {useHistory} from "react-router-dom";
import data from './../resources/users.json';

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);

  useEffect(() => {

  });

  function updateInputValue(evt, field) {
    const val = evt.target.value;
    if(field === 'username') setUsername(val);
    if(field === 'password') setPassword(val);
  }

  function handleLoginButtonClick() {
    let foundUser = null;
    data.users.every(user => {
      if (user.username === username && user.password === password) {
        foundUser = user;
        return false;
      }
      return true;
    });
    dispatch({type: ActionTypes.USER_LOGGED_IN, payload: foundUser});
    if(foundUser.type === 'buyer') history.replace('/home-page');


    setFailedLogin(true);
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-wrapper">
        <div className="login-title"> Prijava na sistem </div>
        <div className="login-form">
          <div className="data-wrapper">
            <div className="input-names">
              <div className="input-name"> Korisnicko ime : </div>
              <div className="input-name"> Lozinka : </div>
            </div>
            <div className="input-fields">
              <input className="default-input" value={username} onChange={evt => updateInputValue(evt,'username')} />
              <input className="default-input" value={password} onChange={evt => updateInputValue(evt,'password')}/>
            </div>
          </div>
          {failedLogin && <div className="login-error-message">
            Pogresno korisnicko ime ili lozinka!
          </div>}
          <div className="button-wrapper">
            <Button onClick={handleLoginButtonClick} text={'Prijavi se'} />
          </div>
          <div className="password-forgoten">
            Zaboravili ste lozinku?
          </div>
        </div>
      </div>
    </div>
  );
}