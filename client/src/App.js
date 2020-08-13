import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile/Profile";
import PlayDate from "./containers/PlayDate/PlayDate";
import NewPlayDate from "./containers/NewPlayDate/NewPlayDate";
import EditPlayDate from "./containers/EditPlayDate/EditPlayDate";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={PlayDate} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/playdate" component={PlayDate} />
        <Route exact path="/playdate/:id" component={EditPlayDate} />
        <Route exact path="/newplaydate" component={NewPlayDate} />
        {/* <Route exact path="/playdate/new" component={NewPlayDate} /> */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
