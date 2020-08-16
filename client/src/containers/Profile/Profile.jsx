import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    profiles: [],
  };

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = () => {
    axios
      .get("/api/profiles")
      .then((response) => {
        console.log(response.data);
        this.setState({
          profiles: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const mystyle = {
      color: "black",
      backgroundColor: "rgb(124, 67, 189, .5)",
      padding: "10px",
      fontFamily: "Arial",
      maxLength: "100%",
    };
    const profilestyle = {
      color: "white",
      fontFamily: "Arial",
      maxLength: "100%",
    };
    return (
      <div>
        <div className="container" style={mystyle}>
          <h1 style={profilestyle}>Profile</h1>
          <ul class="list-group">
            {this.state.profiles.map((profile) => (
              <li key={profile._id}>
                <li class="list-group-item">Name: {profile.name}</li>
                <li class="list-group-item">Age: {profile.age}</li>
                <li class="list-group-item">Gender: {profile.gender}</li>
                <li class="list-group-item">Size: {profile.size}</li>
                <li class="list-group-item">City: {profile.city}</li>
                <li class="list-group-item">State: {profile.state}</li>
              </li>
            ))}
          </ul>
          <div>{this.state.profiles.length === 0 && <p>no profiles</p>}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
