import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mainElement = (
    <div id="root" className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. ok ?
        </p>
        <p className="App-footer">

        </p>
      </div>
);


class App extends Component {
  render() {
    mainElement, 
    document.getElementById('root')
  }
}

export default App;
