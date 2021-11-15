import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import "./productCarousel.scss";
import Loader from "../Loader/loader1";

import { useMediaQuery } from "react-responsive";
import { VscZoomIn } from "react-icons/vsc";
var createClass = require("create-react-class");

var Article = createClass({
  render: function () {
    var image = this.props.data.product_creative_image,
      title = this.props.data.product_name;

    return (
      <figure className="snip1584">
        <img src={image} />
        <figcaption
          onClick={() => this.props.openImageViewer(this.props.index)}
        >
          <h3>
            {title} <VscZoomIn />
          </h3>
        </figcaption>
      </figure>
    );
  },
});
var News = createClass({
  render: function () {
    var data = this.props.data;
    var openImageViewer = this.props.openImageViewer;
    var md = this.props.md;
    var lg = this.props.lg;
    var sm = this.props.sm;
    var xs = this.props.xs;

    var newsTemplate;
    var settings = {
      infinite: false,
      slidesToShow: lg ? 3 : md ? 2 : sm || xs ? 1 : 4,
      slidesToScroll: 1,
      arrows: true,
    };

    if (data && data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            <Article
              data={item}
              index={index}
              openImageViewer={openImageViewer}
            />
          </div>
        );
      });
    } else {
      return (
        <center>
          <Loader />
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
