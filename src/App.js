import React, { Component } from 'react';
import './App.css';
import UserInputContainer from './Containers/userInput/UserInputContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tarea 1</h1>
        <UserInputContainer />
      </div>
    );
  }
}

export default App;
