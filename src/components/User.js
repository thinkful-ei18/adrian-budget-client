import React from 'react';

export default function User(props){
  return (
    <div>
      <h1>{props.firstname}</h1>
      <h2>Income: {props.income}</h2>
      <p>
        {props.quantity}
        After bills, you'll have: {props.netincome}
        This could be your windfall. Use it wisely!
      </p>
    </div>
  );

}