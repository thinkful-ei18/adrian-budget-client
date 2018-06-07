import React, {Component} from 'react';
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { createBill, editBill } from '../actions/bills-actions';
import './BillForm.css';

export class BillForm extends Component {
  handleFormSubmit(values) {
    if (this.props.editing === true) {
      const index = this.props.index;
      const id = this.props.id;
      this.props.dispatch(editBill(values, index, id)); // The index is used to merge the new object w/ old object.
      this.props.closeForm();
    } else {
      this.props.dispatch(createBill(values));
      this.props.closeForm();
    }

  }

  componentWillMount() {
    // This form is reusable; it takes props as initial values when opened to edit bill info.
    this.props.initialize({
      title: this.props.title,
      amount: this.props.amount,
      billinterval: this.props.billinterval
    });
  }

  render() {
    const  { pristine, submitting, handleSubmit, cancelButton} = this.props;

    return (
      <div>
      <form
        className='bill-form'
        onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
      >
        <Field
          className='bill-field'
          label="Title"
          component={Input}
          type="text"
          name="title"
        />
        <Field
          className='bill-field'
          label="Amount"
          component={Input}
          type="number"
          name="amount"
        />
        {/* extension feature
        <Field
          label="Due Date"
          component={Input}
          type="date"
          name="duedate"
        /> */}
        <label className='interval-label'>Interval</label>
        <Field
          className='bill-select'
          label="Interval"
          component='select'
          name="billinterval"
        >
          <option></option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </Field>
        {/* extension feature
        <label>Categories
        <Field
          label='Utilities'
          component={Input}
          type='checkbox'
          name='utilities'
        />
        <Field
          label='Food'
          component={Input}
          type='checkbox'
          name='food'
        />
        <Field
          label='Entertainment'
          component={Input}
          type='checkbox'
          name='entertainment'
        />
        <Field
          label='Transportation'
          component={Input}
          type='checkbox'
          name='transportation'
        />
        <Field
          label='Other'
          component={Input}
          type='checkbox'
          name='other'
        />
        </label> */}
        <button
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
        <button
          onClick={cancelButton}
        >
          Cancel
        </button>
      </form>
    </div>
    );
  }
}

export default reduxForm({
  form: "BillForm",
	onSubmitFail: (errors, dispatch) => dispatch(focus("BillForm", Object.keys(errors)[0]))
})(BillForm);