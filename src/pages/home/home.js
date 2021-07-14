import React, { useState } from "react";
import "./home.scss";
import TopCarousel from "./../../components/carousel/carousel";
import Navbar from "./../../components/navbar/navbar";
import Sideba from "./../../components/sidebar/sidebar";

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
    </div>
  );
};

export default Home;
