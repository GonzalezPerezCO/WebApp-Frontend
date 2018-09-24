import React from 'react';
import axios from 'axios';
import Data from '../Components/Data';
import { Button, Table } from 'react-bootstrap';

class Quota extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hours: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api`)
        .then(response => {
            const hours = response.data;
            console.log(hours);
            this.setState({ 
                hours,
                loading: false 
            });
        })
        .catch(error => {
            this.setState({
                error: error,
                loading: false
             });
        });
    }

    renderLoading() {
        return <div>Cargando...</div>;
    }

    renderError() {
        return (
            <div>
                <div className="form"> 
                   <h2>Hubo un error inesperado: {this.state.error.message}</h2>
                </div>
            </div>
        );
    }

    renderList() {
        const { error, hours } = this.state;

        if(error) {
            console.log(error);
            return this.renderError();
        }
        return (
            <div className="table-hour">
                <Table striped bordered condensed>
                <thead >
                    <tr>
                        <th>Hora</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map((hour, index) => (
                        <Data hour={hour} index={index} key={hour.id} />
                    ))}
                </tbody>
            </Table>
            </div>
        );
    }

    render() {
        return this.state.loading ? this.renderLoading() : this.renderList();
    }
}

export default Quota;