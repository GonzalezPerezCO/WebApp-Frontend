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
      registered: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    const {user} = this.state;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/login`;
    axios.post(url, user)
    .then(response => {
      if(response.data.error){
        swal("Uh oh!", response.data.message, "error")  
      } else {
        sessionStorage.setItem('jwt', response.data.token);
        axios.get(`http://estudiantes.is.escuelaing.edu.co/deportes/api/public/registro/${user.email}`)
        .then(res => {
          if(res.data.registro === 1){
            sessionStorage.setItem('state', res.data.registro);
            this.setState({
               registered: true
            })
          }
        }).catch(err => {
          console.error(err.message);
        })
        this.setState({
          redirect: true,
        })
      }
    })
    .catch(error => {
      swal({
        title: "Oops!",
        text: "Se ha presentado un error: " + error.message,
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
      (this.state.registered ? <Redirect to="/schedule" /> : <Redirect to="/signup" />) :
      (<LoginForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />)
    );
  }
}

export default Login;