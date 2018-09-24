import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo-ESCUELA.svg';

function Header() {
  return (
    <Fragment>
      <div className="Menu-bar">
        <Link to="/" >Inicio</Link>
        <Link to="/login" >Ingreso</Link>
        <Link to="/signup" >Registro</Link>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </Fragment>
  );
}

export default Header;
