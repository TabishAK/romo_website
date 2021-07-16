import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import TopCarousel from "./../../components/carousel/carousel";
import Sideba from "./../../components/sidebar/sidebar";
import Navbar from "./../../components/navbar/navbar";
import React, { useState } from "react";
import "./home.scss";
import MoreOptions from "../../components/moreOptions/moreOptions";

import logo from "../../images/logo_updated/eff_logos2.png";
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

      <div className="footer container-fluid mt-5">
        <img src={logo} alt="logo" />
        <div className="row mt-4">
          <div className="col">
            <ul>
              <label>PRODUCTS</label>
              <li>Fabrics</li>
              <li>Curtain and drapes</li>
              <li>Home Decore</li>
              <li>Bedding</li>
              <li>Hardware</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <label>PROVIDERS</label>
              <li>Half Price Drapes</li>
              <li>Sierra Textiles</li>
              <li>Half Price Linun</li>
              <li>Loom</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <label>COMPANY</label>
              <li>Meet EFF</li>
              <li>Contact Us</li>
              <li>Apply For Job</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <label>INFORMATION</label>
              <li>Meet EFF</li>
              <li>Contact Us</li>
              <li>Apply For Job</li>
              <li>FAQ's</li>
            </ul>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
