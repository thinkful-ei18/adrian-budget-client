import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Input from "./Input";
import { required, nonEmpty } from "../utils/validators";

export class RegistrationForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
  }

  render() {
    const  { pristine, submitting, handleSubmit } = this.props;

    return(
      <div>
        <main>
          <form
            onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}
          >
            <label htmlFor="username">Username</label>
				    <Field
              component={Input}
              placeholder="sally123"
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
				    <label htmlFor="password">Password</label>
				    <Field
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