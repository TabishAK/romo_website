import Navbar from "./../../components/navbar/navbar";
import "./careers.scss";
import { useState } from "react";
import CareerBanner from "../../components/careerBanner/careerBanner";
import Eff_Benefits from "../../components/eff_benfits/eff_benefits";
import JobOpening from "../../components/jobOpening/jobOpening";
import Footer from "./../../components/footer/footer";

const Careers = (props) => {
  const [classNamay, setClassNamay] = useState("careers");

  const makeBlur = () => {
    setClassNamay("careers blur");
  };

  const removeBlur = () => {
    setClassNamay("careers");
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />

      <CareerBanner />
      <Eff_Benefits />
      <hr />
      <JobOpening />
      <Footer />
    </div>
  );
};

export default Careers;
