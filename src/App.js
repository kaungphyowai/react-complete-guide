import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>I am back Ha Ha.</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
