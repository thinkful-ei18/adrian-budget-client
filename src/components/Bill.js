import React, {Component, Fragment} from 'react';
import './Bill.css';

export default class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };



  }

  togglePanel() {
    if (this.state.expanded) {
      console.log('card closed');
      this.setState({expanded: false}); // collapse the bill
    } else {
      console.log('card expanded');
      this.setState({expanded: true}); // expand the bill
    }
  }

render() {
  const { name, amount, duedate, beenpaid, billinterval, category_id } = this.props;

  const collapsibleIdentifier = `bill-content-${id}`;

  return (
      <Fragment>
        <button
          className='bill-toggle-btn'
          aria-expanded={this.state.expanded}
          aria-controls={collapsibleIdentifier}
          onClick={this.togglePanel}
        >
          <h1>{name}</h1>
          <p>${amount}</p>
        </button>
          <div
            id={collapsibleIdentifier}
            className='bill-content'
            aria-hidden={!this.state.expanded}
          >
            <p>
              {duedate}
              {beenpaid}
              {billinterval}
              {category_id}
            </p>
          </div>
      </Fragment>
    );
  }
};


Bill.defaultProps = {
  expanded: false,
  name: 'Happiness',
  amount: 55,
  duedate: '2018-03-20',
  beenpaid: false,
  billinterval: 'P [ years-months-days ]',
  category_id: [100, 101, 102]
}