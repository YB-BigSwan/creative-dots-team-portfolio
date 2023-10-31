import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import alpoCardImage from "../assets/member-photos/alpo-card-img.png";
import elinaCardImage from "../assets/member-photos/elina-card-img.png";
import ferranCardImage from "../assets/member-photos/ferran-card-img.png";
import stephenCardImage from "../assets/member-photos/stephen-card-img.png";
import linkedInLogo from "../assets/linkedin-svgrepo-com.svg";
import githubLogo from "../assets/github-142-svgrepo-com.svg";
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
      <h1>Team projects</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={8000}>
        <Carousel.Item>
          <img src={alpoCardImage} alt="Elina" />
          <Carousel.Caption>
            <p className="memberDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              incidunt dolorum perspiciatis mollitia exercitationem at vero
              veniam maxime labore odit laudantium, corrupti, laboriosam ratione
              eius quibusdam harum explicabo laborum officia.
            </p>
            <div className="links">
              <img src={linkedInLogo} alt="linkedIn" />
              <img src={githubLogo} alt="GitHub" />
            </div>
            <h3>Alpo Remes</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={elinaCardImage} alt="dog" />
          <Carousel.Caption>
            <p className="memberDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, accusamus sint reiciendis nemo magnam dignissimos
              similique laboriosam repudiandae id dolor, sed reprehenderit
              deleniti incidunt exercitationem doloremque nobis quidem alias
              quis!
            </p>
            <div className="links">
              <img src={linkedInLogo} alt="linkedIn" />
              <img src={githubLogo} alt="GitHub" />
            </div>
            <h3>Elina Pekkanen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ferranCardImage} alt="cat" />
          <Carousel.Caption>
            <p className="memberDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eligendi assumenda deserunt totam. Ipsum, incidunt dignissimos
              voluptates nam unde molestiae ipsam nihil deleniti porro, vero
              numquam, sapiente exercitationem doloribus mollitia.
            </p>
            <div className="links">
              <img src={linkedInLogo} alt="linkedIn" />
            </div>
            <h3>Ferran martí</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={stephenCardImage} alt="cat" />
          <Carousel.Caption>
            <p className="memberDescription">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              minima facilis dignissimos fuga nobis illum vitae reprehenderit
              tempora ad et dolorem eligendi quis ducimus nam deserunt error
              provident, quod blanditiis?
            </p>
            <div className="links">
              <img src={linkedInLogo} alt="linkedIn" />
              <img src={githubLogo} alt="GitHub" />
            </div>
            <h3>Stephen Swanson</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default TeamProject;
