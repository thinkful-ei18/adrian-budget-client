import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
