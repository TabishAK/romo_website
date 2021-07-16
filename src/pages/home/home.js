import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import TopCarousel from "./../../components/carousel/carousel";
import Sideba from "./../../components/sidebar/sidebar";
import Navbar from "./../../components/navbar/navbar";
import React, { useState } from "react";
import "./home.scss";
import MoreOptions from "../../components/moreOptions/moreOptions";

const Home = () => {
  const [display, setDisplay] = useState(false);

  const openRightMenu = () => {
    setDisplay(true);
  };

  const closeRightMenu = () => {
    setDisplay(false);
  };
  return (
    <div className="home">
      <Navbar openRightMenu={openRightMenu} />
      <TopCarousel />
      <Sideba display={display} closeRightMenu={closeRightMenu} />
      <InformationPanel />
      <NewsLetterSub />
      <MoreOptions />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
