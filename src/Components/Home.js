import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Fragment>
      <div className="block">
        <h1 className="App-title">Horarios del Gimnasio</h1>
        <p className="App-intro">Por favor ingrese o registrese.</p>
      </div>
      <div className="block-2">
        <p>
          <b> Instrucciones:</b>
        </p>
        <span>
          Sí necesita ayuda con el sistema o se le presenta algun error, puede comunicarse a los correos de los
          desarrolladores que verá en la parte inferior.
        </span>
        <span>
          Primero registrese en <b> Registrarse </b> con los datos requeridos. 
        </span>
          <p>El registro lo puede hacer en cualquier momento del día</p>
        <p>Despues de crear su cuenta puede iniciar sesión. Luego de esto puede elegir los días en los que quiere asistir al Gimnasio.</p>
      </div>
      <div className="quota-box">
          <Link to="/quota"> Ver cupos disponibles</Link>
      </div>
      <div className="block-2" >
        <span>
          Esta es una iniciativa propia con el apoyo del Laboratorio de Sistemas y Bienestar Universitario. <br/> Creada para facilitar la elaboración de horarios de los estudiantes al Gimnasio de la Escuela. 
        </span>
      </div>
    </Fragment>
  );
}

export default Home;
