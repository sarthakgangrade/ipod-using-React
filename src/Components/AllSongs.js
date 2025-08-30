import React from "react";
import "../Css/Allsongs.css";
import images from "../images/thumbnail.jpg";
import TroyBoiAfterhours from "../Songs/TroyBoiAfterhours.mp3";

const AllSongs = () => {
  return (
    <div className="allsongs-container">
      <div className="allsongs-header">
        <img id="allSongs-img" src={images} alt="" />
        <div>
          <h3>Afterhours</h3>
          <span>TroyBoi</span>
        </div>
      </div>

      <audio src={TroyBoiAfterhours} controls autoPlay></audio>
    </div>
  );
};

export default AllSongs;
