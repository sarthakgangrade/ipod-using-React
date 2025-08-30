import React, { Component } from "react";
import "../Css/Wheel.css";
export class Wheel extends Component {
  render() {
    // console.log(this.props);

    const { rotateEvent, handleOk, handleMenu } = this.props;

    return (
      <div className="wheel-container" id="controls" onClick={rotateEvent}>
        <div id="wheel">
          <div id="menu" className="control" onClick={handleMenu}>
            <span>MENU</span>
          </div>
          <div id="backward" className="control">
            <i className="fa-solid fa-backward-fast"></i>
          </div>
          <div id="forward" className="control">
            <i className="fa-solid fa-forward-fast"></i>
          </div>
          <div id="play-pause" className="control">
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-pause"></i>
          </div>
          <div id="blank" className="control" onClick={handleOk}></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
