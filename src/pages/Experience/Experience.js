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
            <TechAndSkills name="C++" level="Experienced" />
            <TechAndSkills name="SQL" level="Experienced" />
          </div>
          <div className="skill-container">
            <TechAndSkills name="React.js" level="Experienced" />
            <TechAndSkills name="JavaScript" level="Experienced" />
          </div>
          <div className="skill-container">
            <TechAndSkills name="HTML/CSS" level="Experienced" />
            <TechAndSkills name="Redux" level="Intermediate" />
          </div>
          <div className="skill-container">
            <TechAndSkills name=".NET" level="Intermediate" />
            <TechAndSkills name="Git" level="Intermediate" />
          </div>
        </div>

        <div className="experience-tech-skills">
          <h2 className="experience-sub-title">Skills</h2>

          <div className="skill-container">
            <TechAndSkills
              name="L3 Technical Product Support"
              level="Professional"
            />
            <TechAndSkills
              name="Production Troubleshooting"
              level="Professional"
            />
          </div>
          <div className="skill-container">
            <TechAndSkills
              name="Application & Database Troubleshooting"
              level="Professional"
            />
            <TechAndSkills name="Root Cause Analysis" level="Professional" />
          </div>
          <div className="skill-container">
            <TechAndSkills
              name="Salesforce Case Management"
              level="Professional"
            />
            <TechAndSkills
              name="Rotational On-Call Support"
              level="Professional"
            />
          </div>
          <div className="skill-container">
            <TechAndSkills
              name="Cross-functional Collaboration"
              level="Professional"
            />
            <TechAndSkills name="Frontend Development" level="Professional" />
          </div>
          <div className="skill-container">
            <TechAndSkills
              name="Customer Escalation Management"
              level="Professional"
            />
            <TechAndSkills name="Communication" level="Professional" />
          </div>
        </div>
      </div>

      <a href="#projects">
        <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
      </a>
    </section>
  );
}
