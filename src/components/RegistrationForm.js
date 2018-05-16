import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { required, nonEmpty, matches, length, isTrimmed } from "../utils/validators";
import { register } from '../actions/user-actions';

const passwordLength = length({ min: 12, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
    this.props.dispatch(register(values));
    this.props.reset();
  }

  render() {
    const  { pristine, submitting, handleSubmit } = this.props;

    return (
      <div>
        <main>
          <form
            onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
          >
            <Field
              label="First Name"
              component={Input}
              type="text"
              name="firstname"
              placeholder="Sally"/>
            <Field
              label="Monthly Income"
              component={Input}
              type="number"
              name="income"
              placeholder="2000"/>
            <Field component={Input}
              label="Username"
              type="text"
              name="username"
              placeholder="sally123"
              validate={[required, nonEmpty, isTrimmed]} />
            <Field
              label="Password"
              component={Input}
              type="password"
              name="password"
              placeholder="••••••••"
              validate={[required, passwordLength, isTrimmed]} />
            <Field
              label="Confirm Password"
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
              placeholder="••••••••"
            />
            <button
              type="submit"
              disabled={pristine || submitting}
            >
					    Sign Up
				    </button>
          </form>
        </main>
      </div>
    );
  }
}

export default reduxForm({
	form: "registration",
	onSubmitFail: (errors, dispatch) => dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm)