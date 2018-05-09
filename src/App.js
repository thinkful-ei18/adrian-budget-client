import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      </div>
    );
  }
}

export default App;
