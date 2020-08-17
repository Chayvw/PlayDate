import React, { useState } from "react";
import axios from "axios";
import ProfileForm from "../../components/ProfileForm";

const AddProfile = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/profiles", { name, age, gender, size, city, state })
      .then((response) => {
        // console.log(response.data);
        // When clicking submit will redirect to profile page
        props.history.push("/profile");
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
    <div className="container" style={mystyle}>
      <h1>PlayDate Event</h1>
      <ProfileForm
        handleSubmit={handleSubmit}
        setName={setName}
        setAge={setAge}
        setGender={setGender}
        setSize={setSize}
        setCity={setCity}
        setState={setState}
        name={name}
        age={age}
        gender={gender}
        size={size}
        city={city}
        state={state}
      />
    </div>
  );
};

export default AddProfile;
