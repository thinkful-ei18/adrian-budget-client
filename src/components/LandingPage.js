import React, { Component } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return(
      <div className='landing-page-container'>
        <main className='landing-page'>
          <h1>No budget required.</h1>
          <p>Create a list of bills, track what's been paid so far, and take control of your windfall by knowing how much money you have left over.</p>
          <div>
          <h2>Let's get started!</h2>
            <RegistrationForm/>
          </div>
          {/* <div>
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
          </div> */}
        </main>
      </div>
    );
  }
}