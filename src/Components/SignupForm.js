import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm({onSubmit, onChange, user}) {
    return (
      <div className="form">
        <h2>Registro</h2>
        <form className="inputs" onSubmit={onSubmit}>
          <div className="input-field">
            <label>
                Nombres
              <input className="input-b" type="text" name="nombre" value={user.nombre} onChange={onChange} minLength="4" required/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Apellidos
              <input className="input-b" type="text" name="apellido" value={user.apellido} onChange={onChange} minLength="4" required/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Carnet
              <input className="input-b" type="number" name="codigo" value={user.codigo} onChange={onChange} minLength="5" required/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Email
              <input className="input-b" type="email" name="email" value={user.email} onChange={onChange} placeholder="Correo institucional" required/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Contraseña
              <input className="input-b" type="password" name="password" value={user.password} onChange={onChange} placeholder="Contraseña correo" required/>
            </label>
          </div>
          <div>
            <button className="form-btn" type="submit">Enviar</button>
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
