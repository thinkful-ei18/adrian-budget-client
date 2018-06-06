import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "./Input";
import { required, nonEmpty, matches, length, isTrimmed } from "../utils/validators";
import { register } from '../actions/user-actions';
import './RegistrationForm.css';

const passwordLength = length({ min: 12, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends Component {
  handleFormSubmit(values) {
    this.props.dispatch(register(values));
  }

  render() {
    const  { pristine, submitting, handleSubmit, error } = this.props;
    let errorMessage;

    if (this.props.loggedIn) {
      return <Redirect to='/login'/>;
    }

    if (error) {
			errorMessage = (
				<div className="form-error" aria-live="polite">
					{error}
				</div>
			);
		}

    return (
      <div>
        <main>
          <form
            className='registration-form'
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
              placeholder="2000"
              parse={value => Number(value)}
              validate={[required]}
              />
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
            {errorMessage}
          </form>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
	loggedIn: state.currentUser.info !== null,
});

export default reduxForm({
	form: "registration",
	onSubmitFail: (errors, dispatch) => dispatch(focus("registration", Object.keys(errors)[0]))
})(connect(mapStateToProps)(RegistrationForm));