import React, { useState } from "react";
import "./home.scss";
import TopCarousel from "./../../components/carousel/carousel";
import Navbar from "./../../components/navbar/navbar";
import Sideba from "./../../components/sidebar/sidebar";
import InformationPanel from "../../components/information_panel/informationPanel";

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
      <div className="container newsletter-subscription">
        <h4>Subscribe to our Newsletter</h4>
        <p>
          Discover the latest news, from new product launches and events, to
          inspiring updates.
          <br /> All information will be used by The Romo Group only and will
          not be passed on to third parties.
        </p>
      </div>

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
