import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jwt_decode from 'jwt-decode';
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
    const data = sessionStorage.getItem('jwt');
    const token = jwt_decode(data);
    this.setState(state => {
       state.user.email = token.email
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
        console.log(error);
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
      (<Redirect to="/schedule" />) : 
      (<SignupForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />)
    );
  }
}

export default Signup;