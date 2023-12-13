import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import persona1 from "../assets/project-photos/persona-juuso.png";
import persona2 from "../assets/project-photos/persona-maria.png";
import journeyMap from "../assets/project-photos/journeymap_2ndver.png";
import background from "../assets/project-photos/template.png";
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
          <img src={background} alt="user persona" />
          <Carousel.Caption>
            <img src={persona1} alt="journey map" className="journeymap-image" />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={background} alt="user persona" />
          <Carousel.Caption>
            <img src={persona2} alt="journey map" className="journeymap-image" />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={background} alt="journey map" />
          <Carousel.Caption>
            <img src={journeyMap} alt="journey map" className="journeymap-image" />
          </Carousel.Caption>
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
