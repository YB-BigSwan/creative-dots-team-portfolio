import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Logo from "./Logo";
import persona1 from "../assets/project-photos/persona1.png";
import persona2 from "../assets/project-photos/persona2.png";
import journeyMap from "../assets/project-photos/journeymap.png";
import empathyMap from "../assets/project-photos/empathy-map.png";
import blueprint from "../assets/project-photos/blueprint.png";
import template from "../assets/project-photos/template.png";
import "../App.css";

function JourneyMapping() {
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
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>

        <Carousel.Item>
          <img src={persona1} alt="user persona" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={persona2} alt="user persona" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={journeyMap} alt="journey map" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={empathyMap} alt="empathy map" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={blueprint} alt="service blueprint" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default JourneyMapping;
