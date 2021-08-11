import eff_group1 from "../../images/about_eff/eff_groups/1.jpg";
import eff_group2 from "../../images/about_eff/eff_groups/2.jpg";
import eff_group3 from "../../images/about_eff/eff_groups/3.jpg";
import eff_group4 from "../../images/about_eff/eff_groups/4.jpg";
import eff_group5 from "../../images/about_eff/eff_groups/5.jpg";
import eff_group6 from "../../images/about_eff/eff_groups/6.jpg";
import "./style.scss";

const Section3 = () => {
  return (
    <div className="section-3 mt-5">
      <h1>About the Exclusive Fabrics Groups ..</h1>
      <h6 className="mt-5">
        Founded in 1902 by Robert Mould, Romo is a family run business in its
        fifth generation.
      </h6>
      <p className="mt-4">
        Based in Nottinghamshire, UK, with offices and showrooms in London,
        Europe and the USA, The Romo Group now has six established brands all of
        which have their own unique character and style. Each brand has its own
        in-house design studio creating a diverse range of fabrics,
        wallcoverings, trimmings and accessories to suit customers' tastes and
        needs worldwide.
      </p>
      <div className="row mt-5">
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
          <img src={eff_group1} alt="eff_group1"></img>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
          <img src={eff_group2} alt="eff_group2"></img>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
          <img src={eff_group3} alt="eff_group3"></img>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
          <img src={eff_group4} alt="eff_group4"></img>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
          <img src={eff_group5} alt="eff_group5"></img>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
          <img src={eff_group6} alt="eff_group6"></img>
        </div>
      </div>
    </div>
  );
};

export default Section3;
