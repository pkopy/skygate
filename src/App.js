import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'


class App extends Component {
  state = {
    data : [],
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
          
        </header>
        <Input />
      </div>
    );
  }
}

export default App;
