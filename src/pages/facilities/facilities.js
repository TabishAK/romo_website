import Navbar from "../../components/navbar/navbar";
import "./facilities.scss";
import { useState } from "react";
import facilities from "../../images/facilities/1.jpg";
import facilities2 from "../../images/facilities/2.jpg";
import facilities3 from "../../images/facilities/3.jpeg";
import map_img from "../../images/facilities/4.png";

import Button1 from "./../../components/buttons/button1";
import Footer from "./../../components/footer/footer";
import {
  GiHealthPotion,
  GiCommercialAirplane,
  GiGreenhouse,
} from "react-icons/gi";
import {
  MdOutlineCastForEducation,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

const Facilities = (props) => {
  const [classNamay, setClassNamay] = useState("facilities");

  const makeBlur = () => {
    setClassNamay("facilities blur");
  };

  const removeBlur = () => {
    setClassNamay("facilities");
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />

      <div className="image-with-two-div">
        <div className="container">
          <h1>Facilities in Exlusive Fabrics Furnsishing</h1>
          <center>
            <img className="building" src={facilities} alt="" />
          </center>
        </div>

        <div className="container two-div">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 right">
              <div className="women">
                <img src={facilities2} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 left">
              <div className="text-div">
                <p>
                  We have several business and industrial parks with available
                  space for your business
                </p>

                <Button1 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container construction-and-co">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12 text-middle">
            <h1>
              Construction <br />
              Machinery Co.
            </h1>

            <h3>
              We has a proud tradition of service <br /> as a General Contractor
              since 1974
            </h3>
            <p>
              We headquartered in San Diego, brings over 42 years of local and
              national construction experience; with a reputation for delivering
              large and unique design-build projects ahead of schedule and on
              budget. Our company has served clients and building owners for
              over four decades.
            </p>

            <Button1 />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12 img">
            <img src={facilities3} alt="" />
          </div>
        </div>
      </div>

      <div className="certifications">
        <div className="container ">
          <h3>What we do</h3>
          <h1>Company Certifications</h1>
          <p className="certification-text">
            Our company offers a variety of services to meet your project’s
            needs, to take you from collaboration meetings all the way to
            ribbon-cutting and beyond. We believe that every project is unique,
            and can customize our approach to fit your particular project.
          </p>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <GiHealthPotion />
              <h2>Healthcare Building</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <MdOutlineCastForEducation />
              <h2>Education Building</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <RiGovernmentLine />
              <h2>Government Building</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <GiCommercialAirplane />
              <h2>Commercial Building</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <GiGreenhouse />
              <h2>Residential Building</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <MdOutlineRestaurantMenu />
              <h2>Restaurant Building</h2>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="world-team">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img src={map_img} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3>Exclusive Fabrics Furnishing</h3>
              <h1>The Best World Team</h1>

              <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                gravida cursus eleifend. Nullam ornare sapien quis vulputate
                cursus. Vivamus vel pellentesque purus, sed dignissim elit.
                Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in
                nibh risus. Phasellus ut cursus sem.
              </p>

              <Button1 />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Facilities;
