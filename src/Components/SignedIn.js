import React from 'react';
import { Link } from 'react-router-dom';

function SignedIn() {
  return (
    <div className="Menu-bar">
      <Link to="/deportes/ui">Inicio</Link>
      <Link to="/schedule">Horario</Link>
      <Link to="/signout">Salir</Link>
    </div>
  );
}

export default SignedIn;