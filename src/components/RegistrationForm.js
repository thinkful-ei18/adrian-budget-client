import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { required, nonEmpty, matches, length, isTrimmed } from "../utils/validators";

const passwordLength = length({ min: 12, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
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
            <label htmlFor="firstName">First Name</label>
            <Field
              component={Input}
              type="text"
              name="firstname"
              placeholder="Sally"/>
            <label htmlFor="username" >Username</label>
            <Field component={Input}
              type="text"
              name="username"
              placeholder="sally123"
              validate={[required, nonEmpty, isTrimmed]} />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              placeholder="••••••••"
              validate={[required, passwordLength, isTrimmed]} />
            <label htmlFor="passwordConfirm" >Confirm Password</label>
            <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
              placeholder="••••••••"
            />
            <button
              className="form-primary-button"
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