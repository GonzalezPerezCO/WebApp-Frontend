import React from 'react';
import { Redirect } from 'react-router-dom';

class Signout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
    };
  }

  componentDidMount() {
    localStorage.removeItem('token');
  }

  render() {
    return <Redirect to="/" />;
  }
}
