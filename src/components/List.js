import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bill } from './Bill';

export class List extends Component {
  render() {

    const bills = [
      {id: 1, title: 'Spotify', amount: 15},
      {id: 2, title: 'Netflix', amount: 11},
      {id: 3, title: 'Charter', amount: 65.99}
    ];

    const listItems = bills.map((item) =>
      <li key={item.id}>
        <Bill id={item.id} title={item.title} amount={item.amount}/>
      </li>
    );

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
};

export const mapStateToProps = (state, props) => ({
  loggedIn: state.currentUser.info !== null,
  bills: state.bills.list
});

export default connect(mapStateToProps)(List);