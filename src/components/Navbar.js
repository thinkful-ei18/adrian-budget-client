import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return(
    <div>
      <header>
        <nav>
          <h1>Windfall</h1>
          <ul>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </nav>
      </header>
    </div>
    );
  }
}