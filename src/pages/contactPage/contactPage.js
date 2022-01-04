import Navbar from "./../../components/navbar/navbar";
import { useState, useEffect } from "react";
import "./contactPage.scss";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaFax, FaMailBulk } from "react-icons/fa";
import Footer from "./../../components/footer/footer";
import HorseLoader from "../../components/Loader/horseLoader";
const ContactPage = (props) => {
  const [classNamay, setClassNamay] = useState("contact-page");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  });

  const makeBlur = () => {
    setClassNamay("contact-page blur");
  };

  const removeBlur = () => {
    setClassNamay("contact-page");
  };

  return spinner ? (
    <HorseLoader />
  ) : (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container icon-section">
        <center>
          <h1>Let's Connect!</h1>
        </center>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <MdLocationOn />
            <h5 className="mt-4">OUR MAIN OFFICE</h5>
            <p className="mt-3">SoHo 94 Broadway St New York, NY 1001</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <FaPhone />
            <h5 className="mt-4">PHONE NUMBER</h5>
            <p className="mt-3">
              234-9876-5400
              <br /> 888-0123-4567 (Toll Free)
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <FaFax />
            <h5 className="mt-4">FAX</h5>
            <p className="mt-3">1-234-567-8900</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <FaMailBulk />
            <h5 className="mt-4">MAIL</h5>
            <p className="mt-3">hello@eff.com</p>
          </div>
        </div>
        <hr
          style={{
            position: "relative",
            marginTop: "3rem",
            background: "gainsboro",
            height: 0,
          }}
        />
      </div>

      <div className="container form-map">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h3>GET A FREE CASE EVALUATION TODAY!</h3>
            <h5>AVAILABLE 24 HOURS A DAY!</h5>
            <div className="form-contact-us">
              <input
                name="name"
                value=""
                type="text"
                placeholder="Enter your name."
              />
              <input
                name="email"
                value=""
                type="text"
                placeholder="Enter valid email address"
              />

              <textarea
                className="mt-2"
                name="message"
                value=""
                type="text"
                placeholder="Enter your message here.."
              />
            </div>

            <button
              className="mt-4"
              style={{
                padding: "10px 30px",
                border: "none",
                borderRadius: 8,
                color: "white",
                background: "#87d3d4",
              }}
            >
              Submit{" "}
            </button>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.0318848775632!2d-121.80277684917284!3d37.695450224393376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe62d7b1d18c1%3A0x723709a3d8a98a5b!2sExclusive%20Fabrics%20%26%20Furnishings%2C%20LLC!5e0!3m2!1sen!2s!4v1636547475033!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
