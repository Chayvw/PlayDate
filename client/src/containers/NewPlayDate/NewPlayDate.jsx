import React, { useState } from "react";
import axios from "axios";
import PlayDateForm from "../../components/PlayDateForm";

const NewPlayDate = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/playdate", { name, date, location, description })
      .then((response) => {
        console.log(response.data);
        // When clicking submit will redirect to playdate page
        props.history.push("/playdate");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="container">
      <h1>PlayDate Event</h1>
      <PlayDateForm
        handleSubmit={handleSubmit}
        setName={setName}
        setDate={setDate}
        setLocation={setLocation}
        setDescription={setDescription}
        name={name}
        date={date}
        location={location}
        description={description}
      />
    </div>
  );
};

export default NewPlayDate;
