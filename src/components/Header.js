import React, {useEffect, useState} from 'react';
import './Header.scss';
import LogoWrapper from "./LogoWrapper";
import PropTypes from "prop-types";
import Button from '../components/Button/Button';
import * as ActionTypes from "../state/constants/actionTypes";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function Header(props) {

  const [leftComponent, setLeftComponent] = useState([]);
  const [centerComponent, setCenterComponent] = useState([]);
  const [rightComponent, setRightComponent] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogoutClick() {
    console.log('Uspesno logovanje');
    dispatch({ type: ActionTypes.USER_LOGGED_IN, payload: false });
    history.replace('/login-page');
  }

  useEffect(() => {
    switch (props.page) {
      case 'login-page':
        setLeftComponent([<LogoWrapper />]);
        setCenterComponent([<div className="title-wrapper">
          Dobrodosli
        </div>]);
        setRightComponent([]);
        break;
      case 'home-page':
         setLeftComponent([<LogoWrapper />]);
         setCenterComponent([]);
         setRightComponent([<Button dark onClick={handleLogoutClick} text={'Odjavi se'}/>]);
        break;
      default:
        // code block
    }

  }, [props]);

  return (
    <div className="header-wrapper">
      <div className="left">
          {leftComponent.length > 0 && leftComponent.map(component => {return component;})}
      </div>
      <div className="center">
          {centerComponent.length > 0 && centerComponent.map(component => {return component;})}
      </div>
      <div className="right">
          {rightComponent.length > 0 && rightComponent.map(component => {return component;})}
      </div>
    </div>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};