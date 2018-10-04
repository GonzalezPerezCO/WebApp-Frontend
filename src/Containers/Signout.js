import React from 'react';
import { Redirect } from 'react-router-dom';

class Signout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ''
    };
  }

  componentDidMount() {
    localStorage.removeItem('jwt');
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Signout;