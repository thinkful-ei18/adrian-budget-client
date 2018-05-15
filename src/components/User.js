import React from 'react';

export default function User(props){
  return (
    <div>
      <h1>Hello {props.firstname}!</h1>
      <h2>You make ${props.grossincome} a month.</h2>
      <p>
        After bills, you'll have: ${props.netincome} left over.
      </p>
    </div>
  );
}

User.defaultProps = {
 firstname: 'User',
 grossincome: 0,
 netincome: 0
};