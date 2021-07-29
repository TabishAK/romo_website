import "./productReview.scss";
import SimpleImageSlider from "react-simple-image-slider";
import { FiShare2 } from "react-icons/fi";
import { BsViewList } from "react-icons/bs";
import img1 from "../../images/image-slider/1.JPG";
import img2 from "../../images/image-slider/2.JPG";
import img3 from "../../images/image-slider/3.JPG";
import Line from "../line/line";
const ProductReview = (props) => {
  const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

  return (
    <div className="container product-review">
      <div className="row">
        <div className="col-xl-7">
          <h2>Valvet</h2>
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
              <FiShare2 /> <h6>Share with Friends</h6>
            </span>
            <span>
              <BsViewList />
              <h6>View Brochure</h6>
            </span>
          </div>
        </div>
      </div>

      <Line />

      <div className="container swatches" onClick={props.showSwatches}>
        <div className="row">
          {props.swatches.map((swatch, i) => (
            <div className="col-2">
              <img src={swatch.image} alt="" />
            </div>
          ))}
        </div>
        <div className="on-hover">
          <h1> Swatches</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
