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
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./gallery.scss";

const Gallery = (props) => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="container velvet-types">
      <div className="row">
        {props.products &&
          props.products.map((p) => (
            <Link to={location.pathname + p.product_slug}>
              <div
                onClick={() => props.selectProduct(p)}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 hov"
              >
                <img src={p.product_creative_image} alt="valvet-cat" />
                <div className="info">
                  <TiLocationArrow />
                  <p>{p.product_name}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
