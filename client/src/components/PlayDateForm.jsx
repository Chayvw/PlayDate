import React, { useState } from "react";
import axios from "axios";

const PlayDateForm = (props) => {
  const [hiddenInput, setHiddenInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/playdate/${id}`, { name, date, location })
      .then((response) => {
        console.log(response.data);
        // When clicking submit will redirect to playdate page
        props.history.push("/playdate");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  axios.get(`/api/playdate/${id}`).then((response)=>{
    setHiddenInput(response._id)
  })
  //  <<< on response add id to hidden input
  // so that when you do your put route. you grab id from hidden input to use as "id" in put route

  return (
    <div>
      <form
        className="text-center border border-light p-5"
        onSubmit={props.handleSubmit}
      >
        <input type="hidden" name="" value={hiddenInput}/>
        <div className="row">
          <input
            className="form-control"
            id="eventName"
            type="text"
            placeholder="Event Name"
            name="name"
            value={props.name}
            onChange={(event) => {
              props.setName(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="date"
            type="date"
            name="date"
            value={props.date}
            onChange={(event) => {
              props.setDate(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="location"
            type="text"
            placeholder="Location"
            name="location"
            value={props.location}
            onChange={(event) => {
              props.setLocation(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-light-blue">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlayDateForm;
