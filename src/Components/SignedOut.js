import React from 'react';
import { Link } from 'react-router-dom';

function SignedOut() {
  return (
    <div className="Menu-bar">
      <Link to="/">Inicio</Link>
      <Link to="/login">Ingreso</Link>
      <Link to="/signup">Registro</Link>
    </div>
  );
}

export default SignedOut;
