import React from 'react';

function Days({day, index}) {
    return (
        <tr>
            <td>{index +1}</td>
            <td>{day.dia}</td>
            <td>{day.hora}</td>
        </tr>
    );
}

export default Days;