import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlayDateForm from "../../components/PlayDateForm";

const EditPlayDate = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/playdate/${id}`)
      .then((response) => {
        console.log(response);
        setName(response.data.data.name);
        setDate(response.data.data.date);
        setLocation(response.data.data.location);
        setDescription(response.data.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/playdate/${id}`, { name, date, location, description })
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

export default EditPlayDate;
