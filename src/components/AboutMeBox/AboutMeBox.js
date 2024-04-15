import React from "react";
import "./AboutMeBox.css";

export default function AboutMeBox(props) {
  return (
    <div className="box-container">
      <img src={props.logo} alt="exp-badge" className="experience-badge" />
      <div className="box-header">{props.header}</div>
      <div className="box-time">{props.highlightOne}</div>
      <div className="box-designation">{props.highlightTwo}</div>
    </div>
  );
}
