import React, {Component} from 'react';
import List from './List';

export default class Dashboard extends Component {
  render() {
    return (
      <main>
        <ul>
          <li>New Bill</li>
          <li>Change Income</li>
          <li>Logout</li>
        </ul>
        <List/>
      </main>
    );
  }
}