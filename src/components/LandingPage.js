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
            <h2>Create a list of bills</h2>
            <p>View them at your computer or on your phone</p>
          </div>
          <div>
            <h2>Mark off paid bills</h2>
            <p>Easily keep track of bills you've paid so far</p>
          </div>
          <div>
            <h2>Track your windfall</h2>
            <p>Always know what's left over after paying your bills</p>
          </div>
        </main>
      </div>
    );
  }
}