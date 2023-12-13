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
            <h3 className="projectDescription">Design challenge</h3>
            <p className="projectDescription">
              The design challenge for our project was introduced by the city of
              Helsinki, as they are looking for ways to increase activeness
              among young people.
              <br />
              <br />
              Among the different themes provided, we chose:
              <br />
              1. Social interaction as a promoter of physical activity among
              upper secondary students.
              <br />
              2. New solutions for more effectively balancing supply and demand.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default TeamProject;
