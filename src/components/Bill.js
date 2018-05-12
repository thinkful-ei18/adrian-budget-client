import React, {Component, Fragment} from 'react';
import './Bill.css';

export default class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({expanded: !this.state.expanded});
  }

render() {
  const { id, name, amount, duedate, beenpaid, billinterval, category_id } = this.props;

  const collapsibleIdentifier = `collapsible-${id}`;

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
            className='collapsible'
            aria-hidden={!this.state.expanded}
          >
            <h1>{name}</h1>
            <p>${amount}</p>
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