import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
    return (
      <div className="form">
        <h2>Registro</h2>
        <form className="inputs">
          <div className="input-field">
            <label>
                Nombre
              <input className="input-b" type="text" name="name" />
              <p className="input-p"></p>
            </label>
          </div>
          <div className="input-field">
            <label>
                Documento identidad
              <input className="input-b" type="text" name="document" />
              <p className="input-p"></p>
            </label>
          </div>
          <div className="input-field">
            <label>
                Email
              <input className="input-b" type="email" name="email" />
              <p className="input-p"></p>
            </label>
          </div>
          <div className="input-field">
            <label>
                Contraseña
              <input className="input-b" type="password" name="password" />
              <p className="input-p"></p>
            </label>
          </div>
          <div>
            <button className="form-btn" type="button">Enviar </button>
          </div>
        </form>
      <p>
        Ya te registraste?
        <span className="form-link">  
          <Link to="/login">Ingresa</Link>
        </span>
      </p>
      </div>
    );
}

export default SignupForm;