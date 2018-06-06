import React from 'react';
import './User.css';

export default function User(props) {
  return (
    <div className='user'>
      <h1 className='user-firstname'>Hello, {props.firstname}!</h1>
      <h2 className='user-grossincome'>You make ${props.grossincome.toLocaleString('en')} a month.</h2>
      <p className='user-netincome'>
        After bills, you'll have ${props.netincome.toLocaleString('en')} left over.
      </p>
    </div>
  );
}

User.defaultProps = {
  firstname: 'User',
  grossincome: 0,
  netincome: 0
};