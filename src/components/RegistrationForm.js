import React, {Component} from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { required, nonEmpty, matches, length, isTrimmed } from "../utils/validators";

const passwordLength = length({ min: 12, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends Component {
  handleFormSubmit(values) {
    console.log(values);
  }

  render() {

    // const { } = this.props;

    return (
      <div>
        <form onSubmit={this.props.handleSubmit((values) => this.handleFormSubmit(values))}>
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
        </form>
      </div>
    );
  }
}

export default reduxForm({
	form: "registration",
	onSubmitFail: (errors, dispatch) => dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm)