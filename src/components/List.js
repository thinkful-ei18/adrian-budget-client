import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bill } from './Bill';
import { fetchBills } from '../actions/bills-actions';

export class List extends Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      this.props.dispatch(fetchBills());
    }
  }

  render() {
    let bills;
    let listItems;

    // bills = [
    //   {id: 1, title: 'Spotify', amount: 15},
    //   {id: 2, title: 'Netflix', amount: 11},
    //   {id: 3, title: 'Charter', amount: 65.99}
    // ];

    if (this.props.userBills) {
      bills = this.props.userBills;

      listItems = bills.map((item) =>
        <li key={item.id}>
          <Bill id={item.id} title={item.title} amount={item.amount}/>
        </li>
      );
    } else {
      listItems =
        <li>Let's add your first bill! Click 'New Bill', add its' details, then it'll appear in this list!</li>
    }

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
  hasAuthToken: state.currentUser.authToken !== null,
  userBills: state.bills.list
});

export default connect(mapStateToProps)(List);