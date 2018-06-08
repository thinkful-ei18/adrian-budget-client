import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "./Input";
import { required, nonEmpty } from "../utils/validators";
import { login } from '../actions/user-actions';
import './LoginForm.css';

export class LoginForm extends Component {
  handleFormSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    const  { pristine, submitting, handleSubmit, error } = this.props;
    let errorMessage;

		if (error) {
			errorMessage = (
				<div className="form-error" aria-live="polite">
					{error}
				</div>
			);
    }

    if (localStorage.getItem('authToken')) {
      return <Redirect to='/dashboard'/>;
    }

    return(
      <div>
        <main>
          <form
          className='login-form'
            onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
          >
				    <Field
              label="Username"
              component={Input}
              placeholder="sally123"
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
				    <Field
              label="Password"
              component={Input}
              placeholder="••••••••"
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
              />
            {errorMessage}
				    <button
              disabled={pristine || submitting}
            >
              Log in
            </button>
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
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", Object.keys(errors)[0]))
})(connect(mapStateToProps)(LoginForm));