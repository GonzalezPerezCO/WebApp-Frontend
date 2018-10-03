import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      token: '',
      user: {
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
    const authUser = this.state.user;

    axios.post(`http://localhost:8080/login`, { authUser })
    .then(response => {
      console.log(response.data);
	  localStorage.setItem(response.data.token);
      swal("Bienvenido!", "Ingreso exitoso", "success");
	  <Redirect to="/schedule" />;
    })
    .catch(error => {
      console.log(error);
      swal({
        title: "Uh oh!",
        text: "Hubo un error al ingresar: " + error.message,
        icon: "error"
      });
      this.setState({
        error
      })
    })
  }

  render() {
    return  (
      <LoginForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />
    );
  }
}

export default Login;
