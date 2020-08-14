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
    return (
      <div>
        <div className="container">
          <h1>Profile</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Size</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {this.state.profiles.map((profile) => (
                <tr key={profile._id}>
                  <td>{profile.name}</td>
                  <td>{profile.age}</td>
                  <td>{profile.gender}</td>
                  <td>{profile.size}</td>
                  <td>{profile.city}</td>
                  <td>{profile.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>{this.state.profiles.length === 0 && <p>no profiles</p>}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
