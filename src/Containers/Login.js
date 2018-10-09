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
      redirect: false,
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

    this.setState({ user });
  }

  handleSubmit = () => {
    const authUser = this.state.user;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/login`
    axios.post(url, authUser)
    .then(response => {
	    sessionStorage.setItem('jwt', response.data.token);
      swal("Bienvenido!", "Ingreso exitoso", "success");
	    this.setState({
        redirect: true,
      })
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
      this.state.redirect ?
      (<Redirect to="/schedule" />) :
      (<LoginForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />)
    );
  }
}

export default Login;
