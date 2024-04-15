import React from "react";
import ProfilePicture from "../../Pictures/profile-picture.jpeg";
import AboutMeBox from "../../components/AboutMeBox/AboutMeBox";
import EducationLogo from "../../Pictures/education-logo.png";
import ExperienceBadge from "../../Pictures/experience-badge.jpeg";
import "./About.css";

export default function About() {
  return (
    <div className="about-me-container">
      <div className="about-me-header-container">
        <div className="about-me-header">Get To Know More</div>
        <div className="about-me-title">About Me</div>
      </div>
      <div className="about-me-content-container">
        <img src={ProfilePicture} alt="profile-pic" className="about-me-pic" />
        <div className="about-me-description-container">
          <div className="about-me-highlight-boxes-container">
            <AboutMeBox
              logo={ExperienceBadge}
              header="Experience"
              highlightOne="3+ years"
              highlightTwo="Software Engineer"
            />
            <AboutMeBox
              logo={EducationLogo}
              header="Education"
              highlightOne="2016-2020"
              highlightTwo="B.Tech Computer Science"
            />
          </div>
          <div className="about-me desc">
            I'm Akash, a 25-year-old software engineer from Gurgaon, India. With
            4 years of experience (3 full-time job and 1 internship), I love
            building awesome software. My B.Tech in Computer Science set me up
            with the skills, and I'm pumped to tackle new challenges and make a
            real impact on projects.
          </div>
        </div>
      </div>
    </div>
  );
}
