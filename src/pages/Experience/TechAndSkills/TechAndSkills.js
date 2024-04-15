import React from "react";
import TickLogo from "../../../Pictures/tick.jpeg";
import "./TechAndSkills.css";

export default function TechAndSkills(props) {
  return (
    <div className="single-skill-container">
      <img src={TickLogo} alt="tick-logo" className="tick-logo" />
      <div className="single-skill">
        <div className="skill-name">{props.name}</div>
        <div className="skill-level">{props.level}</div>
      </div>
    </div>
  );
}
