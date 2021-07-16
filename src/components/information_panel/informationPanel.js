import logo from "../../images/logo_updated/eff_logos2.png";
import ShowBrandsButton from "../../components/showBrandsButton/showBrandsButton";
import fa from "../../images/brands/fa.jpg";
import fm from "../../images/brands/fm.jpg";
import fo from "../../images/brands/fo.jpg";
import hpd from "../../images/logo/hpd.png";
import "./informationPanel.scss";
const InformationPanel = () => {
  return (
    <div className="container information-panel">
      <center>
        <img className="logo-black" src={logo} alt="eff" />
      </center>

      <p>
        Generations of experience and distinctive British design are the
        foundation of the Romo brand. Renowned for our assorted library of
        contemporary and classic designs and versatile plains, our talented
        design team create elegantly crafted fabric and wallcovering collections
        that are diverse in style and enriched with a sophisticated colour
        palette. Romo is the founding brand of The Romo Group, comprising six
        established interior brands each with their own unique character and
        style.
      </p>
      <ShowBrandsButton />
      <div className="row info-panel-images">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-1">
          <div id="all">
            <div class="view view-first">
              <img src={hpd} alt="" />

              <div class="mask">
                <h2>Half Price Drapes</h2>
                <p>
                  Embracing the growing trend for outdoor living, external
                  spaces are being transformed into stylish havens. Combining
                  contemporary style with practicality and durability.
                </p>
                <a href="#" class="info">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-2">
          <img src={fa} alt="fa" />
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-3">
          <img src={fm} alt="fm" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-4">
          <img src={fo} alt="fo" />
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
