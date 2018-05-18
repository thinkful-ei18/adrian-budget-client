import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Input from "./Input";
import { required, nonEmpty } from "../utils/validators";
import { login } from '../actions/user-actions';

export class LoginForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
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

    return(
      <div>
        <main>
          <form
            onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
          >
				    <Field
              label="username"
              component={Input}
              placeholder="sally123"
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
				    <Field
              label="password"
              component={Input}
              placeholder="••••••••"
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
              />
				    <button
              disabled={pristine || submitting}
            >
              Log in
            </button>
            <br/>{errorMessage}
          </form>
        </main>
      </div>
    );
  }

}

export default reduxForm({
	form: "login",
	onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(withRouter(connect()(LoginForm)))