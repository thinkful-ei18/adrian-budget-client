import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
      <nav className='navbar'>
      <h1 classname='appName'>Windfall</h1>
      <button>Sign Up</button>
      <button>Log in</button>
      </nav>
    );
  }
}