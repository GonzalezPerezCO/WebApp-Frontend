import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      info: {
        hour: 9,
        day: 'lunes',
        email: ''
      }
    };
  }

  validateLogin = () => {
    /* decode jwt to get access to id & email 
       if  localStorage has item 'jwt' then auth = true
       this.setState({ email: jwtdecoded.email })
    */
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
      (<Redirect to="/login" />) :
      (<ScheduleForm 
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        info={this.state.info} />)
    );
  }
}

export default Schedule;
