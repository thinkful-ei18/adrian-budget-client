import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import List from './List';
import User from './User';

export class Dashboard extends Component {
  render() {
    const { loggedIn } = this.props;

    if (!loggedIn) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <main>
          <User/>
          <ul>
            <li>New Bill</li>
            <li>Change Income</li>
            <li>Logout</li>
          </ul>
          <List/>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  loggedIn: state.currentUser.info !== null
});

export default connect(mapStateToProps)(Dashboard);