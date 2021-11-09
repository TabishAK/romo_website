import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import MoreOptions from "../../components/moreOptions/moreOptions";
import TopCarousel from "./../../components/carousel/carousel";
import Navbar from "./../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import React from "react";
import "./home.scss";
import horseGIF from "../../images/horse.gif";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [classNamay, setClassNamay] = useState("home");
  const [banner, setBanner] = useState();
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("home blur");
  };

  const removeBlur = () => {
    setClassNamay("home");
  };

  const link = "http://54.183.217.110/";

  useEffect(() => {
    setSpinner(false);
    axios
      .get(link + "banner/")
      .then((response) => {
        setBanner(response.data[0]);
        setSpinner(false);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return spinner ? (
    <div className="loader">
      <img src={horseGIF} style={{ width: "15%" }} alt="loading" />
      <h1>Loading ...</h1>
    </div>
  ) : (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <TopCarousel banner={banner} />
      <InformationPanel />
      <NewsLetterSub />
      <MoreOptions />
      <Footer />
    </div>
  );
};

export default Home;
