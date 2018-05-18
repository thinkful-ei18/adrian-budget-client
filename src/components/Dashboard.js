import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BillForm from '../components/BillForm';
import List from './List';
import User from './User';
import './Dashboard.css';

export class Dashboard extends Component {

  toggleBillForm() {
    this.setState({editingBillForm: !this.state.editingBillForm});
  }

  constructor(props) {
    super(props);

    this.state = {
      showBillForm: false,
      editingBillForm: false,
      showIncomeForm: false
    }

    this.toggleBillForm = this.toggleBillForm.bind(this);
  }

  render() {
    const { id, loggedIn, user } = this.props;
    let billForm;
    let incomeForm;
    const billFormIdentifier = `billForm-${id}`;

    if (!loggedIn) {
      return <Redirect to='/'/>;
    }

    if (this.state.editingBillForm) {
      billForm = <BillForm editButton={this.toggleBillForm}/>
    } else {
      billForm = '';
    }

    return (
      <div>
        <main>
          <User firstname={user.firstname} grossincome={user.income}/>
          <ul>
            <li>
              <button
                className='billform-toggle-btn'
                aria-expanded={this.state.showBillForm}
                aria-controls={billFormIdentifier}
                onClick={this.toggleBillForm}
              >
                New Bill
              </button>
              </li>
            <li>Change Income</li>
            <li>Logout</li>
          </ul>
          <div
            id={billFormIdentifier}
            className='bill-form-collapsible'
            aria-hidden={!this.state.showBillForm}
          >
            {billForm}
          </div>
          <List/>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.currentUser.info !== null,
  user: state.currentUser.info
});

export default connect(mapStateToProps)(Dashboard);