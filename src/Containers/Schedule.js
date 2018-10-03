import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import ScheduleForm from '../Components/ScheduleForm';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      info: {
        hour: 0,
        day: '',
      },
    };
  }

  handleChange = event => {
    const field = event.target.name;
    const info = this.state.info;
    info[field] = event.target.value;

    this.setState({
      info,
    });
  };

  handleSubmit = () => {
    const newDay = this.state.info;

    axios
      .post(`localhost:8080/api/horario`, { newDay })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
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
