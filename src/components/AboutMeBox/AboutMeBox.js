import React from "react";
import "./AboutMeBox.css";

export default function AboutMeBox(props) {
  return (
    <div className="about-me-card">
      <img src={props.logo} alt="Experience Badge" className="icon" />
      <h3 className="card-header">{props.header}</h3>
      <p className="card-time">{props.highlightOne}</p>
      <p className="card-designation">{props.highlightTwo}</p>
    </div>
  );
}
