import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm({onSubmit, onChange, user}) {
    return (
      <div className="form">
        <h2>Registro</h2>
        <h3>Termina el registro</h3>
        <h4>{user.email}</h4>
        <form className="inputs" onSubmit={onSubmit}>
          <div className="input-field">
            <label>
                Nombres
              <input className="input-b" name="nombre" value={user.nombre} onChange={onChange} required title="Minimo 4 letras" />
            </label>
          </div>
          <div className="input-field">
            <label>
                Apellidos
              <input className="input-b" name="apellido" value={user.apellido} onChange={onChange} required title="Minimo 4 letras"/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Carnet
              <input className="input-b" name="codigo" value={user.codigo} onChange={onChange} pattern="[0-9]{7,11}" required title="Debe tener entre 7 y 11 numeros"/>
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
          <div className="input-field">
            <label>
                Código de reserva
              <input className="input-b" type="text" name="reserva" value={user.reserva} onChange={onChange} pattern="[0-9]{5,10}" required title="Debe tener maximo 10 numeros"/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Documento de identidad
              <input className="input-b" type="text" name="documento" value={user.documento} onChange={onChange} pattern="[0-9]{7,11}" required title="Debe tener entre 7 y 11 numeros"/>
            </label>
          </div>
          <div className="input-field">
            <label>
                Carrera
              <select className="input-b" name="carrera" value={user.carrera} onChange={onChange} required>
                <option value="">Escoja una</option>
                <option value="Ingenieria Civil">Ingeniería Civil</option>
                <option value="Ingenieria Electronica">Ingeniería Electrónica</option>
                <option value="Ingenieria Mecanica">Ingeniería Mecánica</option>
                <option value="Ingenieria Electrica">Ingeniería Eléctrica</option>
                <option value="Ingenieria de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ingenieria Industrial">Ingeniería Industrial</option>
                <option value="Ingenieria Ambiental">Ingeniería Ambiental</option>
                <option value="Ingenieria Biomedica">Ingeniería Biomédica</option>
                <option value="Administracion de Empresas">Administración de Empresas</option>
                <option value="Matematicas">Matemáticas</option>
                <option value="Economía">Economía</option>
            </select>
            </label>
          </div>
          <div className="input-field">
            <label>
                Semestre
              <input className="input-b" type="number" name="semestre" value={user.semestre} onChange={onChange} min="1" max="10" maxLength="2" required/>
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
