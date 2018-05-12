import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route component={NotFoundPage} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
