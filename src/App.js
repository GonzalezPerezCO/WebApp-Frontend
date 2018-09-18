import React from 'react';
import logo from './logo-ESCUELA.svg';
import './App.css';

function App(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Deportes de la Escuela</h1>
        </header>
        <p className="App-intro">
          Por favor ingrese o registrese.
        </p>
      </div>
    );
}

export default App;
