import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../images/image-slider/1.JPG";
import img2 from "../../images/image-slider/2.JPG";
import img3 from "../../images/image-slider/3.JPG";
import { useHistory } from "react-router-dom";
import { GoDesktopDownload } from "react-icons/go";
import Line from "../line/line";
import "./productReview.scss";

const ProductReview = (props) => {
  const images = [{ url: img1 }, { url: img2 }, { url: img3 }];
  let history = useHistory();

  return (
    <div className="container product-review">
      <div className="row">
        <div className="col-xl-7">
          <h2>Velvet</h2>
          <SimpleImageSlider
            startIndex={1}
            showBullets={true}
            width="100%"
            height={504}
            images={images}
            showNavs={true}
          />
        </div>
        <div className="col-xl-5">
          <p>
            Combining contemporary style with practicality and durability, Romo
            introduces a unique collection of outdoor fabrics. A desirable mix
            of intriguing geometrics and statement designs create an inspiring
            arrangement of characterful decorative weaves. This playful
            collection brings invigorating colour combinations and exciting
            textures to outdoor settings.
          </p>

          <div className="share-view-options">
            <span>
              <GoDesktopDownload />
              <h6>Download Brochure</h6>
            </span>
          </div>
        </div>
      </div>

      <Line />

      <div className="container swatches">
        <div className="row">
          {props.swatches.map((swatch, i) => (
            <div className="col-2">
              {/* <Link to={`${history.location.pathname}/${i}`}> */}
              <img
                src={swatch.image}
                alt=""
                onClick={() => props.showSwatches(i)}
              />
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
