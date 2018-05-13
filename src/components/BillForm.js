import React, {Component} from 'react';
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";

export class BillForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
    this.props.reset();
  }

  render() {
    const  { pristine, submitting, handleSubmit } = this.props;

    return (
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
          value={this.props.title}
        />
        <Field
          label="Amount"
          component={Input}
          type="number"
          name="amount"
          value={this.props.amount}
        />
        <Field
          label="Due Date"
          component={Input}
          type="date"
          name="date"
          value={this.props.duedate}
        />
        <Field
          label="Interval"
          component='select'
          name="interval"
          value={this.props.interval}
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
    );
  }
}

BillForm.defaultProps = {
  name: '',
  amount: 0,
  duedate: '',
  beenpaid: false,
  interval: '',
  category_id: []
}

export default reduxForm({
	form: "BillForm",
	onSubmitFail: (errors, dispatch) => dispatch(focus("BillForm", Object.keys(errors)[0]))
})(BillForm)