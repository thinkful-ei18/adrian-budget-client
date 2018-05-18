import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logout } from '../actions/user-actions';

export class Navbar extends Component {
  render() {
    const { loggedIn, dispatch } = this.props;

    let menu;

    if (loggedIn) {
      console.log('yay!');
      menu =
          <nav>
            <h1>Windfall</h1>
            <ul>
              <li>
                <button onClick={() => dispatch(logout())}>Logout</button></li>
            </ul>
          </nav>
    } else {
      menu =
        <nav>
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