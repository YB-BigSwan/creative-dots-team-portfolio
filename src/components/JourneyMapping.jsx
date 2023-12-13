import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import persona1 from "../assets/project-photos/persona1.png";
import persona2 from "../assets/project-photos/persona2.png";
import journeyMap from "../assets/project-photos/journeymap.png";
import empathyMap from "../assets/project-photos/empathy-map.png";
import blueprint from "../assets/project-photos/blueprint.png";
import "../App.css";

function JourneyMapping() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
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
