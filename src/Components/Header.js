import React, { Fragment } from 'react';
import logo from './../logo-ESCUELA.svg';
import SignedIn from '../Components/SignedIn';
import SignedOut from '../Components/SignedOut';

function Header() {

    return (
      <Fragment>
        {/* token exits && isvalid ? <SignedIn /> : <SignedOut /> */}
        { localStorage.getItem('jwt') ? <SignedIn /> : <SignedOut /> }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </Fragment>
    );
}

export default Header;
