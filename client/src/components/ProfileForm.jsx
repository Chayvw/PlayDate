import React from 'react';

const ProfileForm = (props) => {
    return (
        <div>
      <form
        className="text-center border border-light p-5"
        onSubmit={props.handleSubmit}
      >
        <div className="row">
          <input
            className="form-control"
            id="profileName"
            type="text"
            placeholder="Pet Name"
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
            id="age"
            type="text"
            placeholder="Age"
            name="age"
            value={props.age}
            onChange={(event) => {
              props.setAge(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="gender"
            type="text"
            placeholder="Gender"
            name="gender"
            value={props.gender}
            onChange={(event) => {
              props.setGender(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="size"
            type="text"
            placeholder="Size"
            name="size"
            value={props.size}
            onChange={(event) => {
              props.setSize(event.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            className="form-control"
            id="city"
            type="text"
            placeholder="City"
            name="city"
            value={props.city}
            onChange={(event) => {
              props.setCity(event.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            className="form-control"
            id="state"
            type="text"
            placeholder="State"
            name="state"
            value={props.state}
            onChange={(event) => {
              props.setState(event.target.value);
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

export default ProfileForm;