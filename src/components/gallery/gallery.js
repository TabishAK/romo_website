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
