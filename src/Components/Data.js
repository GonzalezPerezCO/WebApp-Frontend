import React from 'react';

function Data({hour, index}) {
    return (
        <tr>
            <td>{index + 8 + ":00"} </td>
            <td>{hour.LUNES} </td>
            <td>{hour.MARTES} </td>
            <td>{hour.MIERCOLES} </td>
            <td>{hour.JUEVES} </td>
            <td>{hour.VIERNES} </td>
      </tr>
    );
}

export default Data;
