import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jwt_decode from 'jwt-decode';
import { Table } from 'react-bootstrap';
import Days from '../Components/Days';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      hasSchedule: false,
      days: [],
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
     if(!response.data[0].error){
      const days = response.data;
      this.setState({ 
        days,
        hasSchedule: true
      });
     }
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

  handleSubmit = (event) => {
    event.preventDefault();
    const newDay = this.state.info;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/horario`;
    axios.post(url, newDay)
      .then(response => {
        console.log(response.data);
        if(response.data === "No hay cupo"){
          swal(response.data, "Por favor escoje otra hora o dia", "info");
        } else if(response.data === "No puede agregar mas dias"){
          swal(response.data, "Ya registró su límite de días por semana", "info");
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

  renderDays = () => {
    const { days } = this.state;
    const daysTable = <Table><thead><tr><th>Turno</th><th>Dia</th><th>Hora</th></tr></thead><tbody>{days.map((day, index) => (<Days day={day} index={index} key={day.id} />))}</tbody></Table>;
    return (
      <ScheduleForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        info={this.state.info} 
        selected={daysTable}/>
    );
  }

  renderNormal = () => {
    return (
      <ScheduleForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        info={this.state.info} 
        selected={"Aún no ha seleccionado dias"}/>
    );
  }
  
  render() {
    return this.state.hasSchedule ? this.renderDays() : this.renderNormal();
  }
}

export default Schedule;
