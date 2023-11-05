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
      <h1>Members</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={8000}>
        <Carousel.Item>
          <img src={alpoCardImage} alt="Alpo" />
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
          <img src={elinaCardImage} alt="Elina" />
          <Carousel.Caption>
            <p className="memberDescription">
              I am a 3rd-year BITE student specializing in 
              software engineering and digital services. During 
              my freetime I enjoy baking, crocheting, and meeting 
              with my friends. 
            </p>
            <div className="links">
              <a href="https://www.linkedin.com/in/elina-pekkanen-457a26264/" target="_blank">
                <img src={linkedInLogo} alt="linkedIn" />
              </a>
              <a href="https://github.com/elinapekka" target="_blank">
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
          <img src={stephenCardImage} alt="Stephen" />
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

export default MemberCarousel;
