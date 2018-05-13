import React, {Component, Fragment} from 'react';
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
  const { pristine, submitting, handleSubmit, id, title, amount, duedate, beenpaid, interval, category_id } = this.props;

  const collapsibleIdentifier = `collapsible-${id}`;

  let info;

  if (this.state.editing) {
    info =
    <div
      id={collapsibleIdentifier}
      className='collapsible'
      aria-hidden={!this.state.expanded}
    >
      <form
        onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
      >
        <Field
          label="Title"
          component={Input}
          type="text"
          name="title"
          value={title}
        />
        <Field
          label="Amount"
          component={Input}
          type="number"
          name="amount"
          value={amount}
        />
        <Field
          label="Due Date"
          component={Input}
          type="date"
          name="date"
          value={duedate}
        />
        <Field
          label="Interval"
          component='select'
          name="interval"
          value={interval}
        >
          <option></option>
          <option value="P [ years-months-days ]">Weekly</option>
          <option value="P [ years-months-days ]">Bi-weekly</option>
          <option value="P [ years-months-days ]">Monthly</option>
        </Field>
        <button
          onClick={() => this.toggleEditing(id)}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
      </form>
    </div>
  } else {
    info =
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

  }

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
          {info}
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

export default reduxForm({
	form: "Bill",
	onSubmitFail: (errors, dispatch) => dispatch(focus("Bill", Object.keys(errors)[0]))
})(Bill)