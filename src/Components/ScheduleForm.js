import React from 'react';

function ScheduleForm({ onSubmit, onChange, info }) {
  return (
    <div className="form">
      <h2>Escoger horario</h2>
      <form className="inputs">
        <div className="select-field">
          <div className="options">
            <label>
              Turno: 
              <select className="turno" name="ide" value={info.ide} onChange={onChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <label>
              Dia: 
              <select className="dia" name="day" value={info.day} onChange={onChange}>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
              </select>
            </label>
            <label>
              Hora: 
              <select className="hora" name="hour" value={info.hour} onChange={onChange}>
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
          </div>
          <button className="form-btn" type="button" onClick={onSubmit}>
              Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ScheduleForm;
