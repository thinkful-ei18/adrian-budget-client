import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
      <nav className='navbar'>
        <h1 className='appName'>Windfall</h1>
        <button className="navButton">Sign Up</button>
        <button className="navButton">Log in</button>
      </nav>
    );
  }
}