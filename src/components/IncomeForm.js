import React, {Component} from 'react';
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";

export class IncomeForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

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
              onClick={() => console.log('going back to dashboard...')}
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