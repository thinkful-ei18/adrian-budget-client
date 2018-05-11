import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={LandingPage} />
      <Footer/>
      </div>
    );
  }
}

export default App;
