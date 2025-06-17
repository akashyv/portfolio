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
            alt="Akash Yadav DP"
            className="about-me-pic"
          />
        </div>
        <div className="about-me-description-container">
          <div className="about-me-highlight-boxes-container">
            <AboutMeBox
              logo={ExperienceBadge}
              header="Experience"
              highlightOne="5+ years"
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
            {/* I'm Akash, a 26-year-old software engineer from Gurgaon, India. With
            4 years of experience (3 years of full-time job and 1 year of
            internship), I love building awesome software. My B.Tech in Computer
            Science set me up with the skills, and I'm pumped to tackle new
            challenges and make a real impact on projects. */}
            Hello, I’m Akash Yadav, a 26-year-old web developer from Gurgaon,
            India. I started my tech career with an internship as a Developer at
            MetricStream (May 2019 - May 2020), working on risk management
            solutions. Currently, I'm with FinThrive working as a Senior
            Software Engineer, where I develop web pages using ReactJS and
            support backend and database tasks with C++ and SQL. I've been part
            of the FinThrive team for over three years (Aug 2020 - today),
            helping to build end to end revenue management systems for US
            hospitals. I am skilled at creating projects from scratch or
            improving existing ones, and I'm a quick learner who is comfortable
            working alone or in a team. Ready for new challenges, I am eager to
            apply my skills to help your projects succeed.
          </p>
        </div>
      </div>
      <a href="#experience">
        <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
      </a>
    </section>
  );
}
