import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import alpoCardImage from "../assets/member-photos/alpo-card-img.png";
import Logo from "./Logo";
import "../App.css";

function TeamProject() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <header>
        <Link to="/" className="logo-link">
          <Logo />
        </Link>

        <h2 className="tagline">Connecting the dots to success</h2>
      </header>
      <h1>Our project</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={8000}>

        <Carousel.Item>
          <img src="https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-gray-solid-color-background.jpg" height={"500px"}/>
          <Carousel.Caption>
          <h3>Design challenge</h3>
            <p className="projectDescription">
              The design challenge for our project was introduced by the city of Helsinki,
              as they are looking for ways to increase activeness among young people.  
              <br/>
              <br/>
              Among the different themes provided, we chose:
              <br/>
              1. Social interaction as a promoter of physical activity among 
              upper secondary students.
              <br/>
              2. New solutions for more effectively balancing supply and demand.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default TeamProject;
