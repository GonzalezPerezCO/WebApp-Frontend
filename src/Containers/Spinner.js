import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
var Spin = require('react-spinkit');

class Spinner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        registered: false,
        redirect: false,
        email: ''
    };
  }
  
  componentDidMount() {
    const userEmail = this.props.location.state.email;
    const reged = this.props.location.state.reg;
    const url = `http://estudiantes.is.escuelaing.edu.co/deportes/api/public/registro/${userEmail}`;
    axios.get(url)
    .then(res => {
        console.log(res.data);
      if(res.data.registro === 1){
        this.setState({
           registered: reged,
           redirect: true,
           email: userEmail
        })
      }
    }).catch(err => {
      console.error(err.message);
    })
  }
  
  render(){
    return(
        this.state.redirect ?
        (this.state.registered ? 
          <Redirect to={{pathname: "/schedule", state: {reg: this.state.registered} }} /> : 
          <Redirect to={{pathname: "/signup", state: {email: this.state.email} }} />
        ) :
        (<div className="spin-box"> 
           <Spin name="chasing-dots" color="#4C72CA" className="login-spinner"/>
           <div className="loading-box"><h4>Cargando...</h4></div>
         </div>
        ) 
    );
  }  
}

export default Spinner;
