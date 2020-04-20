import React, { Component } from "react";
import AppNav from "./AppNav";

class Cretae_task extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNav />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
        SDLC Tracking Application - Cretae Task
        </h2>
      </div>
    );
  }
}

export default Cretae_task;
