import ProductReview from "../../components/productReview/productReview";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./specificProducts.scss";
import { useState } from "react";
import b1 from "../../images/brouchers/1.jpg";
import s1 from "../../images/brouchers/Velvet/Urban Lush/Swatches/1.jpg";
import s2 from "../../images/brouchers/Velvet/Urban Lush/Swatches/2.jpg";
import s3 from "../../images/brouchers/Velvet/Urban Lush/Swatches/3.jpg";
import s4 from "../../images/brouchers/Velvet/Urban Lush/Swatches/4.jpg";
import s5 from "../../images/brouchers/Velvet/Urban Lush/Swatches/5.jpg";
import s6 from "../../images/brouchers/Velvet/Urban Lush/Swatches/6.jpg";

const SpecificProducts = (props) => {
  const [classNamay, setClassNamay] = useState("specific-products");

  const makeBlur = () => {
    setClassNamay("specific-products blur");
  };

  const removeBlur = () => {
    setClassNamay("specific-products");
  };

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />
      <Breadcrumbs />

      <div className="container editContainer">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5 product">
            <img src={b1} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5">
            <h2 className="ml-3">URBAN LUSH</h2>
            <hr />
            <p className="mt-4 mr-5">
              The perfect combination of sophistication and modernity. Urban
              velvet is densely woven using the finest yarns to create a
              luxuriously soft velvet with a silky appearance and the most
              exquisite rich jewel-like tones and classic neutrals. A
              specialized finishing technique gives a natural look and
              exceptionally soft supple handle that offers high performance and
              practicality.
            </p>

            <h1 className="swatches">SWATCHES</h1>
            <div className="row swatch-images">
              <div className="col-3 mt-5">
                <img src={s1} alt="" />
              </div>
              <div className="col-3 mt-5">
                <img src={s2} alt="" />
              </div>
              <div className="col-3 mt-5">
                <img src={s3} alt="" />
              </div>
              <div className="col-3 mt-5">
                <img src={s4} alt="" />
              </div>
              <div className="col-3 mt-5">
                <img src={s5} alt="" />
              </div>
              <div className="col-3 mt-5">
                <img src={s6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ProductReview
        showSwatches={props.showSwatches}
        swatches={props.swatches}
      /> */}
      <Footer />
    </div>
  );
};

export default SpecificProducts;
