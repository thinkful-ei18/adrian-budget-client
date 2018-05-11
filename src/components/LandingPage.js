import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>No budget required</h1>
          <p>Just keep track of your bills and when they've been paid</p>
          <button>Get started</button>
        </header>
        <main>
          <div>
            <h2>See your bills in one place</h2>
            <p>View them at your computer or on your phone</p>
          </div>
          <div>
            <h2>Skip the budget</h2>
            <p>Check off bills as you pay them</p>
          </div>
          <div>
            <h2>Track your windfall</h2>
            <p>Know what's left over (and what isn't!)</p>
          </div>
        </main>
      </div>
    );
  }
}