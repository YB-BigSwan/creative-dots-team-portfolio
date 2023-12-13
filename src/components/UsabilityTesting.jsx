/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import template from "../assets/project-photos/template.png";
import "../App.css";

function TeamProject() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h3 className="projectDescription">Usability Testing</h3>
            <div className="testingDescription">
              Our usability testing was conducted over two days in the 6th floor
              lab. We used a standardized evaluation form, as well as the
              emotion tracking software to collect feedback to iterate upon.
              <br />
              <br />
              Main Findings:
              <br />
              <ul>
                <li>
                  The main purpose of the app, event navigation, and finding
                  worked well.
                </li>
                <li>
                  Two filters at the same time were not implemented, and the
                  functionality didn't work as intended.
                </li>
                <li>
                  Home screen menu placement caused uncertainty for the user.
                </li>
                <li>
                  Hamburger menu usage was disliked; preferred a fixed menu
                  without the need for opening.
                </li>
                <li>Consistency in menu position was emphasized.</li>
                <li>
                  Map feedback: unclear content, disliked the shape (preferred a
                  square).
                </li>
              </ul>
              <br />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default TeamProject;
