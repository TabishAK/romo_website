import { useHistory } from "react-router-dom";
import SliderImage from "react-zoom-slider";
import { Link } from "react-router-dom";
import Line from "../line/line";
import "./swatchReview.scss";

const SwatchReview = (props) => {
  let history = useHistory();
  let breaked = history.location.pathname.split("/");
  console.log(history.location.pathname);
  return (
    <div className="container swatch-review">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" id="samples">
          <h2>Valvet</h2>
          <SliderImage data={props.swatches} width="100%" direction="bottom" />
          <ul>
            {props.swatchesClone.map((s, i) => (
              <Link to={`/${breaked[1]}/${breaked[2]}/${s.id}`}>
                <li>
                  <img
                    src={s.image}
                    onClick={() => props.editSwatch(s, i)}
                    alt={`swatch_${i}`}
                  ></img>
                </li>
              </Link>
              //
            ))}
          </ul>
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
