import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        hour: 9,
        day: 'lunes',
      }
    };
  }

  handleChange = event => {
    const field = event.target.name;
    const info = this.state.info;
    const data = event.target.value;
    info[field] = data;

    this.setState({
      info
    });
  };

  handleSubmit = () => {
    //const newDay = this.state.info;
    const url = `https://randomuser.me/api/?results=1&inc=dob&noinfo`;
    axios.get(url )
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
  };

  render() {
    return (
      <ScheduleForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        info={this.state.info}
      />
    );
  }
}

export default Schedule;
