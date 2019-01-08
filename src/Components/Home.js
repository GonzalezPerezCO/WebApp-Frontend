import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home({ error, loginButton }) {
  return (
    <Fragment>
      <div className="block">
        {error}
        <h1 className="App-title">Alpha Sport</h1>
        <span>
          <button className="home-btn" onClick={loginButton}>Ingresar</button>
        </span>
      </div>
      <div className="block-2">
        <p>
          <b> Instrucciones:</b>
        </p>
        <span>
          Puede ingresar al sistema usando su usuario y contraseña asignada del correo institucional.
        </span>
            <p>   </p>
            <p>El registro puede ser realizado en cualquier momento del día</p>
          <span>
            <p>Al ingresar correctamente va a poder ver el reglamento del Gimnasio. 
            Una vez lo haya aceptado, podrá registrar los días en los que quiere asistir al Gimnasio.</p>
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
