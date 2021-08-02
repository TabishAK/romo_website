import "./swatchReview.scss";
import SliderImage from "react-zoom-slider";
import Line from "../line/line";
const SwatchReview = (props) => {
  return (
    <div className="container swatch-review">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" id="samples">
          <h2>Valvet</h2>
          <SliderImage data={props.swatches} width="100%" direction="bottom" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 prod-description">
          <h5>Asher Pesto</h5>
          <Line lineStyle={{ marginTop: "80px", background: "#dcdcdc00" }} />
          <span>
            <p>Description:</p>
            <p>
              An impressive, asymmetrical multi stripe with a large, bold
              repeat; natural linen provides a subtle movement of colour to an
              already confident palette in this modern upholstery weave.
            </p>
          </span>
          <span>
            <p>Collection:</p>
            <p>Valvet</p>
          </span>
          <span>
            <p>Composition:</p>
            <p> 41% VI 39% CO 20% LI</p>
          </span>
          <span>
            <p>Width:</p>
            <p> 140 cms (55.1 ")</p>
          </span>
        </div>
      </div>

      <Line lineStyle={{ marginTop: "35px", background: "#dcdcdc00" }} />
    </div>
  );
};

export default SwatchReview;
