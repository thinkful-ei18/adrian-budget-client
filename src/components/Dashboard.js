import React, {Component} from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <button>Hamburger Icon</button>
        <div>
          <ul>
            <li>Bill 1</li>
            <li>Bill 2</li>
            <li>Bill 3</li>
          </ul>
          <nav>
            <ul>
              <li>New Bill</li>
              <li>Change Income</li>
              <li>Logout</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}