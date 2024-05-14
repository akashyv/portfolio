import React from "react";
import "./ModalTwo.css";

export default function ModalTwo(props) {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <ul>
            <li>
              <b>Todo List Manager</b>
              <ul>
                <li className="first-sub-bullet">
                  Built using <b>React.js</b>
                </li>
                <li>Allows users to enter tasks</li>
                <li>Supports task deletion upon completion</li>
                <li>
                  Features a simple and intuitive interface for managing tasks
                </li>
              </ul>
            </li>

            <li>
              <b>Snake Game</b>
              <ul>
                <li className="first-sub-bullet">
                  Developed using <b>C++</b>
                </li>
                <li>
                  Objective : Guide the snake to collect food items randomly
                  generated on the screen
                </li>
                <li>
                  Rules :
                  <ul>
                    <li className="first-sub-bullet">
                      The snake grows longer upon collecting food
                    </li>
                    <li>Game over if the snake collides with its own body</li>
                  </ul>
                </li>
                <li>
                  Features intuitive controls and dynamic gameplay experience
                </li>
              </ul>
            </li>
            <li>
              <b>Maze Game</b>
              <ul>
                <li className="first-sub-bullet">
                  Implemented using <b>C++</b>
                </li>
                <li>
                  Objective : Navigate an object through a maze to reach the
                  exit
                </li>
                <li>
                  Features :
                  <ul>
                    <li className="first-sub-bullet">
                      Player-controlled object movement
                    </li>
                    <li>
                      Challenging maze layouts to test problem-solving skills
                    </li>
                  </ul>
                  <li>
                    Provides an engaging and interactive yet simple gaming
                    experience for players
                  </li>
                </li>
              </ul>
            </li>
          </ul>
          <button onClick={onClose} className="contact-info-btn">
            Close
          </button>
        </div>
      </div>
    );
  }
}
