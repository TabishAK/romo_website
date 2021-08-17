import SwatchReview from "./../../components/swatchReview/swatchReview";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./swatches.scss";
import { useState } from "react";

const Swatches = (props) => {
  const [classNamay, setClassNamay] = useState("swatches");

  const makeBlur = () => {
    setClassNamay("swatches blur");
  };

  const removeBlur = () => {
    setClassNamay("swatches");
  };

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />
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
