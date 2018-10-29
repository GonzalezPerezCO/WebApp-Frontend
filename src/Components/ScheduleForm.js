import React, { Fragment } from 'react';

function ScheduleForm({ onSubmit, onChange, info }) {
  return (
    <Fragment>
      <div className="email-title">
        <h5>Bienvenido {info.email} </h5>
      </div>
      <div className="form">
        <h2>Escoger horario</h2>
        <form className="inputs">
          <div className="select-field">
            <div className="options">
              <label>
                Turno: 
                <select className="turno" name="turno" value={info.turno} onChange={onChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label>
                Dia: 
                <select className="dia" name="dia" value={info.dia} onChange={onChange}>
                  <option value="lunes">Lunes</option>
                  <option value="martes">Martes</option>
                  <option value="miercoles">Miércoles</option>
                  <option value="jueves">Jueves</option>
                  <option value="viernes">Viernes</option>
                </select>
              </label>
              <label>
                Hora: 
                <select className="hora" name="hora" value={info.hora} onChange={onChange}>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                </select>
              </label>
            </div>
            <button className="form-btn" type="button" onClick={onSubmit}>
                Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="block-3">
       <p>De acuerdo con el reglamento del Gimnasio, un estudiante sólo puede asistir un máximo de 3 veces por semana. <br/> Si va a asistir más de un dia al Gimnasio, elija el turno 1 junto con el dia y hora en el que quiere asistir y oprima el botón <b>Enviar.</b></p> <p>Después escoja el turno 2 con el dia y hora correspondiente y de la misma forma con el turno 3. <br/> Recuerde que sólo puede asistir una vez por dia en un espacio de una hora por dia.</p> 
      </div>
    </Fragment>
  );
}

export default ScheduleForm;
