import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import alpoCardImage from "../assets/member-photos/alpo-card-img.png";
import elinaCardImage from "../assets/member-photos/elina-card-img.png";
import ferranCardImage from "../assets/member-photos/ferran-card-img.png";
import stephenCardImage from "../assets/member-photos/stephen-card-img.png";
import linkedInLogo from "../assets/linkedin-svgrepo-com.svg";
import githubLogo from "../assets/github-142-svgrepo-com.svg";
import "../App.css";

function MemberCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={8000}>
        <Carousel.Item>
          <img src={alpoCardImage} alt="Alpo" />
          <Carousel.Caption>
            <p className="memberDescription">
              I am a student from Finland, who is most interested in testing,
              databases, and React. I have a dog. Eating ice cream is my
              passion.
            </p>
            <div className="links">
              <img src={linkedInLogo} alt="linkedIn" />
              <img src={githubLogo} alt="GitHub" />
            </div>
            <h3>Alpo Remes</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={elinaCardImage} alt="Elina" />
          <Carousel.Caption>
            <p className="memberDescription">
              I am a 3rd-year BITE student specializing in software engineering
              and digital services. During my freetime I enjoy baking,
              crocheting, and meeting with my friends.
            </p>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/elina-pekkanen-457a26264/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedInLogo} alt="linkedIn" />
              </a>
              <a
                href="https://github.com/elinapekka"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubLogo} alt="GitHub" />
              </a>
            </div>
            <h3>Elina Pekkanen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ferranCardImage} alt="Ferran" />
          <Carousel.Caption>
            <p className="memberDescription">
              I am a dedicated student in the area of business and marketing. I
              consider myself to have good communication abilities, an
              analytical mindset, and am familiar with a great variety of
              marketing priciples.
            </p>
            <div className="links">
              <a
                href="https://linkedin.com/in/ferran-martí-martorell-189a26254"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedInLogo} alt="linkedIn" />
              </a>
            </div>
            <h3>Ferran Martí</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={stephenCardImage} alt="Stephen" />
          <Carousel.Caption>
            <p className="memberDescription">
              I am a 2nd year BITE student at Haaga-Helia studying software
              engineering, specializing in frontend development and design.
              During my free time you can find me playing an instrument, hanging
              out with my cat, or spending time with friends.
            </p>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/stephen-swanson-h/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedInLogo} alt="linkedIn" />
              </a>
              <a
                href="https://github.com/YB-BigSwan"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubLogo} alt="GitHub" />
              </a>
            </div>
            <h3>Stephen Swanson</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MemberCarousel;
