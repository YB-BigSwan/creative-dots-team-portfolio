import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import sb1 from "../assets/storyboard/sb1.png";
import sb2 from "../assets/storyboard/sb2.png";
import sb3 from "../assets/storyboard/sb3.png";
import sb4 from "../assets/storyboard/sb4.png";
import sb5 from "../assets/storyboard/sb5.png";
import sb6 from "../assets/storyboard/sb6.png";
import sb7 from "../assets/storyboard/sb7.png";
import sb8 from "../assets/storyboard/sb8.png";
import sb9 from "../assets/storyboard/sb9.png";
import sb10 from "../assets/storyboard/sb10.png";
import sb11 from "../assets/storyboard/sb11.png";
import sb12 from "../assets/storyboard/sb12.png";
import sb13 from "../assets/storyboard/sb13.png";
import sb14 from "../assets/storyboard/sb14.png";
import sb15 from "../assets/storyboard/sb15.png";
import template from "../assets/project-photos/template.png";
import "../App.css";

function Storyboard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 1</h4>
            <img src={sb1} alt="storyboard1" className="storyboard-image"/>
            <p><br />Filip is an English upper-secondary school student who just 
            moved to Finland with his family. He is quite athletic and particularly 
            enjoys playing volleyball. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 2</h4>
            <img src={sb2} alt="storyboard2" className="storyboard-image"/>
            <p><br />Filip has found it difficult to find sports events that are 
            held in English as he doesn’t speak Finnish. This has led to him 
            spending most of his time scrolling through social media.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 3</h4>
            <img src={sb3} alt="storyboard3" className="storyboard-image"/>
            <p><br />One day while scrolling through Instagram, he came across 
            an ad for an application where you could find sports events.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 4</h4>
            <img src={sb4} alt="storyboard4" className="storyboard-image"/>
            <p><br />Filip was intrigued by the concept and downloaded the app. 
            In the app, he was met with the front page, where he saw different 
            functions the app had to offer. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 5</h4>
            <img src={sb5} alt="storyboard5" className="storyboard-image"/>
            <p><br />Browsing through the app, Filip found a map functionality 
            where he could see various events happening near him.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 6</h4>
            <img src={sb6} alt="storyboard6" className="storyboard-image"/>
            <p><br />Filip is only interested in volleyball events held in 
            English, so he uses filter functionality to have only those 
            visible on the map.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 7</h4>
            <img src={sb7} alt="storyboard7" className="storyboard-image"/>
            <p><br />Having found a nice event that fits his qualifications, 
            he registers to join it.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 8</h4>
            <img src={sb8} alt="storyboard8" className="storyboard-image"/>
            <p><br />Filip receives a reward for signing up for his first event, 
            as the app has a reward system. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 9</h4>
            <img src={sb9} alt="storyboard9" className="storyboard-image"/>
            <p><br />Filip attends the event, making friends and memories.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 10</h4>
            <img src={sb10} alt="storyboard10" className="storyboard-image"/>
            <p><br />At the event, Filip scans a QR code for attendance from 
            which he receives more points in the app.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 11</h4>
            <img src={sb11} alt="storyboard11" className="storyboard-image"/>
            <p><br />Filip now has enough points to claim a discount from 
            Stadium, which he decides to use to buy a new football.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 12</h4>
            <img src={sb12} alt="storyboard12" className="storyboard-image"/>
            <p><br />With his new ball, Filip tries to search events for football 
            near him, but there aren’t any! </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 13</h4>
            <img src={sb13} alt="storyboard13" className="storyboard-image"/>
            <p><br />Unable to find football-related events, Filip decides to 
            create an event of his own and chooses English to be the language. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 14</h4>
            <img src={sb14} alt="storyboard14" className="storyboard-image"/>
            <p><br /> Part of event creating, he books a venue for the event.
             He’s presented with a few options but goes for the one that’s free.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>Scene 15</h4>
            <img src={sb15} alt="storyboard15" className="storyboard-image"/>
            <p><br />Filip hosts the event, making great memories again. In the future, 
            Filip wants to keep attending events and stay active, as well as make friends 
            with the locals. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={template} />
          <Carousel.Caption>
            <h4>the end.</h4>
            </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default Storyboard;
