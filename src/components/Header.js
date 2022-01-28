import React from 'react';
import './Header.scss';
import LogoWrapper from "./LogoWrapper";

export default function Header() {
  return (
    <div className="header-wrapper">
      <LogoWrapper />
      <div className="title-wrapper">
        Dobrodosli
      </div>
    </div>
  );
}