import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    // console.log(e.target);
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
    const mystyle = {
      color: "white",
      backgroundColor: "rgb(124, 67, 189, .5)",
      padding: "10px",
      fontFamily: "Arial",
      maxLength: "100%",
    };
    return (
      <Container>
        <div className="mt-5" style={mystyle}>
          <form
            className="text-center border border-light p-5"
            onSubmit={this.submitForm}
          >
            <p className="h4 mb-4">Sign Up</p>
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
      </Container>
    );
  }
}

export default SignUp;
