import React from "react";
import TickLogo from "../../../Assets/checkmark.png";
import "./TechAndSkills.css";

export default function TechAndSkills(props) {
  return (
    <div className="single-skill-container">
      <img src={TickLogo} alt="Check Mark" className="icon" />
      <div>
        <h3 className="skill-name">{props.name}</h3>
        <p className="skill-level">{props.level}</p>
      </div>
    </div>
  );
}
