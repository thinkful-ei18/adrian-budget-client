import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import List from './List';
import User from './User';
import './Dashboard.css';

export class Dashboard extends Component {

  sumOfKeys (expenses, key) {
    return expenses.reduce((acc, expense) => {
      return acc + expense[key];
    }, 0);
  }

  render() {
    let netIncome;
    const { loggedIn, user, bills } = this.props;

    if (bills !== null) {
      const sumOfBills = this.sumOfKeys(bills, 'amount');
      netIncome = user.income - sumOfBills;
    } else {
      netIncome = 0;
    }


    if (!loggedIn) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <main className='dashboard'>
          <User firstname={user.firstname} grossincome={user.income} netincome={netIncome}/>
          <List/>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.currentUser.info !== null,
  user: state.currentUser.info ? state.currentUser.info : '',
  bills: state.bills.list
});

export default connect(mapStateToProps)(Dashboard);