import React, { Component } from 'react';
import './App.scss';
import Topbar from './components/Topbar/Topbar';
import Board from './containers/Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Board />
      </div>
    );
  }
}

export default App;
