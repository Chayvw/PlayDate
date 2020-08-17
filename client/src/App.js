import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import UserContext from "./utils/UserContext";
// import StatusContext from "./utils/StatusContext";
import NavBar from "./components/NavBar";
import Profile from "./containers/Profile/Profile";
import PlayDate from "./containers/PlayDate/PlayDate";
import NewPlayDate from "./containers/NewPlayDate/NewPlayDate";
import EditPlayDate from "./containers/EditPlayDate/EditPlayDate";
import AddProfile from "./containers/AddProfile/AddProfile";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("/api/config")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    handleStartup();
  }, []);

  const handleLogin = (token) => {
    setJwt(token);
    window.localStorage.setItem("jwt", token);
  };

  const handleStartup = () => {
    const tokenFromStorage = window.localStorage.getItem("jwt");
    if (tokenFromStorage) {
      setJwt(tokenFromStorage);
    }
  };

  // const [jwt, setJwt] = useState("");
  return (
    <Router>
      <UserContext.Provider value={{ jwt, handleLogin }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/playdate" component={PlayDate} />
          <Route exact path="/playdate/:id" component={EditPlayDate} />
          <Route exact path="/newplaydate" component={NewPlayDate} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/addprofile" component={AddProfile} />
          <Route component={NoMatch} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
