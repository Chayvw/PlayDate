import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from "axios";
// import StatusContext from "../../utils/StatusContext";
import UserContext from "../../utils/UserContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const status = useContext(StatusContext);

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    // console.log(email, password)
    e.preventDefault();
    axios
      .post("/api/login", { email: email, password: password })
      .then((response) => {
        // console.log(response.data.data);
        // user.handleSubmit(response.data.data)
        if (response.data.data) {
          user.handleLogin(response.data.data);
          history.push("/playdate");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mystyle = {
    color: "white",
    backgroundColor: "rgb(124, 67, 189, .5)",
    padding: "10px",
    fontFamily: "Arial",
    maxLength: "100%",
  };
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol xs="12" sm="10" md="8" lg="6">
          <div className="mt-5" style={mystyle}>
            <form
              className="text-center border border-light p-5"
              onSubmit={handleSubmit}
            >
              <p className="h4 mb-4">Login</p>
              <input
                id="email"
                type="text"
                name="email"
                className="form-control mb-4"
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                id="password"
                type="passwprd"
                name="password"
                className="form-control mb-4"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="row">
                <div className="col s12">
                  <button className="btn btn-light-blue" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
