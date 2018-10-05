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
        name: '',
        carnet: '',
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

  handleSubmit = () => {
    //const newUser = this.state.user;
    const url = `https://randomuser.me/api/?results=1&inc=name,email,login,gender&noinfo`;
    axios.get(url)
    .then(response => {
      console.log(response.data);
      swal("Listo!", "Registro realizado con éxito", "success");
	    this.setState({
        redirect: true
      })
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
      this.state.redirect ? 
      (<Redirect to="/login" />) : 
      (<SignupForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        user={this.state.user} />)
    );
  }
}

export default Signup;
