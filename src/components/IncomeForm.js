import React, {Component} from 'react';
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { updateIncome } from '../actions/user-actions';

export class IncomeForm extends Component {
  handleFormSubmit(values) {
    this.props.dispatch(updateIncome(values.income));
  }

  render() {
    const { handleSubmit, pristine, submitting, cancelButton } = this.props;

    return (
      <div>
        <form
            onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
          >
            <Field
              label="Monthly Income"
              component={Input}
              type="number"
              name="income"
            />
            <button
              onClick={cancelButton}
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

export default reduxForm({
  form: "IncomeForm",
	onSubmitFail: (errors, dispatch) => dispatch(focus("IncomeForm", Object.keys(errors)[0]))
})(IncomeForm);