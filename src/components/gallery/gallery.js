import "./gallery.scss";
import type_10 from "../../images/valvet-types/type-10.jpg";
import type_1 from "../../images/valvet-types/type-1.jpg";
import type_2 from "../../images/valvet-types/type-2.jpg";
import type_3 from "../../images/valvet-types/type-3.jpg";
import type_4 from "../../images/valvet-types/type-4.jpg";
import type_5 from "../../images/valvet-types/type-5.jpg";
import type_6 from "../../images/valvet-types/type-6.jpg";
import type_7 from "../../images/valvet-types/type-7.jpg";
import type_8 from "../../images/valvet-types/type-8.jpg";
import type_9 from "../../images/valvet-types/type-9.jpg";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Gallery = () => {
  const location = useLocation();

  return (
    <div className="container velvet-types">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <Link to={`${location.pathname}/royal_lux_velvet`}>
            <img src={type_1} alt="valvet-cat" />{" "}
          </Link>
          <div className="info">
            <TiLocationArrow />
            <p>Royal Lux Valvet</p>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_2} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Signature Plush Valvet</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_3} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Performance Valvet</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_4} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Urban Lush Valvet</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_5} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Heritage Plush Valvet</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_6} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Coated Plush Valvet</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_7} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Signature Blackout Valvet</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_8} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Vintage Cotton Valvet </p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_9} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Pleated Signature Blackout Valvet </p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov">
          <img src={type_10} alt="valvet-cat" />
          <div className="info">
            <TiLocationArrow />
            <p>Grommet Valvet </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
