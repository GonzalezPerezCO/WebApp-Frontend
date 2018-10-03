import React from 'react';
import { Link } from 'react-router-dom';

function SignedIn() {
  return (
    <div className="Menu-bar">
      <Link to="/">Inicio</Link>
      <Link to="/signout">Registro</Link>
    </div>
  );
}

export default SignedIn;
