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
      hasSchedule: false,
      info: {
        hora: 8,
        dia: 'lunes',
        email: ""
      }
    };
  }

  componentDidMount() {
   const data = sessionStorage.getItem('jwt');
   const token = jwt_decode(data);
   const userEmail = token.email;
   const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/horario/${userEmail}`;
   axios.get(url)
   .then(response => {
     console.log(response.data);
   })
   .catch(error => {
     console.log(error);
   });
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
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/horario`;
    axios.post(url, newDay)
      .then(response => {
        console.log(response.data);
        if(response.data){
          swal(response.data, "Por favor escoje otra hora o dia", "info");
        } else {
          swal("Listo!", "Agregado exitosamente", "success");
        }
      })
      .catch(error => {
        console.log(error);
        swal({
          title: "Oops!",
          text: "Se presentó un error con los cupos: " + error.message,
          icon: "error"
        });
      });
  }

  render() {

    return (
      <ScheduleForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        info={this.state.info} 
        selected={this.state.hasSchedule ? "Ya tiene dias" : "Aún no ha seleccionado dias"}/>
    );
  }
}

export default Schedule;
