import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm({onSubmit, onChange, user}) {
    return (
     <div className="form">
        <h2>Ingreso</h2>
        <form className="inputs" onSubmit={onSubmit}>
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
            <button className="form-btn" type="submit">Ingresar</button>
          </div>
        </form>
      <p>
        No estas registrado? 
        <span className="form-link"> 
          <Link to="/signup">Registrate</Link>
        </span>
      </p>
     </div>
    );
}

export default LoginForm;
