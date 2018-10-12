import React from 'react';

function Data({hour, index}) {
    return (
        <tr>
            <td>{index + 9} </td>
            <td>{hour.lunes} </td>
            <td>{hour.martes} </td>
            <td>{hour.miercoles} </td>
            <td>{hour.jueves} </td>
            <td>{hour.viernes} </td>
      </tr>
    );
}

export default Data;