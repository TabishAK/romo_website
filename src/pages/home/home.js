import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import MoreOptions from "../../components/moreOptions/moreOptions";
import TopCarousel from "./../../components/carousel/carousel";
import Sideba from "./../../components/sidebar/sidebar";
import Navbar from "./../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import React from "react";
import "./home.scss";

import { useState } from "react";

const Home = (props) => {
  const [classNamay, setClassNamay] = useState("home");

  const makeBlur = () => {
    setClassNamay("home blur");
  };

  const removeBlur = () => {
    setClassNamay("home");
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <TopCarousel />
      <Sideba display={props.display} closeRightMenu={props.closeRightMenu} />
      <InformationPanel />
      <NewsLetterSub />
      <MoreOptions />
      <Footer />
    </div>
  );
};

export default Home;
