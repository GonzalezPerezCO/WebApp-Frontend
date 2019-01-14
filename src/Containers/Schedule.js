import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jwt_decode from 'jwt-decode';
import { Table } from 'react-bootstrap';
import Days from '../Components/Days';
import { Redirect } from 'react-router-dom';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      hasSchedule: false,
      redirect: false,
      days: [],
      info: {
        hora: 8,
        dia: 'lunes',
        email: "",
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
         if (!response.data[0].error) {
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

    swal({
      title: "Reglamento Inscripciones Gimnasio",
      text: "1. El código de reserva es personal e intransferible. \n 2. El estudiante tendrá una semana para formalizar la inscripción al gimnasio. Pasado este tiempo se dispondrá del código de reserva. \n 3. Quien formalice su inscripción y no asista al gimnasio quedará sancionado al uso de este por un año. \n 4. Quien tenga más de tres fallas injustificadas durante el semestre no se le permitirá la inscripción en el semestre siguiente. \n 5. Fechas de asignación de códigos de reserva y horarios se publicaran en el Notiweb. \n Nota: Para iniciar actividades en el Gimnasio se requiere la evaluación física. \n \n Confirma que ha leido y entiende el reglamento",
      buttons: ["No acepto", "Si, entiendo"]
    })
    .then((accepted) => {
      if(accepted){
        swal("Gracias por aceptar el reglamento ahora puede registrar horario", {icon: "success"});
      } else {
        swal("El reglamento no fue aceptado", "", "info");
        this.setState({
          redirect: true,
        })
      }
    })
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
        if(response.data === "No hay cupo"){
          swal(response.data, "Por favor escoje otra hora o dia", "info");
        } else if(response.data === "No puede agregar mas dias"){
          swal(response.data, "Ya registró su límite de días por semana", "info");
        } else {
          swal("Listo!", "Agregado exitosamente", "success");
        }
      })
      .catch(error => {
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
    return (
    this.state.redirect ?
      (<Redirect to="/signout" />) :
      (this.state.hasSchedule ? this.renderDays() : this.renderNormal())
    ); 
  }
}

export default Schedule;
