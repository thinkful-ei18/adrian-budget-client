import React, {Component} from 'react';
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

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
    this.handleLogOut = this.handleLogOut.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    const { loggedIn, dispatch, user } = this.props;
    const navbarIdentifier = `navbar-${user.id}`;

    let menu;

    if (loggedIn) {

      menu =
          <nav
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
      {this.state.showMenu ? (
            <div
              id={navbarIdentifier}
              className="dropdown-menu"
            >
						  <ul>
                <li>
                  <button onClick={this.handleLogOut}>Logout</button>
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