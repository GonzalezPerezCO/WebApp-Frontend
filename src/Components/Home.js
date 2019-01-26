import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home({ error }) {
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
          Puede iniciar sesión en <b> Ingreso </b> con su correo institucional. 
        </span>
            <p>   </p>
            <p>Luego complete el registro con los datos requeridos</p>
          <span>
            <p>Al ingresar correctamente va a poder ver el reglamento del Gimnasio.</p> 
            <p>Una vez lo haya aceptado, podrá registrar los días en los que quiere asistir al Gimnasio.</p>
          </span>
      </div>
      <div className="quota-box">
          <Link to="/quota"> Ver cupos disponibles</Link>
      </div>
      <div className="block-2" >
        <span>
         <p> Esta es una iniciativa propia con el apoyo del Laboratorio de Sistemas y Bienestar Universitario. </p> Creada para facilitar la elaboración de horarios de los estudiantes al Gimnasio de la Escuela. 
        </span>
      </div>
    </Fragment>
  );
}

export default Home;