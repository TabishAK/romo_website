import Navbar from "../../components/navbar/navbar";
import Footer from "./../../components/footer/footer";
import leadershipMainImage from "../../images/leadership/12.jpg";
import "./leadership.scss";
import { useState } from "react";
import { GiJugglingSeal } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { TiSocialAtCircular } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import img1 from "../../images/leadership/emp1.jpg";
import img2 from "../../images/leadership/emp2.jpg";
import img3 from "../../images/leadership/emp3.jpg";
import img4 from "../../images/leadership/emp4.jpg";
import aboutUs from "../../images/leadership/about-us.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
const Leadership = (props) => {
  const [classNamay, setClassNamay] = useState("leadership");

  const makeBlur = () => {
    setClassNamay("leadership blur");
  };

  const removeBlur = () => {
    setClassNamay("leadership");
  };

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />

      <div className="container">
        <h1 className="container-heading">
          Our dedicated team of creatives is bursting with talent, experience
          and passion for what we do.
        </h1>

        <center>
          <img src={leadershipMainImage} alt="" />
        </center>
      </div>

      <div className="who-are-we">
        <div className="container">
          <div className="who-are-we-question">
            <div className="heading">
              <h1>Who We Are ?</h1>
            </div>
            <div className="paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features">
        <div className="container">
          <h6>Best Features</h6>
          <h1>
            We are a new digital product
            <br /> development agency
          </h1>

          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="panel">
                <div className="svg">
                  <div className="icon">
                    <GiJugglingSeal />
                  </div>
                </div>
                <div className="text">
                  <h3>Graphic Design</h3>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="panel">
                <div className="svg">
                  <div className="icon">
                    <AiOutlineMobile />
                  </div>
                </div>
                <div className="text">
                  <h3>Web & Mobile Design</h3>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="panel">
                <div className="svg">
                  <div className="icon">
                    <TiSocialAtCircular />
                  </div>
                </div>
                <div className="text">
                  <h3>Social Media Marketing</h3>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="panel">
                <div className="svg">
                  <div className="icon">
                    <HiOutlineDocumentReport />
                  </div>
                </div>
                <div className="text">
                  <h3>Document Legal Policy</h3>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>Our Staff</h5>
              <h1>We help to create visual strategies.</h1>
              <p>
                We are Vie. We create award-winning websites,
                <br /> remarkable brands and cutting-edge apps. <br />
                Nullam imperdie.
              </p>
              <h2 style={{ marginBottom: "2rem" }}>
                Here are some of our great skills
              </h2>
              <h6>UI DESIGN</h6>
              <div class="bar learning"></div>
              <h6>UX DESIGN</h6>
              <div class="bar back basic"></div>
              <h6>DIGITAL MARKETING</h6>
              <div class="bar back intermediate"> </div>
              <h6>SOCIAL MEDIA</h6>
              <div class="bar front advanced"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img1} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img2} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img3} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-xl-6">
              <img src={aboutUs} alt="" />
            </div>
            <div className="col-xl-6">
              <h1>About Us</h1>
              <p className="below-about-us-heading">
                Our creative Ad agency is ranked among the finest in the US.
                <br /> We cultivate smart ideas for start-ups and seasoned
                players.
              </p>

              <div className="heading-for-about">
                <h4 className="about-us-section-heading">
                  <AiOutlineInfoCircle
                    style={{
                      position: "relative",
                      top: "-3px",
                      marginRight: "5px",
                    }}
                  />
                  Our Mission
                </h4>
                <p>
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </div>

              <hr />

              <div className="heading-for-about">
                <h4 className="about-us-section-heading">
                  <AiOutlineInfoCircle
                    style={{
                      position: "relative",
                      top: "-3px",
                      marginRight: "5px",
                    }}
                  />
                  Our Goals
                </h4>
                <p>
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </div>
              <hr />
              <div className="heading-for-about">
                <h4 className="about-us-section-heading">
                  <AiOutlineInfoCircle
                    style={{
                      position: "relative",
                      top: "-3px",
                      marginRight: "5px",
                    }}
                  />
                  Why Us?
                </h4>
                <p>
                  luctus massa ipsum at tempus eleifend congue lectus bibendum
                </p>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leadership;
