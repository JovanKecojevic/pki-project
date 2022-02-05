import './HeaderMenuButton.scss';
import React from "react";
import {useHistory} from "react-router-dom";

export default function HeaderMenuButton() {
  const history = useHistory();

  function goToPage(pageName) {
    history.push(pageName);
  }


  return (
    <div className="header-menu-wrapper">
      <div className="profile-button" onClick={() => {goToPage('/profile-page');}}>
        <div className="icon-profile" />
        <div className="button-text"> Moj profil </div>
      </div>
      <div className="profile-button" onClick={() => {goToPage('/recommended-page');}}>
        <div className="icon-book" />
        <div className="button-text"> Preporucene knjige </div>
      </div>
    </div>
  )
}

HeaderMenuButton.propTypes = {

}