import React, {Component} from 'react';
import BillForm from '../components/BillForm';
import IncomeForm from '../components/IncomeForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logout } from '../actions/user-actions';

export class Navbar extends Component {
  toggleMenu () {
    this.setState({showMenu: !this.state.showMenu});
  }

  handleLogOut () {
    this.setState({showMenu: false});
    this.props.dispatch(logout());
  }

  toggleBillForm() {
    this.setState({showBillForm: !this.state.editingBillForm, editingBillForm: !this.state.editingBillForm});
  }

  toggleIncomeForm() {
    this.setState({showIncomeForm: !this.state.showIncomeForm, editingIncomeForm: !this.state.editingIncomeForm});
  }

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showBillForm: false,
      editingBillForm: false,
      showIncomeForm: false,
      editingIncomeForm: false
    }
    this.handleLogOut = this.handleLogOut.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleBillForm = this.toggleBillForm.bind(this);
    this.toggleIncomeForm = this.toggleIncomeForm.bind(this);
  }

  render() {
    const { loggedIn, user } = this.props;
    const navbarIdentifier = `navbar-${user.id}`;

    let menu;

    if (loggedIn) {

      menu =
          <nav
            className='navbar'
            aria-expanded={this.state.showMenu}
            aria-controls={navbarIdentifier}
          >
            <h1>Windfall</h1>
            <button
              onClick={this.toggleMenu}
            >
              <p>{ user.username } &#x25BC;</p>
            </button>
          </nav>
    } else {
      menu =
        <nav className='navbar'>
          <h1>Windfall</h1>
          <ul>
            <li>
              <Link to='/register'>Sign up</Link>
            </li>
            <li>
              <Link to='/login'>Log in</Link>
            </li>
          </ul>
        </nav>
    }

    let billForm;
    let incomeForm;

    const billFormIdentifier = `billForm-${user.id}`;
    const incomeFormIdentifier = `billForm-${user.id}`;

    if (this.state.editingBillForm) {
      billForm = <BillForm cancelButton={this.toggleBillForm} closeForm={this.toggleBillForm}/>
    } else {
      billForm = '';
    }

    if (this.state.editingIncomeForm) {
      incomeForm = <IncomeForm cancelButton={this.toggleIncomeForm}/>
    } else {
      incomeForm = '';
    }


    return (
    <div>
      <header>
        {menu}
      {this.state.showMenu ? (
            <div
              id={navbarIdentifier}
              className="dropdown-menu"
            >
						  <ul>
                <li>
                  <button onClick={this.handleLogOut}>Logout</button>
                </li>
                <li>
                  <button
                    id={billFormIdentifier}
                    className='billform-toggle-btn'
                    aria-expanded={this.state.showBillForm}
                    aria-controls={billFormIdentifier}
                    onClick={this.toggleBillForm}
                  >
                New Bill
                </button>
                <div>
                  {billForm}
                </div>
              </li>
              <li>
                <button
                  id={incomeFormIdentifier}
                  className='incomeform-toggle-btn'
                  aria-expanded={this.state.showIncomeForm}
                  aria-controls={incomeFormIdentifier}
                  onClick={this.toggleIncomeForm}
                >
                Change Income
                </button>
                <div>
                  {incomeForm}
                </div>
              </li>
            </ul>
						</div>
					) : null}

      </header>
    </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.currentUser.info !== null,
  user: state.currentUser.info ? state.currentUser.info : ''
});

export default connect(mapStateToProps)(Navbar);