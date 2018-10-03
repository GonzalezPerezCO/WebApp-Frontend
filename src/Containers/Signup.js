import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import SignupForm from '../Components/SignupForm';

class Signup extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      user: {
        name: '',
        document: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  handleSubmit = (event) => {
    const newUser = this.state.user;

    axios.post(`http://localhost:8080/api/estudiante`, { newUser })
    .then(response => {
      console.log(response.data);
      swal("Listo!", "Registro realizado con éxito", "success");
	  <Redirect to="/login" />;
    })
    .catch(error => {
      console.log(error);
      swal({
        title: "Uh oh!",
        text: "Hubo un error con el registro: " + error.message,
        icon: "error"
      });
      this.setState({
        error
      })
    })
  }

  render() {
    return (
      <SignupForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />
    );
  }
}

export default Signup;
