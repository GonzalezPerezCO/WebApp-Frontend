import React from 'react';

function Data({hour, index}) {
    return (
        <tr>
            <td>{index + 8 + ":00"} </td>
            <td>{hour.Lunes} </td>
            <td>{hour.Martes} </td>
            <td>{hour.Miercoles} </td>
            <td>{hour.Jueves} </td>
            <td>{hour.Viernes} </td>
      </tr>
    );
}

export default Data;
