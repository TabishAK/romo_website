import Navbar from "../../components/navbar/navbar";
import "./about_eff.scss";
import Section1 from "../../components/about_eff_components/section1";
import Section2 from "../../components/about_eff_components/section2";
const AboutEFF = (props) => {
  return (
    <div className="about-eff">
      <Navbar st={props.st} />

      <div className="container">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default AboutEFF;
