import "./brouchers.scss";
import Navbar from "./../../components/navbar/navbar";
import broucherImage from "../../images/brouchers/b1.jpg";
import { useState } from "react";
import { ImDownload } from "react-icons/im";
const Brouchers = (props) => {
  const [classNamay, setClassNamay] = useState("brouchers");

  const makeBlur = () => {
    setClassNamay("brouchers blur");
  };

  const removeBlur = () => {
    setClassNamay("brouchers");
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container broucher-heading">
        <h1>Exclusive Fabrics Brouchers</h1>
      </div>

      <div className="container broucher-card">
        <div className="row">
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />
            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />

            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />

            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />

            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />

            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />

            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
          <div className="col-4 mb-5">
            <p>Itami, Katori, Kensey, Nicoya, and Jacuba</p>
            <img src={broucherImage} alt="" />

            <span className="mt-3">
              <ImDownload />
              Download
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brouchers;
