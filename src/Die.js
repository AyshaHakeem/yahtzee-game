import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={()=> this.props.handleClick(this.props.idx) }
        // disabled = {this.props.rollsLeft<=0}
      >
        {this.props.val}
        {/* <i className={`fa-solid fa-dice-${this.props.val}`}></i> */}
      </button>
    );
  }
}

export default Die;
