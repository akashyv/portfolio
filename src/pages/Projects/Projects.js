import React from "react";
import Arrow from "../../Assets/arrow.png";
import ProfilePicture from "../../Assets/duolingo.png";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <p className="header">Browse My Latest</p>
      <h1 className="title">Project</h1>
      <div className="projects-list-container">
        <div className="project">
          <img
            src={ProfilePicture}
            alt="Project Cover"
            className="project-image-cover"
          />
          <h2 className="project-title">Duolingo Clone</h2>
          <button className="project-details-button">Read More</button>
        </div>
        <div className="project">
          <img
            src={ProfilePicture}
            alt="Project Cover"
            className="project-image-cover"
          />
          <h2 className="project-title">Some Other</h2>
          <button className="project-details-button">Read More</button>
        </div>
      </div>

      <a href="#contact">
        <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
      </a>
    </section>
  );
}
