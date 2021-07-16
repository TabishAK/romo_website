import "./moreOptions.scss";
import meet from "../../images/div/meet.jpg";
import cushions from "../../images/div/cushions.jpg";
import map from "../../images/div/map.jpg";

const MoreOptions = () => {
  return (
    <div className="container more-options">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 providers mt-5">
          <img src={map} alt="providers" />
          <h5>Providers</h5>
          <p>
            Find your nearest distributor for exclusive fabrics furnishing,
            wallpapers and accessories.
          </p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 shopping mt-5">
          <img src={cushions} alt="shopping" />
          <h5>Shopping</h5>
          <p>See Exclusive Fabrics Furnishing's latest cushions.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 meet mt-5">
          <img src={meet} alt="meet" />
          <h5>Meet Exclusive Fabrics Furnishing.</h5>
          <p> Find out more about Exclusive Fabrics Furnishing.</p>
        </div>
      </div>
    </div>
  );
};

export default MoreOptions;
