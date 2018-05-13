import React, {Component, Fragment} from 'react';
import './Bill.css';

export class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      editing: false,
    };

    this.togglePanel = this.togglePanel.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  togglePanel() {
    this.setState({expanded: !this.state.expanded});
  }

  handleFormSubmit(values) {
    console.log(values);
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing})
  }

  deleteBill(id) {
    console.log(`Deleting bill ${id}`);
  }

render() {
  const { id, title, amount, duedate, beenpaid, interval, category_id } = this.props;

  const collapsibleIdentifier = `collapsible-${id}`;

  return (
      <Fragment>
        <button
          className='bill-toggle-btn'
          aria-expanded={this.state.expanded}
          aria-controls={collapsibleIdentifier}
          onClick={this.togglePanel}
        >
          <h1>{title}</h1>
          <p>${amount}</p>
        </button>
        <div
          id={collapsibleIdentifier}
          className='collapsible'
          aria-hidden={!this.state.expanded}
        >
          <div
      id={collapsibleIdentifier}
      className='collapsible'
      aria-hidden={!this.state.expanded}
    >
      <h1>{title}</h1>
      <p>${amount}</p>
      <p>
        {duedate}
        {beenpaid}
        {interval}
        {category_id}
      </p>
      <button
        onClick={() => this.toggleEditing(id)}
      >
        Edit
      </button>
      <button
        onClick={() => this.deleteBill(id)}
      >
        Delete
      </button>
    </div>
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
  interval: 'P [ years-months-days ]',
  category_id: [100, 101, 102]
}