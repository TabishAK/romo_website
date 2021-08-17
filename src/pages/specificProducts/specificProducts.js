import ProductReview from "../../components/productReview/productReview";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./specificProducts.scss";
import { useState } from "react";

const SpecificProducts = (props) => {
  const [classNamay, setClassNamay] = useState("specific-products");

  const makeBlur = () => {
    setClassNamay("specific-products blur");
  };

  const removeBlur = () => {
    setClassNamay("specific-products");
  };

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />
      <Breadcrumbs />
      <ProductReview
        showSwatches={props.showSwatches}
        swatches={props.swatches}
      />
      <Footer />
    </div>
  );
};

export default SpecificProducts;
