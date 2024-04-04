<<<<<<< HEAD
import React from 'react';
import logo from './holberton logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
=======
import logo from './logo.svg';
>>>>>>> 2d95adf54d5195c5f648ee00c47c34e03155311a
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
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
=======
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 2d95adf54d5195c5f648ee00c47c34e03155311a
    </div>
  );
}

export default App;
