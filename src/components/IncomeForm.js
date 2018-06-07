import React, {Component} from 'react';
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { updateIncome, refreshAuthToken } from '../actions/user-actions';
import './IncomeForm.css';

export class IncomeForm extends Component {
  handleFormSubmit(values) {
    this.props.dispatch(updateIncome(values));
    this.props.dispatch(refreshAuthToken(values.income));

  }

  render() {
    const { handleSubmit, pristine, submitting, cancelButton } = this.props;

    return (
      <div>
        <form
          className='income-form'
            onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
          >
            <Field
              label="Monthly Income"
              component={Input}
              type="number"
              name="income"
            />
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
  form: "IncomeForm",
	onSubmitFail: (errors, dispatch) => dispatch(focus("IncomeForm", Object.keys(errors)[0]))
})(IncomeForm);