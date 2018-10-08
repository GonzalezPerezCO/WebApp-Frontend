import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      info: {
        hour: 9,
        day: 'lunes',
        email: '',
        ide: 1
      }
    };
  }

  componentDidMount() {
   const data = sessionStorage.getItem('jwt');
   const token = jwt_decode(data);
   const email = token.email;
   this.setState((state) => {
     let stat = { 
       auth: true, 
       info: {
         email: email
        } 
      };
     return stat;
   })
  }

  handleChange = event => {
    const field = event.target.name;
    const info = this.state.info;
    const data = event.target.value;
    info[field] = data;

    this.setState({
      info
    });
  }

  handleSubmit = () => {
    const newDay = this.state.info;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/horario`;
    console.log(newDay);
    axios.post(url, newDay)
      .then(response => {
        console.log(response.data);
        swal("Listo!", "Agregado exitosamente", "success");
      })
      .catch(error => {
        console.log(error);
        swal({
          text: "Esa hora no está disponible: " + error.message,
          icon: "error"
        });
      });
  }

  render() {
    return (
      this.state.auth ? 
      (<ScheduleForm 
      onSubmit={this.handleSubmit} 
      onChange={this.handleChange} 
      info={this.state.info} />) :
      (<Redirect to="/login" /> )
    );
  }
}

export default Schedule;
