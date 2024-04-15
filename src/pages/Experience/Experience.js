import React from "react";
import TechAndSkills from "./TechAndSkills/TechAndSkills";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="about-me-header-container">
        <div className="about-me-header">Explore My</div>
        <div className="about-me-title">Experience</div>
      </div>
      <div className="experience-skills-container">
        <div className="experience-tech-stack">
          <div className="tech-stack-heading">Technology Stack</div>
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
        <div className="experience-skills">
          <div className="skills-heading">Skills</div>
          <div className="skill-container">
            <TechAndSkills name="Frontend Development" level="Experienced" />
            <TechAndSkills name="Git" level="Intermediate" />
          </div>
          <div className="skill-container">
            <TechAndSkills
              name="Technical Product Support"
              level="Experienced"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
