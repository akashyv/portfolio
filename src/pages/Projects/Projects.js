import React, { useState } from "react";
import Arrow from "../../Assets/arrow.png";
import IQAS from "../../Assets/IQAS.png";
import Duolingo from "../../Assets/DuolingoProject.jpeg";
import OtherProjects from "../../Assets/Other-Projects.jpeg";
import ModalOne from "../../components/Modals/ModalOne/ModalOne";
import "./Projects.css";
import ModalTwo from "../../components/Modals/ModalTwo/ModalTwo";
import ModalThree from "../../components/Modals/ModalThree/ModalThree";

export default function Projects() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);

  const openModal1 = () => {
    setIsModal1Open(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
    document.body.style.overflow = "";
  };

  const openModal2 = () => {
    setIsModal2Open(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
    document.body.style.overflow = "";
  };

  const openModal3 = () => {
    setIsModal3Open(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal3 = () => {
    setIsModal3Open(false);
    document.body.style.overflow = "";
  };

  return (
    <section id="projects" className="projects-container">
      <p className="header">Browse My Personal</p>
      <h1 className="title">Project</h1>
      <div className="projects-list-container">
        <div className="project">
          <img src={IQAS} alt="Project Cover" className="project-image-cover" />
          <h2 className="project-title">IQAS</h2>
          <button className="project-details-button" onClick={openModal3}>
            Read More
          </button>
          <ModalThree isOpen={isModal3Open} onClose={closeModal3} />
        </div>
        <div className="project">
          <img
            src={Duolingo}
            alt="Project Cover"
            className="project-image-cover"
          />
          <h2 className="project-title">Duolingo Clone</h2>
          <button className="project-details-button" onClick={openModal1}>
            Read More
          </button>
          <ModalOne isOpen={isModal1Open} onClose={closeModal1} />
        </div>
        <div className="project">
          <img
            src={OtherProjects}
            alt="Project Cover"
            className="project-image-cover"
          />
          <h2 className="project-title">Some Other</h2>
          <button className="project-details-button" onClick={openModal2}>
            Read More
          </button>
          <ModalTwo isOpen={isModal2Open} onClose={closeModal2} />
        </div>
      </div>

      <a href="#contact">
        <img src={Arrow} alt="Arrow Icon" className="icon arrow" />
      </a>
    </section>
  );
}
