import React from 'react';
import Form from './Form';

class DynaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.username.value;
    console.log(event.target);
    const error = this.props.getErrorMessage(value);
    if (error) {
      alert(`error: ${error}`);
    } else {
      alert(`success: ${value}`);
    }
  };
  handleChange = event => {};

  render() {
    return <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />;
  }
}

export default DynaForm;
