import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
      <nav className='navbar'>
        <h1 className='appName'>Windfall</h1>
        <ul className='navlist'>
          <li>Sign up</li>
          <li>Log in</li>
        </ul>
      </nav>
    );
  }
}