import React, {Component} from 'react';
import List from './List';
import User from './User';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <main>
          <User/>
          <ul>
            <li>New Bill</li>
            <li>Change Income</li>
            <li>Logout</li>
          </ul>
          <List/>
        </main>
      </div>
    );
  }
}