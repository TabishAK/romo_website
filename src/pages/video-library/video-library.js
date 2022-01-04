import Navbar from "./../../components/navbar/navbar";
import "./video-library.scss";
import { useState, useEffect } from "react";
import Footer from "./../../components/footer/footer";
import { Link } from "react-router-dom";
import HorseLoader from "../../components/Loader/horseLoader";

const VideoLibrary = (props) => {
  const [classNamay, setClassNamay] = useState("video-library");
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("video-library blur");
  };

  const removeBlur = () => {
    setClassNamay("video-library");
  };

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  });

  return spinner ? (
    <HorseLoader />
  ) : (
    <div className="video-library">
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />

      <div className="video-library-banner">
        <div className="container">
          <h1>Video Library</h1>
          <h6>Watch our latest trends and fashion videos upto your choices.</h6>
        </div>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br /> <br />
      </div>

      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HvfhUySQ2w4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gJLl5k0syv8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2M_yNMrqXN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SQBnMy_anok"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s5p2_tLqY8A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HvfhUySQ2w4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GbjoIzScbdc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NC6nM9QPl-Y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-xl-6 mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lp7R9sVXaV8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <center>
          <Link
            to={{
              pathname:
                "https://www.youtube.com/c/HalfPriceDrapesWindowFashion",
            }}
            target="_blank"
          >
            <button
              style={{
                padding: "14px 32px",
                background: " #6bc9ca",
                border: "navajowhite",
                borderRadius: "5px",
                color: "white",
                fontSize: "16px",
                fontWeight: "400",
              }}
              className="mt-5"
            >
              See More
            </button>
          </Link>
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default VideoLibrary;
