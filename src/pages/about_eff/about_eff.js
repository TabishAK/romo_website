import Section4 from "./../../components/about_eff_components/section4";
import Section5 from "./../../components/about_eff_components/section5";
import Section1 from "../../components/about_eff_components/section1";
import Section2 from "../../components/about_eff_components/section2";
import Section3 from "../../components/about_eff_components/section3";
import "../../components/about_eff_components/style.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./about_eff.scss";
import { useState } from "react";

const AboutEFF = (props) => {
  const [classNamay, setClassNamay] = useState("about-eff");

  const makeBlur = () => {
    setClassNamay("about-eff blur");
  };

  const removeBlur = () => {
    setClassNamay("about-eff");
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <Sidebar display={props.display} closeRightMenu={props.closeRightMenu} />

      <div className="container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <Footer />
    </div>
  );
};

export default AboutEFF;
