import React from 'react';
import logo from './holberton logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        <hr className="horizontal-line" />
      </header>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>

      <footer className="App-footer">
         <hr className="horizontal-line" />
          <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
