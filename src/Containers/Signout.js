import React from 'react';
import { Redirect } from 'react-router-dom';

class Signout extends React.Component {

  async componentDidMount() {
    try {
      await window.msal.logout();
    }
    catch(err) {
      console.error('ERROR: ' + err);
    }
  }

  render() {
    return <Redirect to="/deportes/ui" />;
  }
}

export default Signout;
