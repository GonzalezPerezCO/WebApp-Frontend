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
      redirect: false,
      user: {
        nombre: '',
        apellido: '',
        codigo: '',
        reserva: '',
        documento: '',
        carrera: '',
        semestre: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    const userEmail = this.props.location.state.email;
    this.setState(state => {
       state.user.email = userEmail;
       return state;
    })
  }

  handleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = this.state.user;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/estudiante`;
    axios.post(url, newUser)
      .then(() => {
        this.setState({
          redirect: true
        })
      })
      .catch(error => {
        swal({
          title: "Oops!",
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
      this.state.redirect ? 
      (<Redirect to={{pathname: "/schedule", state: {reg: false} }} />) : 
      (<SignupForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />)
    );
  }
}

export default Signup;
