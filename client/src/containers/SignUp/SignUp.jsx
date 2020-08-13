import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">SignUp</p>
          <input
            type="email"
            id="defaultLoginFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />
          <input
            type="password"
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
