import React from 'react';
import { Link } from 'react-router-dom';

function SignedOut() {
  return (
    <div className="Menu-bar">
      <Link to="/deportes/ui">Inicio</Link>
      <Link to="/deportes/ui">Ingreso</Link>
      <Link to="/deportes/ui">Registro</Link>
    </div>
  );
}

export default SignedOut;
