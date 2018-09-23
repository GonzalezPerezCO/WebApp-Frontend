import React from 'react';
import Table from './Table';

class Quota extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    <Table />
                </tbody>
            </table>
        );
    }
}

export default Quota;