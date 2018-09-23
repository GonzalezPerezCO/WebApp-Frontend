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
          Sí necesita ayuda con el sistema, puede comunicarse a los correos de los
          desarrolladores que verá en la parte inferior, Primero registrese en{' '}
          <b>Registrarse</b> con su número de reserva y complete los datos que se
          le piden. El registro lo puede hacer en cualquier momento de día hoy
          Agosto 18.
        </span>
        <p>
          Despues de crear su cuenta inicie sesión. Luego de esto puede hacer su
          horario.
        </p>
      </div>
      <div className="quota-box">
          <Link to="/quota"> Ver cupos disponibles</Link>
      </div>
      <div className="block-2" >
        <span>
          Esta es una iniciativa propia con el apoyo del Laboratorio de Sistemas y Bienestar Universitario, para la elaboración de horarios de los estudiantes al Gimnasio de la Escuela. Para saber mas visite el NOTIWEB. 
        </span>
      </div>
    </Fragment>
  );
}

export default Home;
