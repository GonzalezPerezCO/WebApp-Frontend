import React from 'react';

function Schedule() {
    return (
        <div className="form">
            <h2>Escoger horario</h2>
            <form className="inputs">
                <div className="select-field">
                    <label>
                        Hora del primer día
                        <select className="hora">
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
                <div className="select-field">
                    <label>
                        Hora del segundo día
                        <select className="hora">
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
                <div className="select-field">
                    <label>
                        Hora del tercer día
                        <select className="hora">
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
            </form>
        </div>
    );
}

export default Schedule;