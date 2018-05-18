import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import logout from '../actions/user-actions';

export class Navbar extends Component {
  render() {
    let menu;

    if (this.props.loggedIn) {
      console.log('yay!');
      menu =
          <nav>
            <h1>Windfall</h1>
            <ul>
              <li>Logout</li>
            </ul>
          </nav>
    } else {
      menu =
        <nav>
          <h1>Windfall</h1>
          <ul>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </nav>
    }

    return(
    <div>
      <header>
        {menu}
      </header>
    </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.currentUser.info !== null
});

export default connect(mapStateToProps)(Navbar);