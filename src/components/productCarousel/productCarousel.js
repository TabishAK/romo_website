import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "./productCarousel.scss";
import Loader from "../Loader/loader1";
var createClass = require("create-react-class");

var Article = createClass({
  render: function () {
    var image = this.props.data.product_creative_image,
      title = this.props.data.product_name;

    return (
      <figure className="snip1584">
        <img src={image} />
        <figcaption>
          <h3>{title}</h3>
        </figcaption>
      </figure>
    );
  },
});
var News = createClass({
  render: function () {
    var data = this.props.data;
    var newsTemplate;
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    };
    if (data && data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        );
      });
    } else {
      return (
        <center>
          <Loader />{" "}
        </center>
      );
    }
    return (
      <div className="news">
        <Slider {...settings}>{newsTemplate}</Slider>
      </div>
    );
  },
});

export default News;
