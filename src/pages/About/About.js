import React from "react";
import AboutMeBox from "../../components/AboutMeBox/AboutMeBox";
import ProfilePicture from "../../Assets/profile-picture-2-modified.jpeg";
import EducationLogo from "../../Assets/education.png";
import ExperienceBadge from "../../Assets/experience.png";
import Arrow from "../../Assets/arrow.png";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-me-container">
      <p className="header">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="about-me-content-container">
        <div className="about-me-pic-container">
          <img
            src={ProfilePicture}
            alt="Akash Yadav"
            className="about-me-pic"
          />
        </div>

        <div className="about-me-description-container">
          <div className="about-me-highlight-boxes-container">
            <AboutMeBox
              logo={ExperienceBadge}
              header="Experience"
              highlightOne="6+ years"
              highlightTwo="Senior Software Engineer"
            />
            <AboutMeBox
              logo={EducationLogo}
              header="Education"
              highlightOne="2016–2020"
              highlightTwo="B.Tech Computer Science"
            />
          </div>

          <p className="about-me-desc">
            I'm Akash Yadav, a Senior Software Engineer at FinThrive,
            specializing in SaaS product support and technical troubleshooting,
            with responsibilities spanning site reliability engineering (SRE). I
            combine deep product knowledge with strong expertise in C++ and SQL
            to solve complex problems across application and database layers.
            <br />
            <br />
            I investigate and resolve customer-facing issues reported through
            Salesforce, using C++ and SQL to troubleshoot application behavior
            and database problems. Alongside this, I provide rotational on-call
            support for server-related issues, working with engineering teams to
            identify root causes and drive issues through to resolution.
            <br />
            <br />
            As a product subject matter expert, I collaborate with developers,
            project managers, and clients to clarify requirements, prioritize
            improvements, and translate complex technical findings into
            actionable solutions. I bring ownership, analytical thinking, and
            clear communication to improving product reliability and delivering
            a dependable customer experience.
          </p>
        </div>
      </div>

      <a href="#experience">
        <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
      </a>
    </section>
  );
}
