import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-ESCUELA.svg';

function Header() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Form">
        <h1 className="App-title">Deportes de la Escuela</h1>
        <p className="App-intro">Por favor ingrese o registrese.</p>
        <button className="prettybtn">
          <Link to="/login">Ingreso </Link>
        </button>
        <button className="prettybtn">
          <Link to="/signup">Registro </Link>
        </button>
      </div>
    </Fragment>
  );
}

export default Header;
