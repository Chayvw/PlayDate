import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    profiles: [],
  };

  componentDidMount() {
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
  }

  render() {
    return (
      <div>
        <h1>This is Play Date's profile page. </h1>
        <div>
          {this.state.profiles.map((profile) => (
            <div key={profile._id}>
              <h3>{profile.name}</h3>
              <h3>{profile.age}</h3>
              <h3>{profile.gender}</h3>
              <h3>{profile.size}</h3>
              <h3>{profile.city}</h3>
              <h3>{profile.state}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;
