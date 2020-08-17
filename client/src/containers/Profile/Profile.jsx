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
        // console.log(response.data);
        this.setState({
          profiles: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
        return (
          <div>
          <div className="container">
            <h1>Profile</h1>
            <ul className="list-group">
              {this.state.profiles.map((profile) => (
                <li key={profile._id}>
                  <li className="list-group-item">Name: {profile.name}</li>
                  <li className="list-group-item">Age: {profile.age}</li>
                  <li className="list-group-item">Gender: {profile.gender}</li>
                  <li className="list-group-item">Size: {profile.size}</li>
                  <li className="list-group-item">City: {profile.city}</li>
                  <li className="list-group-item">State: {profile.state}</li>
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

