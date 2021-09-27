import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import { useState } from "react";
import "./carousel.scss";

const TopCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      fade
      interval={900000}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <ReactPlayer
          url={props.banner && props.banner.video}
          muted
          playing
          loop
          width="100%"
          height="937px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.banner && props.banner.image_1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.banner && props.banner.image_2}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.banner && props.banner.image_3}
          alt="Third slide"
        />
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
