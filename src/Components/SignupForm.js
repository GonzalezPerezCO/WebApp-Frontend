import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm({onSubmit, onChange, user}) {
    return (
      <div className="form">
        <h2>Registro</h2>
        <form className="inputs" >
          <div className="input-field">
            <label>
                Nombre
              <input className="input-b" type="text" name="name" value={user.name} onChange={onChange} />
              <p className="input-p"></p>
            </label>
          </div>
          <div className="input-field">
            <label>
                Documento identidad
              <input className="input-b" type="text" name="document" value={user.document} onChange={onChange} />
              <p className="input-p"></p>
            </label>
          </div>
          <div className="input-field">
            <label>
                Email
              <input className="input-b" type="email" name="email" value={user.email} onChange={onChange}/>
              <p className="input-p"></p>
            </label>
          </div>
          <div className="input-field">
            <label>
                Contraseña
              <input className="input-b" type="password" name="password" value={user.password} onChange={onChange}/>
              <p className="input-p"></p>
            </label>
          </div>
          <div>
            <button className="form-btn" type="button" onClick={onSubmit} >Enviar </button>
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