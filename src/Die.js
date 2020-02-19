import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${
          this.props.isrolling && "shaking"
        }`}
      ></i>
    );
  }
}

export default Die;
