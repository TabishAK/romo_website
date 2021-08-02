import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import MoreOptions from "../../components/moreOptions/moreOptions";
import TopCarousel from "./../../components/carousel/carousel";
import Sideba from "./../../components/sidebar/sidebar";
import Navbar from "./../../components/navbar/navbar";
import React, { useState } from "react";
import "./home.scss";
import Footer from "../../components/footer/footer";

const Home = (props) => {
  const [display, setDisplay] = useState(false);

  const openRightMenu = () => {
    setDisplay(true);
  };

  const closeRightMenu = () => {
    setDisplay(false);
  };

  return (
    <div className="home">
      <Navbar st={props.st} openRightMenu={openRightMenu} />
      <TopCarousel />
      <Sideba display={display} closeRightMenu={closeRightMenu} />
      <InformationPanel />
      <NewsLetterSub />
      <MoreOptions />
      <Footer />
    </div>
  );
};

export default Home;
