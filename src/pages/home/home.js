import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import MoreOptions from "../../components/moreOptions/moreOptions";
import TopCarousel from "./../../components/carousel/carousel";
import Sideba from "./../../components/sidebar/sidebar";
import Navbar from "./../../components/navbar/navbar";
import React from "react";
import "./home.scss";
import Footer from "../../components/footer/footer";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar st={props.st} openRightMenu={props.openRightMenu} />
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
