import vid from "../../videos/sheers.mp4";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import img1 from "../../images/banner/1.jpg";
import img2 from "../../images/banner/2.jpg";
import img3 from "../../images/banner/3.jpg";

const TopCarousel = () => {
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
          autoplay
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
