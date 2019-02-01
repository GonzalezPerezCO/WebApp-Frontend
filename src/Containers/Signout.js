import React from 'react';
import { Redirect } from 'react-router-dom';

class Signout extends React.Component {

  componentDidMount() {
    sessionStorage.removeItem('jwt');
  }

  render() {
    return <Redirect to="/deportes/ui" />;
  }
}

export default Signout;
