import SwatchReview from "./../../components/swatchReview/swatchReview";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./swatches.scss";

const Swatches = (props) => {
  return (
    <div className="swatches">
      <Navbar st={props.st} />
      <Breadcrumbs />
      <SwatchReview
        swatchesClone={props.swatchesClone}
        swatches={props.swatches}
        editSwatch={props.editSwatch}
      />
      <Footer />
    </div>
  );
};

export default Swatches;
