import React, { Component } from "react";
import API from "../../utils/API";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    console.log(e.target)
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);

    API.signUp(this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <form
          className="text-center border border-light p-5"
          onSubmit={this.submitForm}
        >
          <p className="h4 mb-4">SignUp</p>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-light-blue">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
