import React, {Component} from 'react';

export default function Bill(props) {
  return(
    <div>
      <div>
        {props.expanded}
        <h1>{props.name}</h1>
        <h2>{props.amount}</h2>
        <p>{props.duedate}</p>
        <div>{props.beenpaid}</div>
        <p>{props.billinterval}</p>
      </div>
      <div>
        {props.category_id}
      </div>
    </div>
  );
}

Bill.defaultProps = {
  expanded: false,
  name: 'Happiness',
  amount: 55,
  duedate: '2018-03-20',
  beenpaid: false,
  billinterval: 'P [ years-months-days ]',
  category_id: [100, 101, 102]
}