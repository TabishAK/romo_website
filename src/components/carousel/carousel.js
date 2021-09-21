import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/banner/1.jpg";
import img2 from "../../images/banner/2.jpg";
import img3 from "../../images/banner/3.jpg";
import vid from "../../videos/sheers_low.mp4";
import ReactPlayer from "react-player";
import { useState } from "react";
import "./carousel.scss";

const TopCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade interval={90000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ReactPlayer
          url={vid}
          muted
          autoPlay
          playing
          loop
          width="100%"
          height="937px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default TopCarousel;
