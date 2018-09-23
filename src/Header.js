import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-ESCUELA.svg';

function Header() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </Fragment>
  );
}

export default Header;
