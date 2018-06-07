import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bill from './Bill';
import { fetchBills } from '../actions/bills-actions';

export class List extends Component {

  componentDidMount() {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
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

    if (this.props.userBills.length > 0) {
      bills = this.props.userBills;

      listItems = bills.map((item, index) =>
        <li key={index}>
          <Bill id={item.id} title={item.title} amount={item.amount} billinterval={item.billinterval} index={index}/>
        </li>
      );
    } else {
      listItems =
        <li className='onboarding-text'>Let's add your first bill! Click 'Menu', then click 'New Bill' to add your first bill!</li>
    }

    return (
      <div className='bills-list-container' >
        <ul className='bills-list'>
          {listItems}
        </ul>
      </div>
    );
  }
};

export const mapStateToProps = (state, props) => ({
  hasAuthToken: state.currentUser.authToken !== null,
  userBills: state.bills.list || []
});

export default connect(mapStateToProps)(List);