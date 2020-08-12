import React from "react";

const PlayDateForm = (props) => {
  return (
    <div>
      <form
        className="text-center border border-light p-5"
        onSubmit={props.handleSubmit}
      >
        <div className="row">
          <input
            className="form-control"
            id="eventName"
            type="text"
            placeholder="Event Name"
            name="name"
            value={props.name}
            onChange={props.handleInputChange}
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
            onChange={props.handleInputChange}
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
            onChange={props.handleInputChange}
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
