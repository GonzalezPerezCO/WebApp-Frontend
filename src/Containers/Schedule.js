import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jwt_decode from 'jwt-decode';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      info: {
        hora: 9,
        dia: 'lunes',
        email: '',
        turno: 1
      }
    };
  }

  componentDidMount() {
   const data = sessionStorage.getItem('jwt');
   const token = jwt_decode(data);
   const userEmail = token.email;
   this.setState((state) => {
      state.auth = true;
      state.info.email = userEmail;
      return state;
   });
  }

  handleChange = event => {
    const field = event.target.name;
    const info = this.state.info;
    info[field] = event.target.value;

    this.setState({ info });
  }

  handleSubmit = () => {
    const newDay = this.state.info;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/horario`
    axios.post(url, newDay)
      .then(response => {
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
      <ScheduleForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        info={this.state.info} />
    );
  }
}

export default Schedule;
