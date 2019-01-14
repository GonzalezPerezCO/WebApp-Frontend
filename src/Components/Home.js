import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home({ error, loginButton }) {
  return (
    <Fragment>
      <div className="block">
        {error}
        <h1 className="App-title">Alpha Sport</h1>
        <p className="App-intro">Por favor ingrese o registrese.</p>
      </div>
      <div className="block-2">
        <p>
          <b> Instrucciones:</b>
        </p>
        <span>
          Primero registrese en <b> Registro </b> con los datos requeridos. 
        </span>
            <p>   </p>
            <p>El registro puede ser realizado en cualquier momento del día</p>
          <span>
            <p>Luego inicie sesión en <b> Ingreso </b> con los datos que registró</p>
            <p>Al ingresar correctamente va a poder ver el reglamento del Gimnasio.</p> 
            <p>Una vez lo haya aceptado, podrá registrar los días en los que quiere asistir al Gimnasio.</p>
          </span>
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
