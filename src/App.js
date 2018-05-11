import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={LandingPage}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
