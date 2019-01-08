import React, { Fragment } from 'react';

function ScheduleForm({ onSubmit, onChange, name, info, selected }) {
  return (
    <Fragment>
      <div className="email-title">
        <h5>Bienvenido {name} </h5>
        <h6> {info.email} </h6>
      </div>
      <div className="form">
        <h4>Dias escogidos</h4>
        <div className="inputs">{selected}</div>  
      </div>
      <div className="form">
        <h2>Escoger horario</h2>
        <form className="inputs" onSubmit={onSubmit}>
          <div className="select-field">
            <div className="options">
              <label>
                Dia: 
                <select className="dia" name="dia" value={info.dia} onChange={onChange}>
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miercoles">Miércoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
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
            <button className="form-btn" type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <div className="block-3">
       <p>De acuerdo con el reglamento del Gimnasio, sólo puede asistir mínimo 2 veces y máximo 3 veces por semana. <br/> Puede escoger horario, eligiendo el dia y la hora en la que quiere asistir al gimnasio y luego oprimiendo el botón <b>Enviar.</b></p> <p> Recuerde que sólo puede asistir una vez por dia en un espacio de una hora por dia.</p> 
      </div>
    </Fragment>
  );
}

export default ScheduleForm;
