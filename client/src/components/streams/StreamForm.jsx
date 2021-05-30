import React from "react";
import { Field, reduxForm } from "redux-form";

// onChange={formProps.input.onChange}
// value={formProps.input.value}

class StreamForm extends React.Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput(formProps) {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        <div>{this.renderError(formProps.meta)}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    /**
     * A placeholder api server set up in: http://localhost:3001/stream
     */
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title can not be empty";
  }

  if (!formValues.description) {
    errors.description = "Description can not be empty";
  }

  return errors;
};

//combine redux connect function and redux form
export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
