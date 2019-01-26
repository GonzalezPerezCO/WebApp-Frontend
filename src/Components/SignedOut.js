import React from 'react';
import { Link } from 'react-router-dom';

function SignedOut() {
  return (
    <div className="Menu-bar">
      <Link to="/deportes/ui">Inicio</Link>
      <Link to="/login">Ingreso</Link>
    </div>
  );
}

export default SignedOut;