import React from 'react';

function Schedule({ onSubmit, onChange, info }) {
  return (
    <div className="form">
      <h2>Escoger horario</h2>
      <form className="inputs">
        <div className="select-field">
          <label>
            Primer día
            <select className="dia" value={info.day} onChange={onChange}>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miércoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
            </select>
          </label>
          <label>
            Hora del primer día
            <select className="hora" value={info.hour} onChange={onChange}>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>
          </label>
          <button className="form-btn" type="button" onClick={onSubmit}>
              Enviar
            </button>
        </div>
        <div className="select-field">
          <label>
            Segundo día
            <select className="dia" value={info.day} onChange={onChange}>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miércoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
            </select>
          </label>
          <label>
            Hora del segundo día
            <select className="hora" value={info.hour} onChange={onChange}>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>
          </label>
          <button className="form-btn" type="button" onClick={onSubmit}>
              Enviar
          </button>
        </div>
        <div className="select-field">
          <label>
            Tercer día
            <select className="dia" value={info.day} onChange={onChange}>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miércoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
            </select>
          </label>
          <label>
            Hora del tercer día
            <select className="hora" value={info.hour} onChange={onChange}>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>          
          </label>
          <button className="form-btn" type="button" onClick={onSubmit}>
              Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Schedule;
