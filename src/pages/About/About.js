import React from "react";
import ProfilePicture from "../../Pictures/profile-picture.jpeg";
import AboutMeBox from "../../components/AboutMeBox/AboutMeBox";
import EducationLogo from "../../Pictures/education.png";
import ExperienceBadge from "../../Pictures/experience.png";
import Arrow from "../../Pictures/arrow.png";
import "./About.css";

export default function About() {
  return (
    <section className="about-me-container">
      <p className="header">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="about-me-content-container">
        <div className="about-me-pic-container">
          <img
            src={ProfilePicture}
            alt="Akash Yadav DP"
            className="about-me-pic"
          />
        </div>
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
          <p className="about-me-desc">
            I'm Akash, a 25-year-old software engineer from Gurgaon, India. With
            4 years of experience (3 years of full-time job and 1 year of
            internship), I love building awesome software. My B.Tech in Computer
            Science set me up with the skills, and I'm pumped to tackle new
            challenges and make a real impact on projects.
          </p>
        </div>
      </div>
      <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
    </section>
  );
}
