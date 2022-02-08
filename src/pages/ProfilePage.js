import React, {useEffect, useState} from 'react';
import './ProfilePage.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

export default function ProfilePage() {
  const userLoggedIn = useSelector(state => state.authState.userLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);

  useEffect(() => {

  });

  return (
    <div className="profile-page-wrapper">
      <div className="profile-wrapper">
        <div className="profile-title"> Moj profil </div>
        <div className="form-wrapper">
          <div className="container">
            <div className="last-name field">Ime:</div>
            <div className="first-name field">Prezime:</div>
            <div className="address field">Adresa:</div>
            <div className="phone field">Telefon:</div>
            <div className="username field">Korisnicko ime:</div>
            <div className="first-name-value field">{userLoggedIn.firstname}</div>
            <div className="last-name-value field">{userLoggedIn.lastname}</div>
            <div className="address-value field">{userLoggedIn.address}</div>
            <div className="phone-value field">{userLoggedIn.phone}</div>
            <div className="username-value field">{userLoggedIn.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
}