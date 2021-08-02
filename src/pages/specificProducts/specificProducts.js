import "./specificProducts.scss";
import Navbar from "../../components/navbar/navbar";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import ProductReview from "../../components/productReview/productReview";
import swatch_1 from "../../images/swatches/swatch-1.jpg";
import swatch_2 from "../../images/swatches/swatch-2.jpg";
import swatch_3 from "../../images/swatches/swatch-3.jpg";
import swatch_4 from "../../images/swatches/swatch-4.jpg";
import swatch_5 from "../../images/swatches/swatch-5.jpg";
import swatch_6 from "../../images/swatches/swatch-6.jpg";
import swatch_7 from "../../images/swatches/swatch-7.jpg";
import swatch_8 from "../../images/swatches/swatch-8.jpg";
import swatch_9 from "../../images/swatches/swatch-9.jpg";
import swatch_10 from "../../images/swatches/swatch-10.jpg";
import SwatchReview from "../../components/swatchReview/swatchReview";
import { useState } from "react";
import Footer from "./../../components/footer/footer";

const SpecificProducts = (props) => {
  let [swatches, setSwatches] = useState([
    { id: 1, image: swatch_1 },
    { id: 2, image: swatch_2 },
    { id: 3, image: swatch_3 },
    { id: 4, image: swatch_4 },
    { id: 5, image: swatch_5 },
    { id: 6, image: swatch_6 },
    { id: 7, image: swatch_7 },
    { id: 8, image: swatch_8 },
    { id: 9, image: swatch_9 },
    { id: 10, image: swatch_10 },
  ]);

  const [isSwatch, setSwatch] = useState(false);

  const showSwatches = (i) => {
    let s = [...swatches];
    let temp = s[0];
    s[0] = s[i];
    s[i] = temp;
    setSwatches(s);
    setSwatch(true);
  };

  return (
    <div className="specific-products">
      <Navbar st={props.st} />
      <Breadcrumbs />

      {isSwatch ? (
        <SwatchReview swatches={swatches} />
      ) : (
        <ProductReview swatches={swatches} showSwatches={showSwatches} />
      )}

      <Footer />
    </div>
  );
};

export default SpecificProducts;
