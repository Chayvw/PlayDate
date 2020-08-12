import React, { Component } from "react";
import axios from "axios"; 
// import { response } from "express";

class PlayDate extends Component {
    // state = {
    //     playdates: [],
    //   };
    
      componentDidMount() {
          axios.get("/api/playdate")
          .then((response) => {
              console.log(response.data)
          })
          .catch((err) => {
              console.log(err);
          });
        // this.getPlayDate();
      }
    
    //   getPlayDate = () => {
    //     axios
    //       .get("/api/playdate")
    //       .then((response) => {
    //         this.setState({
    //           playdates: response.data.data,
    //         });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
  render() {
    return (
      <div>
        <h1>This is Play Date's date page. </h1>
      </div>
    );
  }
}

export default PlayDate;
