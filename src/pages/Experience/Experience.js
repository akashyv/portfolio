import React from "react";
import TechAndSkills from "./TechAndSkills/TechAndSkills";
import Arrow from "../../Assets/arrow.png";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-container">
      <p className="header">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-skills-container">
        <div className="experience-tech-skills">
          <h2 className="experience-sub-title">Technology Stack</h2>
          <div className="skill-container">
            <TechAndSkills name="ReactJs" level="Experienced" />
            <TechAndSkills name="C++" level="Experienced" />
          </div>
          <div className="skill-container">
            <TechAndSkills name="Javascript" level="Experienced" />
            <TechAndSkills name="SQL" level="Experienced" />
          </div>
          <div className="skill-container">
            <TechAndSkills name="HTML/CSS" level="Experienced" />
            <TechAndSkills name="Redux" level="Intermediate" />
          </div>
        </div>
        <div className="experience-tech-skills">
          <h2 className="experience-sub-title">Skills</h2>
          <div className="skill-container">
            <TechAndSkills name="Frontend Development" level="Experienced" />
            <TechAndSkills name="Git" level="Intermediate" />
          </div>
          <div className="skill-container">
            <TechAndSkills
              name="Technical Product Support"
              level="Experienced"
            />
            <TechAndSkills name="Comms." level="Professional" />
          </div>
        </div>
      </div>
      <a href="#projects">
        <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
      </a>
    </section>
  );
}
