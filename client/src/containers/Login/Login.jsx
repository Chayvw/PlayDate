import React, { useEffect, useContext, useState } from "react";
// import { response } from 'express';
import axios from "axios";
import StatusContext from "../../utils/StatusContext";
import UserContext from "../../utils/UserContext";
// import { Link } from "react-router-dom";
// import User from "../../../models/User"
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const status = useContext(StatusContext);

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    // console.log(email, password)

    e.preventDefault();

    axios
      .post("/api/login", { email: email, password: password })
      .then((response) => {
        // console.log(response.data);
        // user.handleSubmit(response.data.data)
        user.handleLogin(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field col s4">
              <label>
                <input
                  id="password"
                  type="passwprd"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span>Password</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              {/* <Link to={`/playdate`}> */}
              <button className="btn waves-effect waves-light" type="submit">
                Login
              </button>
              {/* </Link> */}
            </div>
          </div>
        </form>
        );
      </div>
    </div>
  );
};

export default Login;
